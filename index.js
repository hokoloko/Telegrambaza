// Import necessary modules
const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather
const token = '7058348107:AAHi1ots6aamj_fYrQhH5MoiaWce4w74Q6M';
const bot = new TelegramBot(token, { polling: true });

// Command: /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to your Telegram Bot! Type /menu to see the menu.');
});

// Command: /menu
bot.onText(/\/menu/, (msg) => {
    const chatId = msg.chat.id;
    const menuOptions = {
        reply_markup: {
            keyboard: [['/hello', '/goodbye']],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    };

    bot.sendMessage(chatId, 'Choose an option:', menuOptions);
});

// Command: /hello
bot.onText(/\/hello/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! 👋');
});

// Command: /goodbye
bot.onText(/\/goodbye/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Goodbye! 👋');
});
