import { Execute } from '../interfaces/Event';
import { Util } from 'discord.js';
import { ChatMessage } from 'prismarine-chat';

export const name = 'chat:guildChat';

export const run: Execute = async (
	bot, message: ChatMessage
) => {
	// ${Util.escapeMarkdown(message)} 
	const splitMessageArray = message.toString().split(',');
	console.log(splitMessageArray)
	if (splitMessageArray[2] === bot.mineflayer.username) return;
	const formattedMessage = `channel: ${splitMessageArray[0]} rank: **${splitMessageArray[1] ?? ''} name: ${splitMessageArray[2]}${splitMessageArray[3] ?? ''}**: message: ${splitMessageArray[4]}`;
	splitMessageArray[0] === 'Guild' ? bot.chatHook.send(formattedMessage) : bot.officerChatHook.send(formattedMessage);
};
