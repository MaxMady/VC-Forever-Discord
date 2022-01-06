const { Client, Collection, Intents, MessageEmbed, Discord, Permissions, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] ,partials: ["CHANNEL"]  });
const { joinVoiceChannel } = require('@discordjs/voice');

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});


client.on("ready", () => {
    console.log("Logged in as " + client.user.tag)
    client.user.setActivity("Tournaments", {type: "WATCHING"})
    client.user.setStatus("dnd");

})
const prefix = `!`

client.on(`messageCreate`, async message => {
if(message.content.toLowerCase(`${prefix}join`)) {
await message.reply(`Connecting to voice channel...`).then(msg => {
  
  const connection = joinVoiceChannel({
	channelId: channel.id,
	guildId: message.channel.guild.id,
	adapterCreator: message.channel.guild.voiceAdapterCreator,
});
  
  setTimeout(function() {
  await msg.editReply(`Successfully connected to voice channel!`)
  }, 2000)
})
  
  
}
});
