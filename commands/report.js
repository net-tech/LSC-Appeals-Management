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
  expectedArgs: 'report <verify | invalidate> <messageid>',
  callback: async ({ client, interaction, message, args }) => {

    const cmds = ['verify', 'invalidate']
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
          message.reply({ content: `<:error:903756758995042344> Error for message id \`${arg}\`: \`\`\`js\nUnknown Message.\n\`\`\`Please make that you are running this command in the channel` })
        }
        message.reply({ content: `\`\`\`js\n${error}\n\`\`\`` })
        return;
      })
      .then((message) => {
        message.react('<:check:903756666615517214> ')
      })
      })
  }
}
}