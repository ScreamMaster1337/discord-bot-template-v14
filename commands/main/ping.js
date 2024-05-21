const { ApplicationCommandType, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: "Sprawdź ping bota",
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setDescription(`Ping bota wynosi: \`${Math.round(client.ws.ping)} ms\``)
        interaction.reply({ embeds: [embed], ephemeral: true });
    }
};