const testBot = require("discord.js");

module.exports.run = async(client, message, arguments) => {

    var HelpEmbed = new testBot.MessageEmbed()
        .setTitle("Commands")
        .setColor("#ff1cbf")
        .addFields(
            {name: ".hallo", value: "Zeg hallo tegen de bot."}
            ,{name: ".hoeheetje", value: "Vraag de bot om zijn naam."}
            ,{name: ".hebjeouders", value: "Vraag de bot of hij ouders heeft."}
            ,{name: ".botmaker", value: "Vraag de bot wie hem heeft gemaakt."}
            ,{name: ".hoegaathet", value: "Vraag de bot hoe het met hem gaat."}
            ,{name: ".watwiljelaterworden", value: "Vraag de bot wat hij later wil worden."}
            ,{name: ".watishetstil", value: "Laat de bot deze ongemakkelijke situatie stoppen."}
            ,{name: ".doei", value: "Zeg doei tegen de bot."}
            ,{name: ".help", value: "Word doorverwezen naar dit bericht."}
            ,{name: ".commands", value: "Krijg dit bericht opnieuw te zien."}
        );
        
        return message.channel.send(HelpEmbed);

}

module.exports.help = {
    name: "commands"
}