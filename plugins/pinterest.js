let fetch = require('node-fetch')
const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
    axios.get(`https://api.i-tech.id/dl/pin?key=SO0MQt-hr6gOy-p3yMNu-PmmCI4-LeIw0Z&link=` + encodeURIComponent(text))
        .then((res) => {
            if (res.data.pesan) return conn.reply(m.chat, res.data.pesan, m)
                // console.log(res.data)

            conn.sendFile(m.chat, res.data.thumbnail, 'text', `➸ *Title* : ${res.data.title}\n\n➸ *Domain* : ${res.data.domain}`, m)
                // conn.reply(m.chat, `*Link:* ${dl_link} `, m)

        })
        .catch(() => {
            conn.reply(m.chat, 'Ada yang Error!', m)
        })
}
handler.help = ['pinterest <url>', 'ptrest <url>']
handler.tags = ['downloader']
handler.command = /^(pinterest|ptrest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.limit = true

module.exports = handler