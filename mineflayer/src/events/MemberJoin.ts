import { Execute } from '../interfaces/Event';

export const name = 'chat:memberJoin';

export const run: Execute = async (bot, message) => {
	const messageArray: string[] = message.toString().split(',');

	const hypixelRank = messageArray[0] as string | null;
	const playerName = messageArray[1] as string;

	await bot.chatHook.send(`${hypixelRank ?? ''}${playerName} joined the guild!`);
};
