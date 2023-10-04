const { Command } = require('discord.js-commando');

module.exports = class ClearCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'clear',
      group: 'fun',
      memberName: 'clear',
      description: 'Supprime un certain nombre de messages dans un salon.',
      args: [
        {
          key: 'amount',
          prompt: 'Combien de messages voulez-vous supprimer ?',
          type: 'integer',
          validate: amount => amount > 0 && amount <= 100,
        },
      ],
    });
  }

  async run(message, { amount }) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.channel.send("Désolé, vous n'avez pas la permission de gérer les messages.");
    }

    // Supprimer les messages en plusieurs lots de 100
    let totalDeleted = 0;
    while (totalDeleted < amount) {
      const messages = await message.channel.messages.fetch({ limit: Math.min(amount - totalDeleted, 100) });
      if (messages.size === 0) break;

      const deletedMessages = await message.channel.bulkDelete(messages, true).catch(error => {
        console.error('Erreur lors de la suppression des messages:', error);
        message.channel.send("Une erreur s'est produite lors de la suppression des messages.");
      });

      totalDeleted += deletedMessages.size;
    }

    message.channel.send(`Fermer la j'ai étais obligé de supprimer ${totalDeleted} messages`);
  }
};
