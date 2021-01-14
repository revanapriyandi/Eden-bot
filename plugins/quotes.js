const axios = require('axios')

let handler = async(m, { conn }) => {
    new Promise((reject) => {
        axios.get(`https://mhankbarbar.tech/api/randomquotes`)
            .then((res) => {
                const text = `${res.data.quotes}\n\n\Author: ${res.data.author}`
                conn.reply(m.chat, text, m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.help = ['quotes']
handler.tags = ['random']
handler.command = /^(quotes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler