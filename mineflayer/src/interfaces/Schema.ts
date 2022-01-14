export interface MessageSchema {
	created_at?: string;
	channel: 'Guild' | 'Officer';
	text: string;
}
