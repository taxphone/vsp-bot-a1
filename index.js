const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '549252054:AAFjArJ3GRLyODNLSBvSHIesloGGvT3EcGA'

const bot = new TelegramBot(TOKEN, {
  polling: true
})

bot.on('message', (msg) => {
  console.log(msg)
  bot.sendMessage(msg.chat.id, 'Здравствуй, ' + msg.from.first_name 'рад видеть вас у нас в боте')
})