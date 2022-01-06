import { Execute } from '../interfaces/Event';

export const name = 'chat:sameMessageTwice';

export const run: Execute = async (bot) => {
	bot.chatHook.send('`You cannot say the same message twice!`');
};
