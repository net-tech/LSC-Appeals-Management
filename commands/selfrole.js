const Discord = require("discord.js");
const { blue, green, red, orange, yellow, purple, pink, gray } = require('../util/colors.js')
module.exports = {
  aliases: ["sr"],
  name: "setroles",
  category: "Utility",
  description: "Sets roles on entry.",
  cooldown: "3s",
  guildOnly: true,
  slash: false,
  ownerOnly: false,
  testOnly: false,
  minArgs: 1,
  expectedArgs: "<type>",
  callback: async ({ client, interaction, message, args }) => {
    message.guild.members.cache;
    let member = message.member
    const type = args[0]
    let confirmadd = new Discord.MessageEmbed()
      .setTitle("Role(s) Added")
      .setColor("GREEN")
    let confirmremove = new Discord.MessageEmbed()
      .setTitle("Role(s) Removed")
      .setColor("GREEN")

    function assignRole(member, role) {
      if(!member.roles.cache.has(role)) {
        member.roles.add(role)
        message.reply({embeds: [confirmadd]})
      } else {
        member.roles.remove(role)
        message.reply({embeds: [confirmremove]})
      }
    }

    if (!type) {
      message.reply("<:cancel:903756649636966440> Please state a role type value.")
      return;
    } else if (type == "announcements") {
      assignRole(member, "904776470059175937")
    } else if (type == "developer") {
      assignRole(member, "904776970133463050")
    } else if (type == "alert") {
      assignRole(member, "904777076811399268")
    } else if (type == "appeals") {
      assignRole(member, "873006630474768455")
    } else if (type == "security") {
      assignRole(member, "904777294952931388")
    } else if (type == "all") {
      member.roles.add("904776470059175937")
      member.roles.add("904776970133463050")
      member.roles.add("904777076811399268")
      member.roles.add("873006630474768455")
      member.roles.add("904777294952931388")
      message.reply({ embeds: [confirmadd] })
    } else {
      message.reply("Oops, you need to provde a valid role. Check the pinned messages in the LSC bot commands channel!")
    }
  },
};