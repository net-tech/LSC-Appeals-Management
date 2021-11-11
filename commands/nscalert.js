const Discord = require("discord.js");
const { blue, green, red, orange, yellow, purple, pink, gray } = require('../util/colors.js')
module.exports = {
  aliases: ["nsca"],
  name: "nsc-alert",
  category: "Utility",
  description: "Change the alert level.",
  cooldown: "3s",
  guildOnly: false,
  slash: false,
  ownerOnly: false,
  testOnly: false,
  callback: async ({ client, interaction, message, args }) => {

    const authUsers = ["413462464022446084", 
    "533792698331824138", 
    "461862173044375572"]
    const level = args[0]
    const reason = args.slice(1).join(" ")
    if (!authUsers.includes(message.author.id)) {
        message.reply("Sorry, only authorized users can use that. If you feel you should be added, PM the Owner, President of NSC, or a member of Network Management.")
        break;
    } else {
        const embed = new Discord.MessageEmbed()
            .setTitle("Alert Level Updated")
            .setTimestamp()
            .setFooter("Authorized by the Network Safety Council Administration.")
        if (message.author.id === "413462464022446084") {
            embed.addField("**Reason**:", `>>> Authorized by the <@&783250014759419905>.\n${reason}`)
        } else if (message.author.id === "533792698331824138") {
            embed.addField("**Reason:**:", `>>> Authorized by the <@&705954984977629225>.\n${reason}`)
        } else {
            embed.addField("**Reason:**", `>>> Authorized by the <@&886918101235564595>\n${reason}`)
        }
        if (level == "red" || "Red") {
            embed.setDescription("The alert level has been set to **RED**. Stay on high alert for any threats.")
            embed.setColor("RED")
        } else if (level == "yellow" || "Yellow") {
            embed.setDescription("The alert level has been set to **YELLOW**. Stay vigilant for any new threats, but the situation is relatively calm.")
            embed.setColor("YELLOW") //
        } else if (level == "green" || "Green" || "normal" || "Normal") {
            embed.setDescription("The alert level has been set to **GREEN**. There are no current threats.")
            embed.setColor("GREEN")
        }
    } client.guilds.cache.get('704888699590279221').channels.cache.get(`**ALERT CHANGE:** Alert was changed to ${level}:\nReason: ${reason}`);
    message.delete(2)
    message.channel.send({ content: "<@&748830670431846432> <@&741996369312481430>", embeds: [embed] })
  }
}
