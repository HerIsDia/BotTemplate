import { MessageActionRow, MessageSelectMenu } from 'discord.js';

export const aboutSelect = new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setCustomId('about')
    .setPlaceholder('Nothing selected')
    .addOptions([
      {
        label: 'Exemple',
        description: 'This is a description',
        value: 'first_option',
      },
    ])
);
