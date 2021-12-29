import Bot from "../client/Client";

export interface Event {
	name: string;
	run: Execute;
}

export interface Execute {
	(client: Bot, ...params: any[]): Promise<unknown>; // eslint-disable-line @typescript-eslint/no-explicit-any
}
