import { Execute } from '../../interfaces/Event';

export const name = 'chat:memberKicked';

export const run: Execute = async (
	client,
	hypixelRank: string | null,
	playerName: string,
	kickedByHypixelRank: string | null,
	kickedByPlayerName: string,
) => {};
