// Load environment variables from the .env file
import { config } from 'dotenv';
config();

import Bot from './client/Client.js';
const bot = new Bot();

export default bot;
