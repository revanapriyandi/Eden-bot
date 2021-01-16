const axios = require('axios')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Untuk mencari suatu kata dari wikipedia\nketik: ${usedPrefix}wiki [kata]`)
    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.herokuapp.com/api/wiki?q=${args}`)
            .then((res) => {
                conn.reply(m.chat, res.data.result, m)
            })
            .catch((err) => {
                conn.reply(m.chat, 'Ada yang error !', m)
            })
    })

}

handler.help = ['wiki'].map(v => v + ' <kata>')
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
handler.exp = 0
handler.limit = false

module.exports = handler