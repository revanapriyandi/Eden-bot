const axios = require('axios')

let handler = async(m, { conn, text }) => {
    new Promise((reject) => {
        if (!text) return conn.reply(m.chat, 'Namanya siapa ?', m)

        axios.get(`https://arugaz.my.id/api/primbon/artinama?name=` + text)
            .then((res) => {
                // console.log(res.data.result)
                const teks = `*Arti * ${res.data.result.arti}\n\n\*Deskripsi:* ${res.data.result.desc}`
                conn.reply(m.chat, teks, m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.help = ['artinama <nama>']
handler.tags = ['primbon']
handler.command = /^artinama$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler