import {
  Telegraf,
} from 'telegraf';
import * as dotenv from 'dotenv';

dotenv.config();
if (!process.env.BOT_TOKEN) {
  console.error('token not configured');
}
const bot = new Telegraf(process.env.BOT_TOKEN as string);
bot.launch();
process.once('SIGINT', () => {
  bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
  bot.stop('SIGTERM');
});
