import {
  SlashCommandBuilder,
  ContextMenuCommandBuilder,
} from '@discordjs/builders';

// command "/about" but in context menu
const aboutContext = new ContextMenuCommandBuilder()
  .setName('about')
  .setType(2);

// command "/about"
const about = new SlashCommandBuilder()
  .setName('about')
  .setDescription('ℹ️ About the bot');

export const commands = [aboutContext, about];
