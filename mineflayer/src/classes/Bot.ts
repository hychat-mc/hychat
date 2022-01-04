import { WebhookClient } from 'discord.js';
import { createBot } from 'mineflayer';
import { createClient } from '@supabase/supabase-js';
import consola from 'consola';
import fs from 'fs/promises';
import path from 'path';

import { Event } from '../interfaces/Event';
import { EventEmitter } from 'stream';

class Bot {
	public static supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_KEY as string);

	public logger = consola;
	public chatHook;
	public officerChatHook;
	// public APIHook;
	public devHook = new WebhookClient({ url: process.env.DEV_WEBHOOK_URL as string });
	public onlineCount = 0;
	public totalCount = 125;
	public mineflayer = createBot({
		username: process.env.MINECRAFT_EMAIL as string,
		password: process.env.MINECRAFT_PASSWORD as string,
		host: 'mc.hypixel.net',
		version: '1.16.4',
		logErrors: true,
		hideErrors: false,
		auth: 'microsoft',
		checkTimeoutInterval: 30000,
	});

	constructor(chatHook: string, officerChatHook: string) {
		this.chatHook = new WebhookClient({ url: chatHook });
		this.officerChatHook = new WebhookClient({ url: officerChatHook });
		this.start().catch(this.logger.error);
	}

	public async sendMessage(message: string): Promise<void> {
		await this.executeCommand(`/gc ${message}`);
	}

	public async executeCommand(message: string): Promise<void> {
		this.mineflayer.chat(message);
	}

	private async loadEvents(dir = '../events', emitter: EventEmitter) {
		const files = await fs.readdir(path.join(__dirname, dir));

		for (const file of files) {
			const stat = await fs.lstat(path.join(__dirname, dir, file));

			if (stat.isDirectory()) {
				await this.loadEvents(path.join(dir, file), emitter);
			} else {
				if (!(file.endsWith('.ts') || file.endsWith('.js'))) continue;
				try {
					const { name, run } = (await import(path.join(__dirname, dir, file))) as Event;

					if (!name) {
						console.warn(`The event ${path.join(__dirname, dir, file)} doesn't have a name!`);
						continue;
					}

					if (!(run && typeof run === 'function')) {
						console.warn(`The event ${name} doesn't have an executable function!`);
						continue;
					}

					emitter.on(name, run.bind(null, this));
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
				} catch (e: any) {
					console.warn(`Error while loading events: ${e.message}`);
				}
			}
		}
	}

	private async start() {
		this.mineflayer.setMaxListeners(20);
		await this.loadEvents('../events', this.mineflayer);
	}
}

export default Bot;
