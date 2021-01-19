let fetch = require('node-fetch')

let handler = async(m, { conn, args }) => {
    fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
        .then(res => res.text())
        .then(body => {
            let splitmotivasi = body.split('\n')
            let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
            conn.reply(m.chat, randommotivasi, m)
        })
        .catch(() => {
            conn.reply(m.chat, 'Ada yang Error!', m)
        })
}
handler.help = ['dare']
handler.tags = ['game']
handler.command = /^dare$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler