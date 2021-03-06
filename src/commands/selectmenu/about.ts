import { Client, SelectMenuInteraction } from 'discord.js';
import { aboutEmbed } from '../../generators/embeds';

export const run = async (
  client: Client,
  interaction: SelectMenuInteraction
) => {
  interaction.reply({ embeds: [aboutEmbed()], ephemeral: true });
};
