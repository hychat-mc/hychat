import { Execute } from '../interfaces/Event';

export const name = 'chat:commentBlocked';

export const run: Execute = async (bot, message) => {
	const messageArray: string[] = message.toString().split(',');
	const comment = messageArray[0] as string;
	const reason = messageArray[1] as string;

	bot.logger.log(`Comment blocked: ${comment}`);
	bot.devHook.send(`New Comment Blocked: ${comment}`);
    bot.officerChatHook.send(
		`A comment, ${comment} was blocked because ${reason}. Developers have been notified of this, however, it is not guaranteed that they will take action on this. Developers will not take responsibility for banned accounts.`,
	);
};
