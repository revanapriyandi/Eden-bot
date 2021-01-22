const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'wiki indonesia', m)

    axios.get(`https://docs-jojo.herokuapp.com/api/wiki?q=` + text)
        .then((res) => {
            conn.reply(m.chat, res.data.result, m)
        })
        .catch()
}
handler.help = ['wiki <search>']
handler.tags = ['internet']
handler.command = /^(wiki)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler