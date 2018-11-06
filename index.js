const VkBot = require('node-vk-bot-api');

const bot = new VkBot(process.env.token);

console.log(process.env.token);

bot.on((ctx) => {
    ctx.reply('Hello!')
});

bot.startPolling();