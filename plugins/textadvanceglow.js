const axios = require('axios')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter text', m)

    if (text > 10) return conn.reply(m.chat, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)

    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.my.id/api/textpro/advancedglow?text=` + text)
            .then((res) => {
                conn.sendFile(m.chat, res.data.result.link, 'image ', 'text advancedglow', m)

            })
            .catch(reject)
    })

}
handler.help = ['textadvancedglow', 'advancedglow'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(textadvancedglow|advancedglow)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler