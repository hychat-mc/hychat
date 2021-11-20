import { CommandInteraction, Message } from 'discord.js';
import Client from '../client/Client';
import { Bot } from 'mineflayer';

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
	(client: Client, bot: Bot, message: Message, args: string[]): Promise<unknown>;
}

export interface ExecuteSlashCommand {
	(client: Client, bot: Bot, interaction: CommandInteraction): Promise<unknown>;
}
