import { Execute } from '../../interfaces/Event';

export const name = 'chat:lobbyJoin';

export const run: Execute = async (client) => {
	client.logger.info('Detected that the bot is not in limbo, sending illegal character.');

	return client.executeCommand('/ac \u00a7');
};
