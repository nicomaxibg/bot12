const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class JagherCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'jagher',
      group: 'fun',
      memberName: 'jagher',
      description: "Repond avec : 'Jagher montre tes pieds!'",
    });
  }

  run(message) {
    console.log("Commande jagher exécutée !");

    const embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setDescription("Jagher, montre tes pieds !");

    return message.channel.send(embed);
  }
};
