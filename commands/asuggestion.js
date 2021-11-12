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
    const suggestion = args.slice(0).join(' ');
    const embed = new Discord.MessageEmbed()
        .setTitle(`New Anonymous Suggestion!`)
        .setDescription(args[0])
        .setColor("RANDOM")
        .setFooter("Please review the above suggestion, and reply using the suggest-reply command!")
    if (message.guild.id === "833599402802413598") {
        client.guilds.cache.get('833599402802413598').channels.cache.get('846683365402738698').send({ embeds: [embed] })
        message.delete(1)
        client.guids.cache.get('833599402802413598').channels.cache.get('898949881127927828').delete(1)
        message.channel.send("Your anonymous suggestion has been sent!")
    }
    }
  }
