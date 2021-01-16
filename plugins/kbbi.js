const axios = require('axios')

let handler = async(m, { conn, text }) => {
    if (text < 1) return reply('Apa yang mau dicari om ?')
    new Promise((resolve, reject) => {
        axios.get(`http://mnazria.herokuapp.com/api/kbbi?search=` + encodeURIComponent(text))
            .then((res) => {
                conn.reply(m.chat, res.data.result, m)

            })
            .catch(reject)
    })
}
handler.help = ['kbbi <search>']
handler.tags = ['internet']
handler.command = /^kbbi?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler