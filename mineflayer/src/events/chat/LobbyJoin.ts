import { Execute } from '../../interfaces/Event';

export const name = 'chat:lobbyJoin';

export const run: Execute = async (client) => {
	client.logger.warn('Detected that the bot is not in Limbo, sending illegal character.');

	return client.executeCommand('/ac \u00a7');
};
