import { Execute } from '../../interfaces/Event';

export const name = 'end';

export const run: Execute = async (bot) => {
	bot.logger.error('The bot session has abruptly ended. Restarting the bot in 15 seconds...');

	setTimeout(() => {
		process.exit(1);
	}, 15_000);
};
