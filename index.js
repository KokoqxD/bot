const botconfig = require("./botconfig.json")
const Discord = require("discord.js")
const prefix = "!"
var nazwabota = "moj-bot"

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    bot.user.setActivity('by Gałwun#5521')
    console.log(`${nazwabota} jest online`)
});

bot.on("message", async message => {
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()
    

if(command == "say"){
    message.delete()


    if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+3))
    else 
    return message.channel.send("Nie posiadasz permisji!")

}
if(command == "embed"){
    var embed = new Discord.RichEmbed()
    .setDescription("Test")
    .setTitle("Test embed")
    .setColor(`#00FFFF`)
    message.channel.send(embed)
    message.delete()
}
if(command == "info"){
    var embed = new Discord.RichEmbed()
    .addField("Nazwa Serwera:", message.guild.name, false)
    .addField("Właściciel serwera:", message.guild.owner.user.tag, false)
    .setColor(`#00ffff`)
    .addField("Role serwera:", message.guild.roles.map(roles => `${roles.name}`).join(`, `), false)
    .setFooter(message.member.user.tag, message.member.user.avatarURL, message.member.user.name)
    .setTimestamp()
    .setThumbnail(message.guild.iconURL)
    message.delete()



    return message.channel.send(embed)
    
}
if(command == "propozycja"){
    var wiadomsc = message.content.slice([prefix.length+10])
    var embed = new Discord.RichEmbed()
    .setAuthor(message.member.user.username, message.member.user.avatarURL)
    .addField("Treść propozycji", wiadomsc, false)
    .setFooter("Jeśli się zgadzasz kliknij emotkę ✔️ | Jeśli się nie zgadzasz klikniej emotkę ❌")

    var kanal = bot.channels.get("637733116743778314")
    kanal.send(embed).then(async embedMessage => {
        await embedMessage.react('\✔️')
        await embedMessage.react('\❌')
        message.delete()
    return
    })
}
if(command == "rzutmonetą"){

    var wynik = (Math.floor(Math.random() * 2) == 0) ? 'Orzeł' : "Reszka"
    var embed = new Discord.RichEmbed()
    .setTitle("Wynik losowania:")
    .setDescription(wynik)
    .setColor("GREEN")
    .setAuthor(message.member.user.username, message.member.user.avatarURL)
    message.delete()
    return message.channel.send(embed)
}
if(command == "losowaliczba"){
    
    var wynik = (Math.floor(Math.random() * 100) == 0)
    var embed = new Discord.RichEmbed()
    .setTitle("Wynik losowania:")
    .setDescription(wynik)
    .setColor("GREEN")
    .setAuthor(message.member.user.username, message.member.user.avatarURL)
    message.delete()
    return message.channel.send(embed)

}



                               

});


bot.login(botconfig.token)