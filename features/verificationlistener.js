const Discord = require('discord.js')
module.exports = (client, message, args) => {
  client.on('messageCreate', async (message, args) => {

    const verifcommand = "&vc"
    const targetmessage = message
    function checkForCommand() {
      for (const command of verifcommand)
        if (message.content.includes(command)) return true;
      return false;
    }

    if (message.guild.id === "903693464045223957" && checkForCommand(true)) {
      const embed = new Discord.MessageEmbed()
      .setTitle("Verification Attempted")
      .setAuthor(message.author.defaultAvatarURL)
      .setDescription(targetmessage)
      .setColor("RED")
      await client.guilds.cache.get('903693464045223957').channels.cache.get('903702820585345045').send({ embeds: embed });  
    };
  },

module.exports.config = {
  // The display name that server owners will see.
  // This can be changed at any time.
  displayName: 'on message',

  // The name the database will use to set if it is enabled or not.
  // This should NEVER be changed once set, and users cannot see it.
  dbName: 'ON-MSG',

  // Being true means a database connection must be present before the
  // feature is enabled.
  loadDBFirst: false
})}