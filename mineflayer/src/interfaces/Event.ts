import Bot from '../classes/Bot';

export interface Event {
	name: string;
	run: Execute;
}

export interface Execute {
	(bot: Bot, ...params: any[]): Promise<unknown>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface MessageTable {
	fromMineflayer: boolean;
	channel: 'Guild' | 'Officer';
	message: string;
}
