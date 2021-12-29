import { Execute } from '../../interfaces/Event';

export const name = 'guildLevelUp';

export const run: Execute = async (bot, guildLevel: number) => {
	bot.hook.send(`Guild level up! Level ${guildLevel}!`);
};