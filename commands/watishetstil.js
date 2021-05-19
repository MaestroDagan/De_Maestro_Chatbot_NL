const testBot = require("discord.js");

module.exports.run = async(client, message, arguments) => {

    return message.channel.send("Lekker weertje hé.");

}

module.exports.help = {
    name: "watishetstil"
}