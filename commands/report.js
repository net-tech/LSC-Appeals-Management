const Discord = require("discord.js");
const { blue, green, red, orange, yellow, purple, pink, gray } = require('../util/colors.js')
const { debug, error, warn, info } = require("../util/chalkhelper.js");
module.exports = {
  aliases: ["rc"],
  name: "report",
  category: "Utility",
  description: "Execute LSC report management functions.",
  cooldown: "3s",
  guildOnly: false,
  slash: false,
  ownerOnly: false,
  testOnly: false,
  requiredArgs: 2,
  expectedArgs: 'report <verify | invalidate | controversial> <messageid>',
  callback: async ({ client, interaction, message, args }) => {
    
    if (!message.member.roles.cache.some(role => role.id === "913183373428662273")) {
      let MissingRoleEmbed = new Discord.MessageEmbed()
        .setTitle("Access Denied.")
        .setDescription(`<:cancel:903756649636966440>  Only people with the \`LSC Staff Team\` role can use this command.`)
        message.channel.send({ embeds: [MissingRoleEmbed] })
      })
    
    const cmds = ['verify', 'invalidate','controversial']
    const selctedcmd = args[0]
    const messageid = args[1]
    if (!cmds.includes(selctedcmd)) {
      const invalidcmd = new Discord.MessageEmbed()
        .setTitle("That is not a valid subcommand.")
        .setDescription(`**Valid subcommands:**\n \`${cmds.join(`\`<:seperator:905426769660743721>\``)}\``)
        .setColor(red)
      message.reply({ embeds: [invalidcmd] })
      return;
    }
    const thismsg = message
    if (selctedcmd === 'verify') {

      if (args.length > 10) {
        message.reply(`You can only verify up to 10 messages at a time.`)
      }
      thismsg.delete(1)
      args.forEach(async (arg) => {
      await message.channel.messages.fetch(arg).catch((error) => {
        if(error.message.includes("DiscordAPIError: Unknown Message")) {
          message.reply({ content: `<:error:903756758995042344> Error for message id \`${arg}\`: \`\`\`js\nUnknown Message.\n\`\`\`Please make that you are running this command in the channel of the report.` })
        }
        message.reply({ content: `\`\`\`js\n${error}\n\`\`\`` })
        return;
      })
      .then((message) => {
        message.react('<:check:903756666615517214> ')
      })
      })
  } else if (selectedcmd === 'controversial') {

  if(args.length > 1) {
      message.reply("Only one report can be marked as controversial at a time")
  }
  thismsg.delete(1)
  message.channel.messages.fetch(arg).catch((error) => {
    if(error.message.includes("DiscordAPIError: Unknown Message")) {
      message.reply({ content: `<:error:903756758995042344> Error for message ID \`${arg}\`: \`\`\`js\nUnknown Message.\n\`\`\`Please make that you are running this command in the channel of the report.` })
    }
    message.reply({ content: `\`\`\`js\n${error}\n\`\`\`` })
    return;
  })
  .then((message) => {
    message.react('<:controversial:909407014269095986>')
    thismsg.channel.send(`
    <:controversial:909407014269095986> **Controversial Report**
    
    We have marked the above report as controversial. Please use the report discussion thread to talk about this report. At this time the LOA Safety Center is still validating it and does not **recommend** taking action, however banning is still at your discretion.
    `)
  })
} else if(selectedcmd === 'invalidate') {

  if(args.length > 1) {
      message.reply("Only one report can be marked as invalid at a time")
  }
  thismsg.delete(1)
  message.channel.messages.fetch(arg).catch((error) => {
    if(error.message.includes("DiscordAPIError: Unknown Message")) {
      message.reply({ content: `<:error:903756758995042344> Error for message ID \`${arg}\`: \`\`\`js\nUnknown Message.\n\`\`\`Please make that you are running this command in the channel of the report.` })
    }
    message.reply({ content: `\`\`\`js\n${error}\n\`\`\`` })
    return;
  })
  .then((message) => {
    message.reply(`<:cancel:903756649636966440> **Report Invalid and Deleted**
    
    <:reason:903756658386284565> Reason: ${reason}
    CC: ${message.author}`)
   message.delete()
  })
}
}
}
