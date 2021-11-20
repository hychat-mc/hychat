import Client from '../client/Client';

export interface Event {
	name: string;
	run: Execute;
}

export interface Execute {
	// eslint-disable-line @typescript-eslint/no-explicit-any
	(client: Client, ...params: any[]): Promise<unknown>;
}
