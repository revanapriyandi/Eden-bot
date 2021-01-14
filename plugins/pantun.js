let fetch = require('node-fetch')

let handler = async(m, { conn }) => {
    fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
        .then(res => res.text())
        .then(body => {
            let splitpantun = body.split('\n')
            let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
            conn.reply(m.chat, randompantun.replace(/aruga-line/g, "\n"), m)
        })
        .catch(() => {
            conn.reply(m.chat, 'Ada yang Error!', m)
        })
}
handler.help = ['pantun']
handler.tags = ['random']
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler