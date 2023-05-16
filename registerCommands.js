const { REST } = require('discord.js');
const { Routes } = require('discord-api-types/v10');
const { token } = require("./config.json");

const commands = [
  {
    name: 'ping',
    description: 'Responde com pong.',
  },
  {
    name: 'avatar',
    description: 'Avatar do usuário',
  },
];

const rest = new REST({ version: '10' }).setToken(token);

async function registerCommands() {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands('1077703056663269376'), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  registerCommands,
};