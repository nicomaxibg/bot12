const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

client.on('message', message => {
    if (message.content === '!photo') {
      const randomPhoto = getRandomPhoto(photoFolderPath);
      if (randomPhoto) {
        publishPhoto(randomPhoto);
      } else {
        message.channel.send('Aucune photo trouvée.');
      }
    }
  });
  
  // Fonction pour publier une photo sur Discord
  async function publishPhoto(filePath) {
    try {
      const channel = await client.channels.fetch(channelId);
      await channel.send({ files: [filePath] });
      console.log(`Photo publiée: ${filePath}`);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la publication de la photo:', error);
    }
  }
  
  // Fonction pour obtenir une photo aléatoire du dossier
  function getRandomPhoto(folderPath) {
    const photoFiles = fs.readdirSync(folderPath).filter(file => {
      return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.gif');
    });
  
    if (photoFiles.length === 0) {
      return null;
    }
  
    const randomIndex = Math.floor(Math.random() * photoFiles.length);
    return `${folderPath}/${photoFiles[randomIndex]}`;
  }