

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

const channel = client.channels.cache.get("852772817195499529");




client.on("ready", () => {
//Enter the like const channel =.... in here if doesnt works
 client.user.setActivity("With darkness", {
  type: "STREAMING",
  url: "https://www.twitch.tv/dark_domain"
});


    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        // Now logging system
        console.log("Successfully connected.");
    }).catch(e => {

        console.error(e);
    });
});

client.on("message", message => {

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


})
client.login(process.env.token)
