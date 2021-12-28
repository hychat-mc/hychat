import { Guild } from 'discord.js';
import { Execute } from '../../interfaces/Event';

export const name = 'guildDelete';

export const run: Execute = async (client, bot, guild: Guild) => {
	client.logger.info(`${bot.user.tag} was removed from ${guild.name} (${guild.id}).`);
};
