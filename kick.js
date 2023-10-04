const { Command } = require('discord.js-commando');

module.exports = class KickCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'kick',
      group: 'fun',
      memberName: 'kick',
      description: 'Expulse un membre du serveur.',
      guildOnly: true,
      userPermissions: ['KICK_MEMBERS'],
      clientPermissions: ['KICK_MEMBERS'],
      args: [
        {
          key: 'member',
          prompt: 'Quel membre voulez-vous expulser ? Mentionnez le membre ou entrez son ID.',
          type: 'member',
        },
        {
          key: 'reason',
          prompt: 'Raison de l\'expulsion ?',
          type: 'string',
          default: '',
        },
      ],
    });
  }

  async run(message, { member, reason }) {
    if (!member.kickable) {
      return message.channel.send('Je ne peux pas expulser ce membre.');
    }

    try {
      await member.kick(reason);
      message.channel.send(`L'utilisateur ${member.user.tag} a été expulsé${reason ? ` pour la raison : ${reason}` : ''}.`);
    } catch (error) {
      console.error('Erreur lors de l\'expulsion du membre :', error);
      message.channel.send('Une erreur s\'est produite lors de l\'expulsion du membre.');
    }
  }
};
