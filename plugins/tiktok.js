const axios = require('axios')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)
    conn.reply(m.chat, 'Tunggu bentar ya :)', m)
    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.my.id/api/media/tiktok?url=` + text)
            .then((res) => {
                dl_link = res.data.result.mp4direct
                const teks = `➸ *Nama* : ${res.data.result.nameInfo}\n➸ *Info* : ${res.data.result.textInfo}\n➸ *Tanggal Upload* : ${res.data.result.timeInfo}`
                conn.sendFile(m.chat, res.data.result.image, 'image tiktok', teks, m)
                conn.sendFile(m.chat, dl_link, 'video.mp4', `Videonya om :3\n\n\n*Link:* ${dl_link}`, m)

            })
            .catch(reject)
    })

}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^tiktok$/i
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