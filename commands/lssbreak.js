const Discord = require("discord.js");
const { blue, green, red, orange, yellow, purple, pink, gray } = require('../util/colors.js')
module.exports = {
  aliases: ["br"],
  name: "break",
  category: "Utility",
  description: "Sends in a break request.",
  cooldown: "3s",
  guildOnly: false,
  slash: false,
  ownerOnly: false,
  testOnly: false,
  callback: async ({ client, interaction, message, args }) => {
    if (message.guild.id !== 841671029066956831) {
        message.reply("Sorry, this command can only be used in the LOA Staff Server!")
    } else {
    const time = args[0]
    const reason = args.slice(1).join(" ")
    const embed = new Discord.MessageEmbed()
        .setTitle(`New Break Request from ${message.author.name}.`)
        .addField("Time Requested:", `${time}`)
        .addField("Reason:", `${reason}`)
        .setColor("RANDOM")
        .setFooter("Management: To approve this break, please send &apb (user ID).")
        client.guilds.cache.get('841671029066956831').channels.cache.get('841676953613631499').send({ embeds: [embed] })
        }  
    }
}
