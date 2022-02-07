import {
  ButtonInteraction,
  Client,
  CommandInteraction,
  ContextMenuInteraction,
  Interaction,
  SelectMenuInteraction,
} from 'discord.js';
import { readFile } from 'fs';

module.exports = {
  name: 'interactionCreate',
  run: async (interaction: Interaction) => {
    const client = interaction.client as Client;
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
          const cmd = require(`../commands/${commandType}/${
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
  },
};
