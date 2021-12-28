import { Execute } from '../../interfaces/Event';

export const name = 'chat:guildLevelUp';

export const run: Execute = async (client, guildLevel: number) => {
	console.log(`Guild level up: ${guildLevel}`);
};
