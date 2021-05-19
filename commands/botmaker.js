const testBot = require("discord.js");

module.exports.run = async(client, message, arguments) => {

    return message.channel.send("Dagan/De Maestro heeft mij gemaakt.");

}

module.exports.help = {
    name: "botmaker"
}