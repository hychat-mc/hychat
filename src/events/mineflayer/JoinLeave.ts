import { Execute } from '../../interfaces/Event';
import Emojis from '../../util/Emojis';

export const name = 'chat:joinLeave';

export const run: Execute = async (client, playerName: string, status: 'joined' | 'left') => {
	if (status === 'joined') {
		client.onlineCount++;
		await client.hook.send({
			content: `${Emojis.join} ${playerName} joined`,
		});
	}

	if (status === 'left') {
		client.onlineCount--;
		await client.hook.send({
			content: `${Emojis.leave} ${playerName} left`,
		});
	}
};
