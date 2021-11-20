import { Execute } from '../../interfaces/Event';

export const name = 'chat:memberCount';

export const run: Execute = async (client, type: 'Online' | 'Total', count: number) => {
	// Set the online members count
	if (type === 'Online') {
		client.onlineCount = count;
	}

	// Set the total members count
	if (type === 'Total') {
		client.totalCount = count;
	}
};
