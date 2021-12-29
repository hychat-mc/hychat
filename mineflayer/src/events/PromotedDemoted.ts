import { Execute } from '../interfaces/Event';

export const name = 'chat:promotedDemoted';

export const run: Execute = async (
	bot,
	hypixelRank: string | null,
	playerName: string,
	changeType: 'promoted' | 'demoted',
	guildRankFrom: string,
	guildRankTo: string,
) => {
	console.log(hypixelRank, playerName, changeType, guildRankFrom, guildRankTo);
};
