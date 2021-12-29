import { Execute } from '../interfaces/Event';
import { MessageEmbed } from 'discord.js';

export const name = 'chat:questComplete';

export const run: Execute = async (bot) => {
	const embed = new MessageEmbed()
		.setTitle('Quest Complete')
		.setDescription("The guild has completed this week's Guild Quest!") // eslint-disable-line quotes
		.setColor('GREEN')
		.setTimestamp();

	return bot.hook.send({
		embeds: [embed],
	});
};
