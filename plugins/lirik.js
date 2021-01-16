let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
    if (text < 1) return reply('judul lagu nya mana om')
    fetch('https://arugaz.herokuapp.com/api/lirik?judul=${text}')
        .then(res => res.json())
        .then(body => {
            conn.reply(m.chat, body.result, m)
        })
        .catch(() => {
            conn.reply(m.chat, 'Ada yang Error!', m)
        })
}
handler.help = ['lirik <judul lagu>']
handler.tags = ['internet']
handler.command = /^lirik?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler