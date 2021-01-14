const axios = require('axios')

let handler = async(m, { conn }) => {
    new Promise((reject) => {
        axios.get(`https://arugaz.my.id/api/random/text/faktaunik`)
            .then((res) => {
                const text = `${res.data.result}`
                conn.reply(m.chat, text, m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.help = ['faktaunik']
handler.tags = ['random']
handler.command = /^(faktaunik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler