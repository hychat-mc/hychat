import { Execute } from '../interfaces/Event';

export const name = 'chat:memberKicked';

export const run: Execute = async (bot, message) => {
	const messageArray: string[] = message.toString().split(',');

	const hypixelRank = messageArray[0] as string | null;
	const playerName = messageArray[1] as string;
	const kickedByHypixelRank = messageArray[2] as string | null;
	const kickedByPlayerName = messageArray[3] as string;

	await bot.chatHook.send(
		`${hypixelRank ?? ''}${playerName} was kicked by ${kickedByHypixelRank + ' ' ?? ''}${kickedByPlayerName}`,
	);
};
