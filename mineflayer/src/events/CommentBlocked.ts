import { Execute } from '../interfaces/Event';

export const name = 'chat:commentBlocked';

export const run: Execute = async (bot, message) => {
	const messageArray: string[] = message.toString().split(',');

	const comment = messageArray[0] as string;
	const reason = messageArray[1] as string;

	bot.logger.warn(`Comment blocked: ${comment} (${reason})`);
	bot.devHook.send(`New Comment Blocked: **${comment}**\nReason: **${reason}**`);
	bot.officerChatHook.send(
		`The "${comment}" was blocked by Hypixel because "${reason}". Developers will not take responsibility for banned accounts.`,
	);
};
