import { Client, ButtonInteraction } from 'discord.js';
import { aboutEmbed } from '../../generators/embeds';

export const run = async (client: Client, interaction: ButtonInteraction) => {
  interaction.reply({ embeds: [aboutEmbed()], ephemeral: true });
};
