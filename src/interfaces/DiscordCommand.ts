import { CommandInteraction, Message } from 'discord.js';
import Bot from '../client/Client';

export interface Command {
	name: string;
	aliases?: string[];
	description?: string;
	cooldown?: boolean;
	devOnly?: boolean;
	usage?: string;
	runCommand: ExecuteCommand;
	runSlashCommand: ExecuteSlashCommand;
}

export interface ExecuteCommand {
	(client: Bot, message: Message, args: string[]): Promise<unknown>;
}

export interface ExecuteSlashCommand {
	(client: Bot, interaction: CommandInteraction): Promise<unknown>;
}
