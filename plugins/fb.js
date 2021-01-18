const axios = require('axios')

let handler = async(m, { conn, text }) => {
    let [link, resolusi] = text.split `|`
    if (!link) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)

    if (!resolusi) return conn.reply(m.chat, 'Harap memasukkan resolusi hd/sd !', m)

    conn.reply(m.chat, 'Tunggu bentar ya :), tergantung durasinya om :)', m)
    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.my.id/api/media/facebook?url=` + link)
            .then((res) => {
                if (resolusi == 'hd') {
                    dl_link = res.data.result.linkHD
                } else {
                    dl_link = res.data.result.linkSD
                }
                // conn.reply(m.chat, `*Link:* ${dl_link} `, m)
                conn.sendFile(m.chat, dl_link, 'video.mp4', `Nih om :3\n\n\n*Link:* ${dl_link}`, m)

            })
            .catch(reject)
    })

}

handler.help = ['fb <url>|<hd/sd>']
handler.tags = ['downloader']
handler.command = /^fb$/i
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