import { Client, Intents, WebhookClient } from 'discord.js';
import consola from 'consola';
import fs from 'fs/promises';
import path from 'path';

import { Event } from '../interfaces/Event';
import { EventEmitter } from 'stream';

class Bot extends Client {
	public logger = consola;
	public hook = new WebhookClient({ url: process.env.WEBHOOK_URL as string });

	constructor() {
		super({
			intents: [Intents.FLAGS.GUILD_MESSAGES],
		});

		this.start().catch(this.logger.error);
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
				} catch (e: any) {
					console.warn(`Error while loading events: ${e.message}`);
				}
			}
		}
	}

	private async start() {
		await this.loadEvents('../events', this);
		await this.login(process.env.BOT_TOKEN);
	}
}

export default Bot;
