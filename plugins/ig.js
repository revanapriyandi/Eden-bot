const axios = require('axios')
const { json } = require('express')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)
    conn.reply(m.chat, 'Tunggu bentar ya :)', m)
    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.my.id/api/media/ig?url=` + text)
            .then((res) => {
                // conn.sendFile(m.chat, x.thumb, 'text', `➸ *Title* : ${x.title}\n\n➸ *Quality* : ${x.quality}\n\n➸ *Rating* : ${x.rating}\n\n➸ *Link* : ${x.link}`, m)
                conn.sendFile(m.chat, res.data.result.medias[0].url, 'video.mp4', `Nih om :3\n\n\n*Link:* ${res.data.result.medias[0].url}`, m)
                    // conn.reply(m.chat, `*Link:* ${dl_link} `, m)

            })
            .catch(reject)
    })

}

handler.help = ['ig <url image/video>']
handler.tags = ['downloader']
handler.command = /^ig$/i
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