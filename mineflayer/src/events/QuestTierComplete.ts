import { Execute } from '../interfaces/Event';
import { MessageEmbed } from 'discord.js';

export const name = 'chat:questTierComplete';

export const run: Execute = async (bot, completedTier: number) => {
	const embed = new MessageEmbed()
		.setTitle('Quest Tier Complete')
		.setDescription(`The guild has completed Tier ${completedTier} of this week's Guild Quest!`)
		.setColor('BLUE')
		.setTimestamp();

	return await bot.chatHook.send({
		embeds: [embed],
	});
};
