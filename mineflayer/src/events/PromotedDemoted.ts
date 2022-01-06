import { Execute } from '../interfaces/Event';

export const name = 'chat:promotedDemoted';

export const run: Execute = async (bot, message) => {
	const messageArray: string[] = message.toString().split(',');

	const hypixelRank = messageArray[0] as string | null;
	const playerName = messageArray[1] as string;
	const changeType = messageArray[2] as 'promoted' | 'demoted';
	const guildRankFrom = messageArray[3] as string;
	const guildRankTo = messageArray[4] as string;

	await bot.chatHook.send(`${hypixelRank ?? ''}${playerName} was ${changeType} to ${guildRankTo} from ${guildRankFrom}!`);
};
