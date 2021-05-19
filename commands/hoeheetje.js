const testBot = require("discord.js");

module.exports.run = async(client, message, arguments) => {

    return message.channel.send("Ik heet De Maestro Chatbot NL.");

}

module.exports.help = {
    name: "hoeheetje"
}