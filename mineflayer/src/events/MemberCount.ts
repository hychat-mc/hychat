import { Execute } from '../interfaces/Event';

export const name = 'chat:memberCount';

export const run: Execute = async (bot, message) => {
	const messageArray: string[] = message.toString().split(',');

	const type = messageArray[0] as 'Online' | 'Total';
	const count = Number(messageArray[1]) as number;

	// Set the online members count
	if (type === 'Online') {
		bot.onlineCount = count;
	}

	// Set the total members count
	if (type === 'Total') {
		bot.totalCount = count;
	}
};
