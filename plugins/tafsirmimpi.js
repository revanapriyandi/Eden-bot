const axios = require('axios')

let handler = async(m, { conn, text }) => {
    new Promise((reject) => {
        if (!text) return conn.reply(m.chat, 'Namanya siapa ?', m)

        axios.get(`https://arugaz.my.id/api/primbon/tafsirmimpi?mimpi=` + text)
            .then((res) => {
                conn.reply(m.chat, res.data.result.hasil, m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.help = ['tafsirmimpi <mimpi>']
handler.tags = ['primbon']
handler.command = /^tafsirmimpi$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler