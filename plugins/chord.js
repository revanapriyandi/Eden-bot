let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix: _p }) => {
    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'chord perfect', m)
    fetch('https://alfians-api.herokuapp.com/api/chord?q=' + text)
        .then(res => res.json())
        .then(body => {
            conn.reply(m.chat, body.result, m)
        })
        .catch(() => {
            conn.reply(m.chat, 'Ada yang Error!', m)
        })

}

handler.help = ['chord'].map(v => v + ' <search>')
handler.tags = ['internet']
handler.command = /^(chord)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler