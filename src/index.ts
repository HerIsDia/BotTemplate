// Import NPM Packages
import {
  ButtonInteraction,
  Client,
  ClientEvents,
  CommandInteraction,
  ContextMenuInteraction,
  Intents,
  SelectMenuInteraction,
} from 'discord.js';
import { readFile, readdirSync } from 'fs';
require('dotenv').config();

// Import Local Functions
import { registerCommands } from './commands/registerCommands';

// Create Client and Set Intents
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env.TOKEN as string;

// Create interface for events handlers
interface EventHandler {
  name: string;
  once?: boolean;
  run: (...args: any[]) => void | Promise<void>;
}

const eventFiles = readdirSync('./src/events').filter((file) =>
  file.endsWith('.ts')
);

for (const file in eventFiles) {
  const event = require(`./events/${eventFiles[file]}`) as EventHandler;
  const { name, once, run } = event;
  if (once) {
    client.once(name, run);
  } else {
    client.on(name, run);
  }
}

client.login(token);
