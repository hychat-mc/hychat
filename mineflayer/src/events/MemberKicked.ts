import { Execute } from '../interfaces/Event';

export const name = 'memberKicked';

export const run: Execute = async (
	bot,
	hypixelRank: string | null,
	playerName: string,
	kickedByHypixelRank: string | null,
	kickedByPlayerName: string,
) => {
	bot.hook.send(`${hypixelRank ?? ''} ${playerName} was kicked by ${kickedByHypixelRank ?? ''} ${kickedByPlayerName}`);
};
