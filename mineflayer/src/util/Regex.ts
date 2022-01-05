/*
hypixel-guild-chat-ts

Original Copyright Matthew G <46137770+xMdb@users.noreply.github.com> and contributors.

The following code is a derivative work of the code from the hypixel-guild-chat-bot project,
which is licensed GPLv3. This code therefore is also licensed under the terms
of the GNU Public License, version 3.

Copyright 2021 EvernoteMC <evernoteminecraft@gmail.com>
Edited by contributors: Matthew G <46137770+xMdb@users.noreply.github.com>
*/

export default {
	/**
	 * When a message is sent in the guild chat
	 *
	 * Returns:
	 *  - Channel (Guild / Officer)
	 *  - Hypixel Rank
	 *  - Player Name
	 *  - Guild Rank
	 *  - Message
	 */
	guildChat: /^(Guild|Officer) > (\[.+?\])? ?([A-Za-z0-9_]{3,16}) (\[.+\]): (.+)/,

	/**
	 * When a member connects to or disconnects from Hypixel
	 *
	 * Returns:
	 *  - Player Name
	 *  - joined / left
	 */
	joinLeave: /^Guild > (\w{2,17}).*? (joined|left)\.$/,

	/**
	 * When "/g online" is typed, and the online and total member count is shown
	 *
	 * Returns:
	 *  - Online / Total
	 *  - Member Count
	 */
	memberCount: /^(Online|Total) Members: (\d+)$/,

	/**
	 * When a player joins the guild
	 *
	 * Returns:
	 *  - Hypixel Rank
	 *  - Player Name
	 */
	memberJoin: /^(\[.*]\s*)?(\w{2,17}).*? joined the guild!$/,

	/**
	 * When a player leaves the guild
	 *
	 * Returns:
	 *  - Hypixel Rank
	 *  - Player Name
	 */
	memberLeave: /^(\[.*]\s*)?(\w{2,17}).*? left the guild!$/,

	/**
	 * When a player is kicked from the guild
	 *
	 * Returns:
	 *  - Hypixel Rank
	 *  - Player Name
	 *  - Kicker Hypixel Rank
	 *  - Kicker Player Name
	 */
	memberKicked: /^(\[.*]\s*)?(\w{2,17}).*? was kicked from the guild by (\[.*]\s*)?(\w{2,17}).*?!$/,

	/**
	 * When a member is promoted or demoted
	 *
	 * Returns:
	 *  - Hypixel Rank
	 *  - Player Name
	 *  - promoted / demoted
	 *  - From Rank
	 *  - To Rank
	 */
	promotedDemoted: /^(\[.*]\s*)?(\w{2,17}).*? was (promoted|demoted) from (.*) to (.*)$/,

	/**
	 * When the guild levels up
	 *
	 * Returns:
	 *  - New Guild Level
	 */
	guildLevelUp: /^\s{19}The Guild has reached Level (\d*)!$/,

	/**
	 * When a guild quest tier is complete
	 *
	 * Returns:
	 *  - Tier Completed
	 */
	questTierComplete: /^\s{17}GUILD QUEST TIER (\d*) COMPLETED!$/,

	/**
	 * When all guild quest tiers are complete
	 */
	questComplete: /^\s{17}GUILD QUEST COMPLETED!$/,

	/**
	 * When the bot detects its not in limbo
	 */
	lobbyJoin:
		/^(?:\s>>>\s)?\[.*]\s[\w]{2,17} (?:joined the lobby!|spooked into the lobby!|slid into the lobby!)(?:\s<<<)?$/,
};
