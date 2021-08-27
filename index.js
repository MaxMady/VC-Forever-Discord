

const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello hell!")
})

app.listen(3000, () => {
 console.log("Whatever you want to put here")
})


let Discord = require("discord.js");
let client = new Discord.Client();
let snipe = new Discord.Collection();
let db = require('quick.db')
let canvas = require('canvas')





client.on("ready", () => {
    const channel = client.channels.cache.get("852772817195499529");
client.user.setActivity("With darkness", {
  type: "STREAMING",
  url: "https://www.twitch.tv/dark_domain"
});


    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        // Yay, it worked!
        console.log("Successfully connected.");
    }).catch(e => {

        // Oh no, it errored! Let's log it to console :)
        console.error(e);
    });
});

client.on("message", message => {

//-----------------------------
if(message.content === ("+roll")){
let dice = Math.round(Math.random() * 100)
if(dice === 0){
message.reply("Woopsie! looks like you got 0.... today is very unlucky day for you!")
}else{
message.reply(`You rolled **${dice}**`)
}
}

//-------------------------------

if(message.content === "+credits") {
 let embed = new Discord.MessageEmbed()
 .setTitle(":yellow_dot: Mimu Credits value")
 .setDescription("> :dot_mint: 1 :coin: = 1 Poketwo/Pokemon Credits \n> :dot_mint: 1 :coin: = 100 Dank Coins \n> :dot_mint: 1 :coin: = 0.11000 Karuta Tickets(1 Ticket = 11000 :coin:) \n> :dot_mint: 1 :coin: = 1 Anigame Credits")
 .setColor("YELLOW")
 .setFooter("You can convert back also")
 message.channel.send(embed)
}

//---------------------------------

if (message.content === "+ping") {
 let embed = new Discord.MessageEmbed()
 .setTitle("🏓 Pong!")
 .setDescription(`**${client.ws.ping}ms** Latency!`)
 .setColor("RANDOM")
 .setFooter(
 `Requested by ${message.author.username}`,
 message.author.displayAvatarURL()
 );
 message.channel.send(embed);
 }

 //---------------------------------

 if (message.content === "<@!717708314053443635>") {
message.channel.send("Why u want a Donkey")
}
 if (message.content === "<@!872911707436105728>") {
message.channel.send("Please dont ping until there is a stupid reason")
}

//----------------------------------

if(message.content === "+topic") {
let replies = ["How do you like your eggs cooked?", "At what age would you consider someone to be old?", "Are you a clean or messy?", "What is your favorite food?", "What are some things that you should not not say during a job interview?", "Describe yourself in one sentence.", "What is your favorite childhood memory?", "Do you prefer a quiet night at home or going out to a big party?","What is your biggest fear?","What do you do when you're bored?", "Would you rather be stuck in a house with someone you hate or be stuck in a house alone?", "What movies have you re-watched the most number of times?", "What are your hobbies?", "What is your favorite pizza topping?", "What kind of music do you like to listen to?", "Who was the last person you had a good conversation with?", "What is the best piece of advice that you've received?","If you became president, what is the first thing you would do?","What motivates you?"] 
message.channel.send(replies[Math.floor(Math.random() * replies.length)]) 
}

if(message.content === "+membercount" || message.content === "+mc") {
 let embed = new Discord.MessageEmbed()
 .setColor("WHITE")
 .setAuthor(`Member Count of ${message.guild}`, message.guild.iconURL({ dynamic: true }))
 .setTitle("Members")
 .setDescription (`Total: ${message.guild.members.cache.size}\n Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
 .setThumbnail(message.guild.iconURL({ dynamic: true }))
 .setFooter(`Requested by ${message.author.username}`)

 message.channel.send(embed)
}


})

client.on('message', (message) => {
 // checks if the message author is afk
 if (db.has(message.author.id + '.afk')) {
  message.channel.send(`Welcome back ${message.author} I removed your AFK.`);
  db.delete(message.author.id + '.afk');
  db.delete(message.author.id + '.messageafk');
 }
 if (message.content.startsWith('+afk')) {
  message.channel.send(
   'Aight, I have set your AFK. I will send a message to the users who mention you..'
  );
  // then here you use the database :
  db.set(message.author.id + '.afk', 'true');
  db.set(
   message.author.id + '.messageafk',
   message.content.split(' ').slice(2)
  );
 }
 if (message.content.includes('+afk off')) {
  db.delete(message.author.id + '.afk');
  db.delete(message.author.id + '.messageafk');
 }
});

client.on('message', (message) => {
 // If one of the mentions is the user
 message.mentions.users.forEach((user) => {
  if (message.author.bot) return false;

  if (
   message.content.includes('@here') ||
   message.content.includes('@everyone')
  )
   return false;
  if (db.has(user.id + '.afk'))
   message.channel.send(
    `${message.author}, the user you mentioned is currently AFK.. Leave a message if urgent by DMing him`
   );
 });
});
client.on('message', async (message) => {
 if(message.author.bot) return;
 if (message.content.startsWith("+poll")) {
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) return message.reply("Correct Usage: `>poll test`")
 message.delete(2000);

 let embed = new Discord.MessageEmbed()

 .setTitle(`New Poll!`)
 .setDescription(`Q.${sentence} `)
 .addField(`Poll: ${sentence}`)
 const pollTopic = await message.channel.send(`**${message.author.username}#${message.author.discriminator}** Asks: **${sentence}**`);
 pollTopic.react(`✅`)
 pollTopic.react(`❌`);
 console.log(guild)
 };
})
client.login(process.env.token)