import { Guild } from 'discord.js';
import Bot from '../client/Client';
import { Execute } from '../interfaces/Event';

export const name = 'guildCreate';

export const run: Execute = async (bot: Bot, guild: Guild) => {
	bot.logger.info(`${bot.user!.tag} was added to ${guild.name} (${guild.id}).`);
};
