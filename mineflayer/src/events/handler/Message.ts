import { Execute } from '../../interfaces/Event';
import { ChatMessage } from 'prismarine-chat';

export const name = 'message';

export const run: Execute = async (bot, message: ChatMessage, _position: string) => {
	// Log color chat to console
	console.log(message.toAnsi());
	// console.log(message.toString());
	// console.log(message.toMotd());
};
