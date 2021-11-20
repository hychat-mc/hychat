import { Execute } from '../../interfaces/Event';

export const name = 'chat:guildChat';

export const run: Execute = async (
	client,
	channel: 'Guild' | 'Officer',
	hypixelRank: string | null,
	playerName: string,
	guildRank: string | null,
	message: string,
) => {
	console.log({
		channel,
		hypixelRank,
		playerName,
		guildRank,
		message,
	});
};
