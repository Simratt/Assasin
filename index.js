const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjY4MzE0MjQ5ODE4NDA2OTIz.XiPvHA.6WkQMTHDK1A2OVhHuDdWytljaYg';
const prefix = '~';

bot.on('ready', ()=>{
    console.log('Ready for deployment!');
})

bot.on('message', message=>{
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
        case "cash?":
            setTimeout(function msg(){
                message.channel.send('GET YOUR OWN CASH ಠ_ಠ')
            }, 1000);
        break;

        case "start":
            const list = bot.guilds.members; 
            list.members.forEach(member => console.log(member.user.username)); 
        break;
    }
    
})
bot.login(token);
