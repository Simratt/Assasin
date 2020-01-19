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
const token = 'NjY4MzE0MjQ5ODE4NDA2OTIz.XiRCJQ.apYqFgm7mAFmwrSOT5rsg2oPhYQ';
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
        finally{
            console.log("done");
        }
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
