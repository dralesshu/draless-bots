const { Client } = require("discord.js");
const client = new Client();
const auth = require("./lyb.js");
const config = require("./global.js");

client.on("ready", () => {
    client.channels.cache.get(config.global.voiceChannelID).join().catch(err => console.log("Ses ID'si Arızalı!"))
    setInterval(() => {
        const customStatus = config.global.activityName
        const reloadStatus = Math.floor(Math.random() * (customStatus.length));
        client.user.setPresence({ activity: { name: `${customStatus[reloadStatus]}`, type: "PLAYING" }, status: "dnd" })
      }, 5000); 
});

client.login(auth.secret.token.moderation).catch(err => console.log("Token bozuk!"))