let fetch = require('node-fetch')

let handler = async(m, { conn, args }) => {
    fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
        .then(res => res.text())
        .then(body => {
            let splitmotivasi = body.split('\n')
            let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
            conn.sendFile(m.chat, randommotivasi, '', '', m)
        })
        .catch(() => {
            conn.reply(m.chat, 'Ada yang Error!', m)
        })
}
handler.help = ['siapacitanya', 'citacita']
handler.tags = ['random']
handler.command = /^(citacita|siapacitacitanya)$/i
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