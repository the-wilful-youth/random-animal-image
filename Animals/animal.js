const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("animal")
    .setDescription("Send random pictures of animals")
    .addSubcommand((options) =>
      options.setName("bird").setDescription("Get a random 🐦 bird image")
    )
    .addSubcommand((options) =>
      options.setName("cat").setDescription("Get a random 🐱 cat image")
    )
    .addSubcommand((options) =>
      options.setName("dog").setDescription("Get a random 🐶 dog image")
    )
    .addSubcommand((options) =>
      options.setName("fox").setDescription("Get a random 🐱 fox image")
    )
    .addSubcommand((options) =>
      options
        .setName("kangaroo")
        .setDescription("Get a random 🦘 kangaroo image")
    )
    .addSubcommand((options) =>
      options.setName("koala").setDescription("Get a random 🐨 koala image")
    )
    .addSubcommand((options) =>
      options.setName("panda").setDescription("Get a random 🐼 panda image")
    )
    .addSubcommand((options) =>
      options.setName("raccoon").setDescription("Get a random 🦝 raccoon image")
    )
    .addSubcommand((options) =>
      options
        .setName("redpanda")
        .setDescription("Get a random 🐼 red panda image")
    ),
};
