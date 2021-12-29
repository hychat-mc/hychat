import { Execute } from '../../interfaces/Event';
import { Util } from 'discord.js';

export const name = 'chat:guildChat';

export const run: Execute = async (
	client,
	channel: 'Guild' | 'Officer',
	hypixelRank: string | null,
	playerName: string,
	guildRank: string | null,
	message: string,
) => {
	if (playerName === client.mineflayer.username) return;
	client.hook.send(`${channel} **${hypixelRank ?? ''} ${playerName}${guildRank ?? ''}**: ${Util.escapeMarkdown(message)}`);
};
