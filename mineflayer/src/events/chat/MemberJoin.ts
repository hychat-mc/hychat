import { Execute } from '../../interfaces/Event';

export const name = 'chat:memberJoin';

export const run: Execute = async (client, hypixelRank: string | null, playerName: string) => {
	client.hook.send(`${hypixelRank ?? ''} ${playerName} joined the guild!`);
};
