const axios = require('axios')

let handler = async(m, { conn, url }) => {
    if (!url) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)
    conn.reply(m.chat, 'Tunggu bentar ya :)', m)
    new Promise((resolve, reject) => {
        axios.get(`https://api.i-tech.id/tools/shorturl?key=selVHB-QcNIs3-DS6jjp-8BPCH9-IJIlhH&link=` + url)
            .then((res) => {
                // conn.reply(m.chat, `*Link:* ${dl_link} `, m)
                conn.reply(m.chat, res.data.result, m)

            })
            .catch(reject)
    })

}

handler.help = ['shorturl <url>']
handler.tags = ['tools']
handler.command = /^shorturl$/i
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