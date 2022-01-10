/*
hypixel-guild-chat-ts

Original Copyright 2022 Matt G<46137770+xMdb@users.noreply.github.com> and contributors.

The following code is a derivative work of the code from the hypixel-guild-chat-bot project,
which is licensed GPLv3. This code therefore is also licensed under the terms
of the GNU Public License, version 3.

Copyright 2022 EvernoteMC <evernoteminecraft@gmail.com> and contributors.
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
	guildChat: /^(Guild|Officer) > (\[.*]\s*)?(\w{2,17}).*?(\[.{1,15}])?: (.*)$/,

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
	 *  - Promoted / demoted
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

	/**
	 * When a message is blocked for containing suspicious content
	 *
	 * Returns:
	 *  - Comment blocked
	 *  - Reason
	 */
	commentBlocked: /^We blocked your comment "(.+)" as it is breaking our rules because (.+)$/,
	/**
	 * When a message is sent repeatedly
	 */
	sameMessageTwice: /^You cannot say the same message twice!$/,
};
