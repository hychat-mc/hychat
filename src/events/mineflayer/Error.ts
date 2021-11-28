import { Execute } from '../../interfaces/Event';

export const name = 'error';

export const run: Execute = async (client, error: Error) => {
	client.logger.error('Encountered an unexpected error. Restarting the bot in 15 seconds...');
	client.logger.error(error);

	setTimeout(() => {
		process.exit(1);
	}, 15_000);
};
