import { Execute } from '../interfaces/Event';

export const name = 'memberJoin';

export const run: Execute = async (bot, hypixelRank: string | null, playerName: string) => {
	bot.hook.send(`${hypixelRank ?? ''} ${playerName} joined the guild!`);
};
