import { Execute } from '../interfaces/Event';
import { ChatMessage } from 'mineflayer';

export const name = 'message';

export const run: Execute = async (client, message: ChatMessage, _position: string) => {
	// Log color chat to console
	console.log(message.toAnsi());
	// console.log(message.toString());
	// console.log(message.toMotd());
};
