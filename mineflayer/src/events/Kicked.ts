import { Execute } from '../interfaces/Event';
import error from '../util/Emojis';

export const name = 'chat:kicked';

export const run: Execute = async (bot, reason: string, loggedIn: boolean) => {
	// Proxy Reboot
	if (reason.includes('This proxy is being rebooted.')) {
		await bot.chatHook.send(
			`${error} The bot was kicked from the server due to a proxy reboot. Restarting the bot in 15 seconds...`,
		);
		// Duplicate Login
	} else if (reason.includes('You logged in from another location!')) {
		await bot.chatHook.send(
			`${error} The bot was kicked from the server due to a duplicate login. Restarting the bot in 15 seconds...`,
		);
		// Authentication Error
	} else if (reason.includes('Failed to authenticate your connection!')) {
		await bot.chatHook.send(
			`${error} The bot was kicked from the server because of an authentication error. Restarting the bot in 15 seconds...`,
		);

		// Rare Errors

		// Invalid Packets
	} else if (reason.includes('Why do you send us invalid packets?')) {
		await bot.chatHook.send(
			`${error} The bot was kicked from the server because it was sending invalid packets. The developers have been alerted of this problem. Restarting the bot in 15 seconds...`,
		);
		await bot.devHook.send(
			`:exclamation: **A Mineflayer bot was sending invalid packets!** \`\`\`${reason}\n\nLogged in: ${loggedIn}\`\`\``,
		);
		// Maintenance
	} else if (
		reason.includes(
			'This server is currently in maintenance mode' || reason.includes('is currently down for maintenance'),
		)
	) {
		await bot.chatHook.send(
			`${error} Hypixel is currently in maintenance mode. The bot will restart in 15 seconds. To stop duplicate error messages, turn this feature off via the dashboard or shut the bot down.`,
		);
		// Other Errors
	} else {
		await bot.chatHook.send(`${error} The bot was kicked from the server. Restarting the bot in 15 seconds...`);
	}

	bot.logger.warn(
		`The bot was kicked from the server. Restarting the bot in 15 seconds...\nReason: ${reason}\nLogged in: ${loggedIn}`,
	);
	// Temporary
	await bot.devHook.send(`:exclamation: **Mineflayer Bot Kicked** \`\`\`${reason}\n\nLogged in: ${loggedIn}\`\`\``);

	setTimeout(() => {
		process.exit(1);
	}, 15_000);
};
