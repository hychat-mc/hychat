import { Execute } from '../interfaces/Event';

export const name = 'chat:memberJoin';

export const run: Execute = async (bot, hypixelRank: string | null, playerName: string) => {
	bot.chatHook.send(`${hypixelRank ?? ''} ${playerName} joined the guild!`);
};
