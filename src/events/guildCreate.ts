import { Client } from 'discord.js';
import { registerCommands } from '../commands/registerCommands';
require('dotenv').config();
const token = process.env.TOKEN as string;

module.exports = {
  name: 'guildCreate',
  run: (client: Client) => {
    registerCommands(token, client);
  },
};
