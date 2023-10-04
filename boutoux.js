const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class BoutouxCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'boutoux',
      group: 'fun',
      memberName: 'boutoux',
      description: "Repond avec : 'bonjour juste pour rappeler que boutoux est une merde'",
    });
  }

  run(message) {
    console.log("Commande boutoux exécutée !");

    const embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setDescription("bonjour juste pour rappeler que boutoux est une merde");

    return message.channel.send(embed);
  }
};
