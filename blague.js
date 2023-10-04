const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class BlagueCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'blague',
      group: 'fun',
      memberName: 'blague',
      description: 'Affiche une blague aléatoire.',
    });
  }

  async run(message) {
    const jokes = [
      "Comment est-ce qu'on appelle un boomerang qui ne revient pas ? Un chat mort.",
      "Qu'est ce qui est tout bleu au fond de la riviére ? Le petit Gregory.",
      "Qu'est-ce qui est tout rouge, qui hurle, qui gigote et qui fait des bulles ? Un bébé plongé dans l'acide",
      "Qu'est-ce qui est jaune et qui attend ? Jonathan !",
      "Pourquoi la petite fille tombe-t-elle de la balançoire ? Parce qu'elle n'a pas de bras.",
      "Grâce à quoi peut-on enlever le chewing-gum dans les cheveux ? Le cancer.",
      "Qu'est-ce qui a deux pattes et qui saigne ? Un demi-chien.",
      "Qu'est ce qui est vert et qui pue ? un scout mort au fond d'un bois.",
      "Quelle est la pire combinaison de maladies ?  Alzheimer et la diarrhée. Vous courez, mais vous ne savez plus où…",
      "C'est l'histoire d'un zoophile qui rentre dans un bar.",
      "Comment différencier un somalien riche d'un somalien pauvre ? Le riche a une montre autour de la taille",
      "Qu'est ce qui est rouge et qui fait mal aux dents ? Une brique.",
      "Qu'est ce qui est rouge et qui fait deux fois plus mal aux dents ? Deux briques.",
      "C'est quoi un lepreux dans une baignoire ? Un efferalgant",
      "Qu'elle félin ne sais pas nager ? Le tiGregory",
      "Pourquoi les juifs ont un grand nez ? Parce que l'air est gratuit.",
      "Pourquoi les juifs ont un grand nez ? Pour fumer sous la douche.",
      "Qu'elle la différence entre Jésus et une photo de Jésus ? La photo de Jésus il faut qu'un clou pour l'accrocher.",
      "Quel est le fast food le plus répendu en Somalie ? Le MancDo",
      "Pourquoi les arabes ce réveille avec les doigts qui pue ? Parce que même la nuit ils cherche la merde.",
      "Quel est l'hôtel le plus étoiler d'Allemagne ? Auschwitz.",
      "Quel est l'animal totem des arabes ? Le corbeau parce que ... 'ARA ARA'.",
      "Comment sait on si une portugaise porte une cullote ? Regarde sur les chaussures si il y a des pelicules.",
      "Comment sait on si c'est un arabe qui a volé ? Le rayon 'cochon' est toujours plein.",
      "Je vais vous raconter une blague zoophille. C'est l'histoire d'un mec qui rentre dans un bar.",
      "Pourquoi dans le titanic nous disions les femmes et les enfants d'abord ? Car comme ça les requins ont plus faim.",
    ];

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    const embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Petit blague !')
      .setDescription(randomJoke);

    message.channel.send(embed);
  }
};