const {
  SlashCommandBuilder,
  EmbedBuilder,
  ChatInputCommandInteraction,
} = require("discord.js");
const axios = require("axios");

module.exports = {
  subCommand: "animal.kangaroo",

  /**
   *
   * @param { ChatInputCommandInteraction } interaction
   */
  async execute(interaction) {
    let url = `https://some-random-api.ml/img/kangaroo/`;

    let data, response;

    try {
      await interaction.deferReply();
      response = await axios.get(url);
      data = response.data;
      const animals = new EmbedBuilder()
        .setColor("Random")
        .setDescription(`🦘`)
        .setImage(data.link);
      await interaction.editReply({ embeds: [animals] });
    } catch (e) {
      return interaction.editReply({
        content: `An error occured, please try again!`,
        ephemeral: true,
      });
    }
  },
};
