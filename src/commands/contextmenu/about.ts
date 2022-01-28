import { Client, ContextMenuInteraction } from 'discord.js';
import { aboutEmbed } from '../../generators/embeds';
import { aboutButton } from '../../generators/buttons';

export const run = async (
  client: Client,
  interaction: ContextMenuInteraction
) => {
  interaction.reply({
    embeds: [aboutEmbed()],
    components: [aboutButton],
    ephemeral: true,
  });
};
