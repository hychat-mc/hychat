import { Message } from "discord.js";

export default interface GuildChat extends Array<Message> {
    channel: 'Guild' | 'Officer',
	hypixelRank: string | null,
	playerName: string,
	guildRank: string | null,
	message: string,
}
