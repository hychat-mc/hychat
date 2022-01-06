import { Execute } from '../interfaces/Event';
import { ChatMessage } from 'prismarine-chat';

export const name = 'message';

export const run: Execute = async (bot, message: ChatMessage) => {
	// Log color chat to console
	bot.logger.log(message.toAnsi());
};
