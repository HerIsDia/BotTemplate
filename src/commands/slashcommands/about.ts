import { Client, CommandInteraction } from 'discord.js';
import { aboutEmbed } from '../../generators/embeds';
import { aboutSelect } from '../../generators/selectMenu';

export const run = async (client: Client, interaction: CommandInteraction) => {
  interaction.reply({
    embeds: [aboutEmbed()],
    components: [aboutButton],
    ephemeral: true,
  });
};
