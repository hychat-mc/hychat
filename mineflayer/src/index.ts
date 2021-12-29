// Load environment variables from the .env file
import { config } from 'dotenv';
config();

// Initialize the bot class
import Bot from './classes/Bot';
// Normally the webhook would be passed by discord bot
const bot = new Bot(process.env.WEBHOOK_URL as string, process.env.OFFICER_WEBHOOK_URL as string);

// Export the bot to use elsewhere
export default bot;
