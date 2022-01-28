import { MessageActionRow, MessageButton } from 'discord.js';

export const aboutButton = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setCustomId('primary')
        .setLabel('Example')
        .setStyle('PRIMARY'),
);