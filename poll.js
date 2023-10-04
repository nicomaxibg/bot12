const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PollCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'poll',
      group: 'fun',
      memberName: 'poll',
      description: 'Crée un sondage avec des choix de réponses.',
      args: [
        {
          key: 'question',
          prompt: 'Quelle est la question du sondage ?',
          type: 'string',
        },
        {
          key: 'choices',
          prompt: 'Quels sont les choix de réponses ? (séparés par des virgules)',
          type: 'string',
        },
      ],
    });
  }

  run(message, { question, choices }) {
    const choicesArray = choices.split(',').map(choice => choice.trim());

    if (choicesArray.length < 2) {
      return message.reply('Veuillez fournir au moins 2 choix de réponses.');
    }

    const embed = new MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Sondage')
      .setDescription(question);

    let options = '';
    const emojis = ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯', '🇰', '🇱', '🇲', '🇳', '🇴', '🇵', '🇶', '🇷', '🇸', '🇹', '🇺', '🇻', '🇼', '🇽', '🇾', '🇿'];

    for (let i = 0; i < choicesArray.length; i++) {
      const emoji = emojis[i];
      const choice = choicesArray[i];
      options += `${emoji} ${choice}\n`;
    }

    embed.addField('Options', options);

    message.channel.send(embed)
      .then(sentMessage => {
        for (let i = 0; i < choicesArray.length; i++) {
          const emoji = emojis[i];
          sentMessage.react(emoji);
        }
      })
      .catch(console.error);
  }
};
