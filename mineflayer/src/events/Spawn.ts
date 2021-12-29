import { Execute } from '../interfaces/Event';
import regex from '../util/Regex';

export const name = 'spawn';

export const run: Execute = async (client) => {
	client.mineflayer.addChatPattern('guildChat', regex.guildChat);
	client.mineflayer.addChatPattern('joinLeave', regex.joinLeave);
	client.mineflayer.addChatPattern('memberCount', regex.memberCount);
	client.mineflayer.addChatPattern('memberJoin', regex.memberJoin);
	client.mineflayer.addChatPattern('memberLeave', regex.memberLeave);
	client.mineflayer.addChatPattern('memberKicked', regex.memberKicked);
	client.mineflayer.addChatPattern('promotedDemoted', regex.promotedDemoted);
	client.mineflayer.addChatPattern('guildLevelUp', regex.guildLevelUp);
	client.mineflayer.addChatPattern('questTierComplete', regex.questTierComplete);
	client.mineflayer.addChatPattern('questComplete', regex.questComplete);
	client.mineflayer.addChatPattern('lobbyJoin', regex.lobbyJoin);
};
