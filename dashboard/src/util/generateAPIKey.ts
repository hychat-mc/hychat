import { randomBytes, createHash } from 'crypto';
export default function generateAPIKey() {
	const apiKey = randomBytes(32).toString('hex');
	const hashedAPIKey = hashAPIkey(apiKey);
	return { hashedAPIKey, apiKey };
	// if (apiKeys[hashedAPIKey]) {
	// 	generateAPIKey();
	// } else {
	// 	return { hashedAPIKey, apiKey };
	// }
}

function hashAPIkey(apiKey: string) {
	const hashedKey = createHash('md5').update(apiKey).digest('hex');
	return hashedKey;
}
