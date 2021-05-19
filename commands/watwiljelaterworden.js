const testBot = require("discord.js");

module.exports.run = async(client, message, arguments) => {

    return message.channel.send("Stel dit soort domme vragen niet.");

}

module.exports.help = {
    name: "watwiljelaterworden"
}