const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check the bot's ping"),
  async execute(interaction) {
    const startTime = Date.now();
    const reply = await interaction.reply({
      content: "Pinging...",
      ephemeral: true,
    });
    const endTime = Date.now();
    const ping = endTime - startTime;

    await reply.edit({ content: `Pong! Latência: ${ping}ms.` });
  },
};
