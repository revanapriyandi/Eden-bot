let fetch = require('node-fetch')
const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'Masukkan judul lagu !\n\nContoh penggunaan: ' + usedPrefix + 'lirik perfect', m)
    axios.get(`https://api.i-tech.id/tools/lirik?key=SO0MQt-hr6gOy-p3yMNu-PmmCI4-LeIw0Z&query=` + text)
        .then((res) => {
            if (res.data.pesan) return conn.reply(m.chat, res.data.pesan, m)
                // conn.sendFile(m.chat, x.thumb, 'text', `➸ *Title* : ${x.title}\n\n➸ *Quality* : ${x.quality}\n\n➸ *Rating* : ${x.rating}\n\n➸ *Link* : ${x.link}`, m)
            conn.reply(m.chat, res.data.result, m)
                // conn.reply(m.chat, `*Link:* ${dl_link} `, m)

        })
        .catch(() => {
            conn.reply(m.chat, 'Ada yang Error!', m)
        })
}
handler.help = ['lirik <lagu>']
handler.tags = ['music']
handler.command = /^(lirik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler