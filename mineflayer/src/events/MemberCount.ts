import { Execute } from '../interfaces/Event';

export const name = 'chat:memberCount';

export const run: Execute = async (bot, type: 'Online' | 'Total', count: number) => {
	// Set the online members count
	if (type === 'Online') {
		bot.onlineCount = count;
	}

	// Set the total members count
	if (type === 'Total') {
		bot.totalCount = count;
	}
};
