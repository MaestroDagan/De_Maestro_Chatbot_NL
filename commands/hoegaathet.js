const testBot = require("discord.js");

module.exports.run = async(client, message, arguments) => {

    return message.channel.send("Slecht, want jij valt me de hele tijd lastig.");

}

module.exports.help = {
    name: "hoegaathet"
}