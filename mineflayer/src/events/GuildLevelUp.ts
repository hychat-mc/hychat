import { Execute } from '../interfaces/Event';

export const name = 'chat:guildLevelUp';

export const run: Execute = async (bot, guildLevel: number) => {
	bot.chatHook.send(`Guild level up! Level ${guildLevel}!`);
};
