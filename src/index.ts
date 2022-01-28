// Import NPM Packages
import {
  Client,
  CommandInteraction,
  ContextMenuInteraction,
  Intents,
  Interaction,
} from 'discord.js';
import { readFile } from 'fs';
require('dotenv').config();

// Import Local Functions
import { registerCommands } from './commands/registerCommands';

// Create Client and Set Intents
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env.TOKEN as string;

client.on('ready', () => {
  registerCommands(token, client);
});

client.on('guildCreate', async (guild) => {
  registerCommands(token, client);
});

client.on('interactionCreate', async (interaction) => {
  if (
    !interaction.isCommand() &&
    !interaction.isContextMenu() &&
    !interaction.isButton() &&
    !interaction.isSelectMenu()
  )
    return;
  const commandType = interaction.isCommand()
    ? 'slashcommands'
    : interaction.isContextMenu()
    ? 'contextmenu'
    : interaction.isButton()
    ? 'button'
    : 'selectmenu';
  readFile(
    `./src/commands/${commandType}/${
      interaction.isButton() || interaction.isSelectMenu()
        ? interaction.customId
        : interaction.commandName
    }.ts`,
    'utf8',
    (err) => {
      if (err) {
        interaction.reply({
          content: `❌ ! ${err}`,
          ephemeral: true,
        });
        return;
      }
      try {
        const cmd = require(`./commands/${commandType}/${
          interaction.isButton() || interaction.isSelectMenu()
            ? interaction.customId
            : interaction.commandName
        }.ts`) as {
          run: (
            client: Client,
            interaction:
              | CommandInteraction
              | ContextMenuInteraction
              | ButtonInteraction
              | SelectMenuInteraction
          ) => void;
        };
        cmd.run(client, interaction);
      } catch (error) {
        interaction.reply({
          content: `❌ ! ${error}`,
          ephemeral: true,
        });
      }
    }
  );
});

client.login(token);
