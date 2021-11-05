const Discord = require('discord.js');
module.exports = {
    aliases: ["abt"],
    name: "about",
    category: "Utility",
    description: "About the bot.",
    cooldown: "3s",
    guildOnly: true,
    slash: 'both',
    ownerOnly: false,
    testOnly: false,
    callback: ({ client, interaction, message, args }) => {

        const embed = new Discord.MessageEmbed()
        .setTitle("About")
        .setDescription("This bot was created or the LSC and LSC Appeals discord servers with the intention to assist staff members in daily tasks.")
        .addField("Developers", "Blizzy#8953\nnet-tech-#0001")
        .setColor("BLURPLE")
        interaction ? interaction.reply({embeds: [embed]}) : message.reply({embed});
    }
}