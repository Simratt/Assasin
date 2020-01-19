const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjY4MzE0MjQ5ODE4NDA2OTIz.XiP_7g.LqRlq_Z9omtoApZ89cIAHVRTGP8';
const prefix = '~';

bot.on('ready', ()=>{
    console.log('Ready for deployment!');
})

bot.on('message', message=>{
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
        case "start":
            try {
                message.channel.members.forEach(member => {
                    member.send("Welcome to the game")
                })
            } catch (e) {
                console.log(e);
            }
        finally{
            console.log("done");
        }
    }
    
})
bot.login(token);
