import { Util } from 'discord.js';

import { Execute } from '../interfaces/Event';
import { ChatMessage } from 'prismarine-chat';
import Emojis from '../util/Emojis';

export const name = 'chat:guildChat';

export const run: Execute = async (bot, message: ChatMessage) => {
	const messageArray: string[] = message.toString().split(',');

	const channel = messageArray[0] as 'Guild' | 'Officer';
	const hypixelRank = messageArray[1] as string | null;
	const playerName = messageArray[2] as string;
	const guildRank = messageArray[3] as string | null;
	const chatMessage = messageArray[4] as string;

	if (playerName === bot.mineflayer.username) return;

	const formattedMessage = ` ${hypixelRank ?? ''}${Util.escapeMarkdown(playerName)}${
		' ' + guildRank ?? ''
	}: ${Util.escapeMarkdown(chatMessage)}`;
	channel === 'Guild'
		? await bot.chatHook.send(Emojis.member + formattedMessage)
		: await bot.officerChatHook.send(Emojis.officer + formattedMessage);
};
