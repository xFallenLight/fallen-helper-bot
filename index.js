const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`[${new Date().toString().substr(0, 23)}] Successfully logged in as ${client.user.tag}!`);
  client.user.setGame("You do not need to know my purpose.")
});

let prefix = "++"

client.on('message', msg => { 
  /* if (msg.guild.members.filter(mem => mem.member.displayName.startsWith("!"))) {
      mem.member.setNickname(`${mem.member.displayName.substr(1)}`, `Hoisting on the user list.`)
  } */
  msg.member.displayName.startsWith("!") && msg.member.setNickname(`${msg.member.displayName.substr(1)}`)

  if (msg.content.startsWith(prefix + 'ping')) {
    msg.reply('Why are you interested in checking out my response time?').then(sentMsg => {
        sentMsg.edit(`Pong! [${sentMsg.createdTimestamp - msg.createdTimestamp}ms]`)
      })
  }
});

client.login(process.env.token);
