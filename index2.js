const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  
      if (interaction.commandName === 'squish') {
          console.log("Login as ${client.user.tag}!")
    let images = [
    "https://d.newsweek.com/en/full/1785892/where-buy-squishmallows-2.jpg?w=790&f=791f368eb88c18a5a45caab2ca3c4064",
    "https://pics.drugstore.com/prodimg/597958/900.jpg",
    "https://i5.walmartimages.com/asr/f35fa8e9-3c5d-4542-a53d-52d7828e85a9.049ac9d53df1548a7f105e31df5113e4.jpeg",
    "https://m.media-amazon.com/images/I/51uWMosPnYS._AC_SL1024_.jpg",
    "https://target.scene7.com/is/image/Target/GUEST_cb0cb8e0-605d-40d5-b5e2-babaee710869?wid=488&hei=488&fmt=pjpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hIF_YEtgYkqPPD4HGWxAx8Ka-P5Mg3FPsg&usqp=CAU",
    "https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb482a716/images/hi-res/86084_1.jpg?sw=734&sh=734&sm=fit",
    "https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfa397b6a/images/hi-res/96124_1.jpg?sw=2000&sh=2000&sm=fit",
    "https://pics.drugstore.com/prodimg/605314/900.jpg"
    ]
    
    let embed = new MessageEmbed()
        .setTitle("Here is a random squishmallow to make you smile!")
        .setImage(images[Math.floor(Math.random() * images.length)])
    
    interaction.reply({ embeds: [embed] });
  
};
  }
)
client.login('bot token');
