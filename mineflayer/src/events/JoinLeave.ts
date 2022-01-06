import { Execute } from '../interfaces/Event';
import Emojis from '../util/Emojis';

export const name = 'chat:joinLeave';

export const run: Execute = async (bot, message) => {
	const messageArray: string[] = message.toString().split(',');

	const playerName = messageArray[0] as string;
	const status = messageArray[1] as 'joined' | 'left';

	if (status === 'joined') {
		bot.onlineCount++;
		await bot.chatHook.send({
			content: `${Emojis.join} ${playerName} joined. (\`${bot.onlineCount}\`/\`${bot.totalCount}\`)`,
		});
	}

	if (status === 'left') {
		bot.onlineCount--;
		await bot.chatHook.send({
			content: `${Emojis.leave} ${playerName} left. (\`${bot.onlineCount}\`/\`${bot.totalCount}\`)`,
		});
	}
};
