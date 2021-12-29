import { Execute } from '../../interfaces/Event';
import regex from '../../util/Regex';

export const name = 'spawn';

export const run: Execute = async (bot) => {
	bot.mineflayer.addChatPattern('guildChat', regex.guildChat);
	bot.mineflayer.addChatPattern('joinLeave', regex.joinLeave);
	bot.mineflayer.addChatPattern('memberCount', regex.memberCount);
	bot.mineflayer.addChatPattern('memberJoin', regex.memberJoin);
	bot.mineflayer.addChatPattern('memberLeave', regex.memberLeave);
	bot.mineflayer.addChatPattern('memberKicked', regex.memberKicked);
	bot.mineflayer.addChatPattern('promotedDemoted', regex.promotedDemoted);
	bot.mineflayer.addChatPattern('guildLevelUp', regex.guildLevelUp);
	bot.mineflayer.addChatPattern('questTierComplete', regex.questTierComplete);
	bot.mineflayer.addChatPattern('questComplete', regex.questComplete);
	bot.mineflayer.addChatPattern('lobbyJoin', regex.lobbyJoin);
};
