import { Execute } from '../../interfaces/Event';
import { Interaction } from 'discord.js';

export const name = 'interactionCreate';

export const run: Execute = async (client, bot, interaction: Interaction) => {
	if (!interaction.isCommand()) return;

	

};