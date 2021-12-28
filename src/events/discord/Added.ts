import { Guild } from 'discord.js';
import { Execute } from '../../interfaces/Event';

export const name = 'guildCreate';

export const run: Execute = async (client, bot, guild: Guild) => {
	client.logger.info(`${bot.user.tag} was added to ${guild.name} (${guild.id}).`);
};
