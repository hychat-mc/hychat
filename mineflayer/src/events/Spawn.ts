import { chatPatternOptions } from 'mineflayer';
import { Execute } from '../interfaces/Event';
import regex from '../util/Regex';

export const name = 'spawn';

export const run: Execute = async (bot) => {

	const options: chatPatternOptions = { repeat: true, parse: true}

	bot.mineflayer.addChatPattern('guildChat', regex.guildChat, options);
	bot.mineflayer.addChatPattern('joinLeave', regex.joinLeave, options);
	bot.mineflayer.addChatPattern('memberCount', regex.memberCount, options);
	bot.mineflayer.addChatPattern('memberJoin', regex.memberJoin, options);
	bot.mineflayer.addChatPattern('memberLeave', regex.memberLeave, options);
	bot.mineflayer.addChatPattern('memberKicked', regex.memberKicked, options);
	bot.mineflayer.addChatPattern('promotedDemoted', regex.promotedDemoted, options);
	bot.mineflayer.addChatPattern('guildLevelUp', regex.guildLevelUp, options);
	bot.mineflayer.addChatPattern('questTierComplete', regex.questTierComplete, options);
	bot.mineflayer.addChatPattern('questComplete', regex.questComplete, options);
	bot.mineflayer.addChatPattern('lobbyJoin', regex.lobbyJoin, options);
	bot.executeCommand('/ac \u00a7');
};
