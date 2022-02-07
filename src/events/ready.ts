import { Client } from 'discord.js';
import { registerCommands } from '../commands/registerCommands';
require('dotenv').config();
const token = process.env.TOKEN as string;

module.exports = {
  name: 'ready',
  once: true,
  run: (client: Client) => {
    registerCommands(token, client);
  },
};
