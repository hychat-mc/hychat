import { Execute } from '../../interfaces/Event';

export const name = 'error';

export const run: Execute = async (bot, error: Error) => {
	bot.logger.error('Encountered an unexpected error. Restarting the bot in 15 seconds...');
	bot.logger.error(error);
	bot.devHook.send(`:exclamation: **Mineflayer Bot Error** \`\`\`${error}\`\`\``);

	setTimeout(() => {
		process.exit(1);
	}, 15_000);
};