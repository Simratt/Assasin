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
const token = 'NjY4MzE0MjQ5ODE4NDA2OTIz.XiRRjA.arLeHVLb1nilwSf72cwlHKik2bc';
const prefix = '~';

bot.on('ready', ()=>{
    console.log('Ready for deployment!');
})

bot.on('message', message=>{
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
        case "start":
            var players_list = [];
            try {
                message.guild.members.forEach(member => {
                    var player = {
                        name: member.name,
                        id: generateId(),
                        statue: true
                    }
                    member.send("Welcome to the game, this is your ID: ".concat(player.id))
                    players_list.push(player)
                })
            } catch (e) {
                console.log(e);
            }
        break;
        case "help":
            message.channel.send("Help is on the way")
        break;
        case "rules":
            message.channel.send("The Rules of Assassin are simple \n -You will recieve a target tha you must eliminate \n - You are only allowd to take out your own target, killing anyone else will result in you getting eliminated\n- Once you have achieved your objective, you will be rewarded, and you will recieve a new target \n- Last assassin remaining will win the game")
        break;
        case 'admin_quit':
                try {
                    message.guild.members.forEach(member => {
                        member.send("Game Over, Thanks for playing")
                    })
                } catch (e) {
                    console.log(e);
                }
    
        console.log('game over');
    }
    app.get('/start', game_start);
    function game_start(request, response){
        response.send(players_list);
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
