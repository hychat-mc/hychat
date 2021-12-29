import Bot from '../classes/Bot';
import Client from '../../../discord/src/client/Client';

export interface Command {
	name: string;
	aliases?: string[];
	description?: string;
	cooldown?: boolean;
	devOnly?: boolean;
	usage?: string;
	run: Execute;
}

export interface Execute {
	(bot: Bot, client: Client, author: string, message: string, args: string[]): Promise<unknown>;
}
