//serverstuff
console.log('server is starting');

var express = require('express');
var app = express();
var server = app.listen(3000, listening);
function listening(){
    console.log("listening...");
}

app.use(express.static('data'));

//DiscordBot
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjY4MzE0MjQ5ODE4NDA2OTIz.XiYJVQ._Il-j1lxdvrLjTrOSoKmys6gxkM';
const prefix = '.';

bot.on('ready', ()=>{
    console.log('Ready for deployment!');
})

bot.on('message', async message=>{
    let args = message.content.substring(prefix.length).split(" ");
    //members = message.channel.members.values()
    players = []
    switch(args[0]){
        case "send":
            try{
                message.channel.members.forEach(member => {
                    if(member['user']['username'] != 'BAWSE'){
                        member.send('Welcome ' + member['user']['username'] + ' ! The game will begin shortly')
                    }
                })

            }catch (e){
                {}
            } 
        break;
        case "help":
            message.channel.send("Help is on the way")
        break;
        case "rules":
            message.channel.send("The Rules of Assassin are simple \n -You will recieve a target tha you must eliminate \n - You are only allowd to take out your own target, killing anyone else will result in you getting eliminated\n- Once you have achieved your objective, you will be rewarded, and you will recieve a new target \n- Last assassin remaining will win the game")
        break;
        case 'admin_quit':
            try{
                message.channel.members.forEach(member => {
                    if(member['user']['username'] != 'BAWSE'){
                        member.send('Game Over, thanks for playing!')
                    }
                })

            }catch (e){
                {}
            } 
    
        console.log('game over');
    }
    app.get('/start', game_start);
    function game_start(request, response){
        response.send(players_list);
    }
    
})

bot.on('message', async message =>{
    let args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if(command === ".kick") {
        // This command must be limited to mods and admins. In this example we just hardcode the role names.
        // Please read on Array.some() to understand this bit: 
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
        if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
          return message.reply("Sorry, you don't have permissions to use this!");
        
        // Let's first check if we have a member and if we can kick them!
        // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
        // We can also support getting the member by ID, which would be args[0]
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member){
          return message.reply("Please mention a valid member of this server");
        }
        
        if(!member.kickable) {
          return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
        }
        
        // slice(1) removes the first part, which here should be the user mention or ID
        // join(' ') takes all the various parts to make it a single string.
        let reason = args.slice(1).join(' ');
        if(!reason){
            reason = "No reason provided";
        }
        // Now, time for a swift kick in the nuts!
        member.kick(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    
      }
})

function generateId() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

bot.login(token);
