const testBot = require("discord.js");

module.exports.run = async(client, message, arguments) => {

    return message.channel.send(".commands");

}

module.exports.help = {
    name: "help"
}