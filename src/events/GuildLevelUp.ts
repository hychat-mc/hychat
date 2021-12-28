import { Execute } from '../interfaces/Event';

export const name = 'chat:guildLevelUp';

export const run: Execute = async (client, guildLevel: number) => {
	client.hook.send(`Guild level up! Level ${guildLevel}!`);
};
