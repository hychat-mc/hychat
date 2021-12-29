import { Execute } from '../interfaces/Event';

export const name = 'chat:lobbyJoin';

export const run: Execute = async (bot) => {
	bot.logger.warn('Detected that the bot is not in Limbo, sending illegal character.');

	return bot.executeCommand('/ac \u00a7');
};
