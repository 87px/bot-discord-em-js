const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client(
  { intents: [GatewayIntentBits.Guilds] },
  { intents: [GatewayIntentBits.GuildMessages] }
);
const { token } = require("./config.json");
const { registerCommands } = require("./registerCommands.js");
registerCommands();

client.on("ready", () => {
  console.log(`Foi logado como ${client.user.tag}!`);
  client.user.setPresence({
    activities: [{ name: "https://discord.gg/bpj8pak4Rw" }],
    status: "idle",
  });
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(token);
