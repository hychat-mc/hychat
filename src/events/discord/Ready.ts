import { Execute } from '../../interfaces/Event';

export const name = 'ready';

export const run: Execute = async (client, bot) => {
	client.logger.info(`${bot.user.tag} is ready to serve ${bot.guilds.cache.size} guilds.`);
	bot.user.setActivity(`${bot.guilds.cache.size} servers`, { type: 'WATCHING' });
};
