import { WebhookClient } from 'discord.js';
import { chatPatternOptions, createBot } from 'mineflayer';
import { SupabaseClient } from '@supabase/supabase-js';
import consola from 'consola';
import fs from 'fs/promises';
import path from 'path';

import { Event } from '../interfaces/Event';
import { EventEmitter } from 'stream';
import regex from '../util/Regex';

class Bot {
	public supabase = new SupabaseClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_KEY as string);

	public logger = consola;
	public chatHook = new WebhookClient({ url: process.env.MEMBER_WEBHOOK_URL as string });
	public officerChatHook = new WebhookClient({ url: process.env.OFFICER_WEBHOOK_URL as string });
	// public APIHook = new WebhookClient({ url: process.env.API_WEBHOOK_URL as string });
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
		auth: process.env.MINECRAFT_AUTH_TYPE as 'microsoft' | 'mojang',
		checkTimeoutInterval: 30000,
		defaultChatPatterns: false,
	});

	constructor() {
		try {
			this.start();
		} catch (error) {
			this.logger.error(error);
			this.devHook.send(`:exclamation: **Mineflayer Component Error** \`\`\`${error}\`\`\``);
		}
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

		const options: chatPatternOptions = { repeat: true, parse: true };

		this.mineflayer.addChatPattern('guildChat', regex.guildChat, options);
		this.mineflayer.addChatPattern('joinLeave', regex.joinLeave, options);
		this.mineflayer.addChatPattern('memberCount', regex.memberCount, options);
		this.mineflayer.addChatPattern('memberJoin', regex.memberJoin, options);
		this.mineflayer.addChatPattern('memberLeave', regex.memberLeave, options);
		this.mineflayer.addChatPattern('memberKicked', regex.memberKicked, options);
		this.mineflayer.addChatPattern('promotedDemoted', regex.promotedDemoted, options);
		this.mineflayer.addChatPattern('guildLevelUp', regex.guildLevelUp, options);
		this.mineflayer.addChatPattern('questTierComplete', regex.questTierComplete, options);
		this.mineflayer.addChatPattern('questComplete', regex.questComplete, options);
		this.mineflayer.addChatPattern('lobbyJoin', regex.lobbyJoin, options);
		this.mineflayer.addChatPattern('commentBlocked', regex.commentBlocked, options);
		this.mineflayer.addChatPattern('sameMessageTwice', regex.sameMessageTwice, options);
	}

	private async setRealtime() {
		// Set up table listener (users table)
		const subscription = this.supabase
			.from('TABLENAME')
			.on('INSERT', (payload) => {
				console.log('NEW INSERTION', payload);
			})
			.subscribe();

		// await this.supabase.removeSubscription(subscription);
	}

	private async start() {
		this.mineflayer.setMaxListeners(20);
		await this.loadEvents('../events', this.mineflayer);
		await this.setRealtime();
	}
}

export default Bot;
