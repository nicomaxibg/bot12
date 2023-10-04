const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const cron = require('node-cron');
const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();
const welcomeChannelId1 = '1127539119086637096';
const welcomeChannelId2 = '808125126293454850';
const welcomeChannelId3 = '1046415778058088500';
const token = require('config.json')
const client = new CommandoClient({
  commandPrefix: '!',
  owner: '901916731562422324',
  intents: ['GUILD_MESSAGES', 'GUILD_MEMBERS']
});

client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
  client.user.setActivity("Developed by ChatGPT®", { type: "PLAYING" });
});

const YOUR_USERNAME = '.nicomaxibg';

client.on('message', message => {
  if (message.author.bot) return;
  if (message.mentions.has(client.user)) {
  } else if (message.mentions.users.some(user => user.username === YOUR_USERNAME)) {
    message.channel.send(`${message.author} mentionne pas mon boss jte fume sinon !`);
  }
});

function sendMessage(channelId, message) {
  const channel = client.channels.cache.get(channelId);
  if (channel) {
    channel.send(message)
      .then(() => console.log(`Message automatique envoyé dans le canal ${channel.name}`))
      .catch(console.error);
  } else {
    console.log(`Le canal avec l'ID ${channelId} n'a pas été trouvé.`);
  }
}

cron.schedule('0 12 28 * *', () => {
  const messageToSend = "Salut mon pote ! C'est aujourd'hui que tu dois faire ton actualisation. Et oui nous sommes déjà le 28 ! Allez au boulot et gros bisous.";
  sendMessage('1124677267780542485', messageToSend);
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['fun', 'Commandes Fun'],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommands([
    require('./blague'),
    require('./clear'),
    require('./hello'),
    require('./jagher'),
    require('./kick'),
    require('./patron'),
    require('./poll.js'),
    require ('./boutoux.js'),

  ]);


  client.on('guildMemberAdd', (member) => {
    const welcomeChannel1 = member.guild.channels.cache.get(welcomeChannelId1);
    const welcomeChannel2 = member.guild.channels.cache.get(welcomeChannelId2);
    const welcomeChannel3 = member.guild.channels.cache.get(welcomeChannelId3);
    
    if (welcomeChannel1) {
      welcomeChannel1.send(`Salut, ${member} ! Heureux de te voir ici ! J'espère que tu vas bien. Gros bisous en espérant que tu passes un bon moment en notre compagnie. !`);
    }
  
    if (welcomeChannel2) {
      welcomeChannel2.send(`Salut, ${member} ! Heureux de te voir ici ! J'espère que tu vas bien. Gros bisous en espérant que tu passes un bon moment en notre compagnie. !`);
    }
  
    if (welcomeChannel3) {
      welcomeChannel3.send(`Salut, ${member} ! Heureux de te voir ici ! J'espère que tu vas bien. Gros bisous en espérant que tu passes un bon moment en notre compagnie. !`);
    }
  });

  
  client.once('ready', () => {
    console.log('Le bot est prêt.');
  });
  
  // Événement pour écouter les messages
  client.on('message', message => {
    if (message.content.toLowerCase().includes('bg')) {
      message.channel.send('qui me parle ?');
    }
  });
  

  client.on('guildMemberRemove', (member) => {
    const channelId1 = '1130150080989642793';
    const channelId2 = '1077558132479377458';
    const channelId3 = '1046415778058088500';
  
    const channel1 = member.guild.channels.cache.get(channelId1);
    const channel2 = member.guild.channels.cache.get(channelId2);
    const channel3 = member.guild.channels.cache.get(channelId3);
  
    if (channel1) {
      channel1.send(`Au revoir ${member.user.username} ! (salope)`)
        .catch(console.error);
    } else {
      console.log(`Le canal avec l'ID ${channelId1} n'a pas été trouvé.`);
    }
  
    if (channel2) {
      channel2.send(`Au revoir ${member.user.username} ! (salope)`)
        .catch(console.error);
    } else {
      console.log(`Le canal avec l'ID ${channelId2} n'a pas été trouvé.`);
    }
  
    if (channel3) {
      channel3.send(`Au revoir ${member.user.username} ! (salope)`)
        .catch(console.error);
    } else {
      console.log(`Le canal avec l'ID ${channelId3} n'a pas été trouvé.`);
    }
  });  

  client.login(token);
