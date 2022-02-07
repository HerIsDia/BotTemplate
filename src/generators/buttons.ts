import { MessageActionRow, MessageButton } from 'discord.js';

export const aboutButton = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId('about')
    .setLabel('Example')
    .setStyle('PRIMARY')
);
