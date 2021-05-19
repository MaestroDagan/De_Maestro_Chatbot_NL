const testBot = require("discord.js");

module.exports.run = async(client, message, arguments) => {

    return message.channel.send("Laat me met rust");

}

module.exports.help = {
    name: "hallo"
}