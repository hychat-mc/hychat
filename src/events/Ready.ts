import Bot from '../client/Client';
import { Execute } from '../interfaces/Event';

export const name = 'ready';

export const run: Execute = async (bot: Bot) => {
	bot.logger.info(`${bot.user!.tag} is ready to serve ${bot.guilds.cache.size} guilds.`);
	bot.user!.setActivity(`${bot.guilds.cache.size} servers | hypixelguildbots.xyz`, { type: 'WATCHING' });
};
