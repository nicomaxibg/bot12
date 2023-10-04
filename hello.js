const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class HelloCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'hello',
      group: 'fun',
      memberName: 'hello',
      description: "Dire bonjour à l'utilisateur."
    });
  }

  run(message) {
    console.log(`Bonjour ${message.author.username} !`);

    const embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Bonjour !')
      .setDescription(`yo ${message.author.username} ! ça va ou quoi ?`);

    return message.channel.send(embed);
  }
};
