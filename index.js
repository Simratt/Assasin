const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjY4MzE0MjQ5ODE4NDA2OTIz.XiPnnA.u0pOTpho-12gUknIqlf5f4VtIHs';
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
    }
})
bot.login(token);
