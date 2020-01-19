const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjY4MzE0MjQ5ODE4NDA2OTIz.XiPjzA.eL7KFJJGyKcVbxnwrjLL7_LeihA';

bot.on('ready', ()=>{
    console.log('Ready for deployment!');
})

bot.login(token);