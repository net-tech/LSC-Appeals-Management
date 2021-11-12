const Discord = require("discord.js");
const { blue, green, red, orange, yellow, purple, pink, gray } = require('../util/colors.js')
module.exports = {
  aliases: ["suggest"],
  name: "suggestion",
  category: "Utility",
  description: "Sends a suggestion depending on the server you're in.",
  cooldown: "3s",
  guildOnly: false,
  slash: false,
  ownerOnly: false,
  testOnly: false,
  callback: async ({ client, interaction, message, args }) => {
    const suggestion = args[0];
    const embed = new Discord.MessageEmbed()
        .setTitle(`New Suggestion!`)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(args[0])
        .setColor("RANDOM")
        .setFooter("Please review the above suggestion, and reply using the suggest-reply command!")
    if (message.guild.id === "833599402802413598") {
        client.guilds.cache.get('833599402802413598').channels.cache.get('846683365402738698').send({ embeds: [embed] })
    }
    }
  }
