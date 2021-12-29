import { Execute } from '../interfaces/Event';
import Emojis from '../util/Emojis';

export const name = 'chat:joinLeave';

export const run: Execute = async (bot, playerName: string, status: 'joined' | 'left') => {
	if (status === 'joined') {
		bot.onlineCount++;
		await bot.hook.send({
			content: `${Emojis.join} ${playerName} joined`,
		});
	}

	if (status === 'left') {
		bot.onlineCount--;
		await bot.hook.send({
			content: `${Emojis.leave} ${playerName} left`,
		});
	}
};
