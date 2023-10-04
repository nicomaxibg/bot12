const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class PatronCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'patron',
      group: 'fun',
      memberName: 'patron',
      description: "Repond avec : 'Nico le mec ultra BG c'est mon boss et il vous nique tous!'",
    });
  }

  run(message) {
    console.log("Commande patron exécutée !");

    const embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setDescription("Nico le mec ultra BG c'est mon boss et il vous nique tous !");

    return message.channel.send(embed);
  }
};

