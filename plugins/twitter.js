const axios = require('axios')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)
    conn.reply(m.chat, 'Tunggu bentar ya :)', m)
    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.my.id/api/media/twvid?url=` + text)
            .then((res) => {
                dl_link = res.data.result.videos
                    // conn.reply(m.chat, `*Link:* ${dl_link} `, m)
                conn.sendFile(m.chat, dl_link, 'video.mp4', `Nih om :3\n\n\n*Link:* ${dl_link}`, m)

            })
            .catch(reject)
    })

}

handler.help = ['twitter <url>']
handler.tags = ['downloader']
handler.command = /^twitter$/i
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