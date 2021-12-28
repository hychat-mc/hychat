import { Client, Intents, WebhookClient } from 'discord.js';
import { createBot } from 'mineflayer';
import consola from 'consola';
import fs from 'fs/promises';
import path from 'path';
import { RateLimiter } from 'limiter';

import { Event } from '../interfaces/Event';
import { EventEmitter } from 'stream';

class Bot extends Client {
	public onlineCount = 0;
	public totalCount = 125;

	public logger = consola;
	public hook = new WebhookClient({ url: process.env.WEBHOOK_URL as string });
	public mineflayer = createBot({
		username: process.env.MINECRAFT_EMAIL as string,
		password: process.env.MINECRAFT_PASSWORD,
		host: 'mc.hypixel.net',
		version: '1.16.4',
		logErrors: true,
		hideErrors: false,
		auth: process.env.MINECRAFT_AUTH === 'microsoft' ? 'microsoft' : 'mojang',
		checkTimeoutInterval: 30000,
	});
	private limiter = new RateLimiter({ tokensPerInterval: 1, interval: 500 });

	constructor() {
		super({
			intents: [Intents.FLAGS.GUILD_MESSAGES],
		});

		this.start().catch(this.logger.error);
	}

	public async sendMessage(message: string): Promise<void> {
		await this.executeCommand(`/gc ${message}`);
	}

	public async executeCommand(message: string): Promise<void> {
		await this.limiter.removeTokens(1);
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
				} catch (e) {
					console.warn(`Error while loading events: ${e.message}`);
				}
			}
		}
	}

	private async start() {
		this.mineflayer.setMaxListeners(20);
		await this.loadEvents('../events/discord', this);
		await this.loadEvents('../events/mineflayer', this.mineflayer);
		await this.login(process.env.BOT_TOKEN);
	}
}

export default Bot;
