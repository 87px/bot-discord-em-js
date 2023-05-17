const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Pronto! Logado com sucesso como ${client.user.tag}.`);
		client.user.setPresence({ activities: [{ name: 'Feito por real#0404' }], status: 'idle' });
	},
};