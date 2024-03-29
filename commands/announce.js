const Discord = require("discord.js");
const { blue, green, red, orange, yellow, purple, pink, gray } = require('../util/colors.js')
module.exports = {
  aliases: ["an"],
  name: "announce",
  category: "Utility",
  description: "Announces via the bot.",
  cooldown: "3s",
  guildOnly: false,
  slash: false,
  ownerOnly: false,
  testOnly: false,
  minArgs: "3",
  expectedArgs: "<server> <rolepingID> <color> <message>",
  callback: async ({ client, interaction, message, args }) => {
    let server = args[0]
    let author = args[1]
    let rolepingID = args[2]
    let embedColor = args[3]
    let anmessage = args.slice(4).join(" ")
    message.delete(1);
    const embed = new Discord.MessageEmbed()
      .setTitle(`New Announcement from ${author}.`)
      .setDescription(`${anmessage}`)
      .setColor(`${embedColor}`)
    if(server == "lsc"){
      client.guilds.cache.get('833599402802413598').channels.cache.get('833606008143872000').send({content: `<@&${rolepingID}>`, embeds: [embed] })
    } else if(server == "appeals") {
      client.guilds.cache.get('903693464045223957').channels.cache.get('904460985677516811').send({content: `<@&${rolepingID}>`, embeds: [embed] })
    } else if(server == "ac") {
      client.guilds.cache.get('903693464045223957').channels.cache.get('904461796239360100').send({content: `<@&${rolepingID}>`, embeds: [embed] })
    }
    message.channel.send("Announced!")
  } 
} 
