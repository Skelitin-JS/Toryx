const Discord = require("discord.js")


const TOKEN = "OTQzNzIwNzA0NzA3MjY0NTMy.Yg3KZQ.eP_iWZbTbWi-bn2REE1xWMMrphQ"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as${client.user.tag}`)
})

client.login(TOKEN)
