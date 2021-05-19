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


//    if(command === `${prefix}doei`){
//        return message.channel.send("Eindelijk ben ik van je af");
//    }

    if(command === `${prefix}watwiljelaterworden`){
        return message.channel.send("Stel dit soort domme vragen niet");
    }

    if(command === `${prefix}hoegaathet`){
        return message.channel.send("Slecht, want jij valt me de hele tijd lastig");
    }

    if(command === `${prefix}watishetstil`){
        return message.channel.send("Lekker weertje hé");
    }
    if(command === `${prefix}hoeheetje`){
        return message.channel.send("Ik heet De Maestro Chatbot NL");
    }

    if(command === `${prefix}hebjeouders`){
        return message.channel.send("Nee niet echt maar ik ben wel door iemand gemaakt type .botmaker om te zien wie het is");
    }

    if(command === `${prefix}botmaker`){
        return message.channel.send("Dagan/De Maestro heeft mij gemaakt");
    }

    if(command === `${prefix}commands`){
        
        var HelpEmbed = new testBot.MessageEmbed()
        .setTitle("Commands")
        .setColor("#ff1cbf")
        .addFields(
            {name: ".hallo", value: "Zeg hallo tegen de bot"}
            ,{name: ".hoeheetje", value: "Vraag de bot om zijn naam"}
            ,{name: ".hebjeouders", value: "Vraag de bot of hij ouders heeft"}
            ,{name: ".botmaker", value: "Vraag de bot wie hem heeft gemaakt"}
            ,{name: ".hoegaathet", value: "Vraag de bot hoe het met hem gaat"}
            ,{name: ".watwiljelaterworden", value: "Vraag de bot wat hij later wil worden"}
            ,{name: ".watishetstil", value: "Laat de bot deze ongemakkelijke situatie stoppen"}
            ,{name: ".doei", value: "Zeg doei tegen de bot"}
            ,{name: ".commands", value: "Krijg dit bericht opnieuw te zien"}
        );
        
        return message.channel.send(HelpEmbed);
    }

});