const testBot = require("discord.js");

module.exports.run = async(client, message, arguments) => {

    return message.channel.send("Eindelijk ben ik van je af.");

}

module.exports.help = {
    name: "doei"
}