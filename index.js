const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = '549252054:AAFjArJ3GRLyODNLSBvSHIesloGGvT3EcGA'

console.log('Bot has been started ....')

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
})

bot.on('message', msg => {

  const html = `
<strong>Hello, ${msg.from.first_name}</strong>
<i>Test message</i>
<pre>${debug(msg)}</pre>
  `

  bot.sendMessage(msg.chat.id, html, {
    parse_mode: 'HTML'
  })
})
