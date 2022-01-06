import { Execute } from '../interfaces/Event';

export const name = 'chat:kicked';

export const run: Execute = async (bot, reason: string, loggedIn: boolean) => {
	bot.logger.warn(
		`The bot was kicked from the server. Restarting the bot in 15 seconds...\nReason: ${reason}\nLogged in: ${loggedIn}`,
	);
	await bot.devHook.send(`:exclamation: **Mineflayer Bot Kicked** \`\`\`${reason}\n\nLogged in: ${loggedIn}\`\`\``);

	setTimeout(() => {
		process.exit(1);
	}, 15_000);
};
