import { Guild } from 'discord.js';
import Bot from '../client/Client';
import { Execute } from '../interfaces/Event';

export const name = 'guildDelete';

export const run: Execute = async (bot: Bot, guild: Guild) => {
	bot.logger.info(`${bot.user!.tag} was removed from ${guild.name} (${guild.id}).`);
};
