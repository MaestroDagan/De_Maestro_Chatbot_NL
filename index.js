const testBot = require("discord.js");
const botConfig = require ("./botconfig.json");

const fs = require("fs")

const client = new testBot.Client();
client.login(process.env.token);
client.commands = new testBot.Collection();

fs.readdir("./commands/" , (err, files) => {

    if(err) console.log(err);
    
    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    
    if(jsFiles.lenght <=0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);
        
    })
    
 });

client.on("ready", async () => { 

    console.log(`${client.user.username} is online.`);

    client.user.setActivity(".commands", {type: "WATCHING"});

});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];


    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client, message, arguments)


});