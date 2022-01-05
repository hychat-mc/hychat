import { Execute } from '../interfaces/Event';

export const name = 'spawn';

export const run: Execute = async (bot) => {
	bot.executeCommand('/ac \u00a7');
};
