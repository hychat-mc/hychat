import { Execute } from '../../interfaces/Event';

export const name = 'kicked';

export const run: Execute = async (client, reason: string, loggedIn: boolean) => {
	client.logger.warn(
		`The bot was kicked from the server. Restarting the bot in 15 seconds...\nReason: ${reason}\nLogged in: ${loggedIn}`,
	);
	client.devHook.send(`:exclamation: **Mineflayer Bot Kicked** \`\`\`${reason}\n\nLogged in: ${loggedIn}\`\`\``);

	setTimeout(() => {
		process.exit(1);
	}, 15_000);
};
