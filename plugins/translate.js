const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix: _p }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'ts id | my name is eden', m)

    let [kode, kalimat] = text.split `|`

    if (!kode) return conn.reply(m.chat, 'Masukkan kode bahasa ', m)
    if (!kalimat) return conn.reply(m.chat, 'Masukkan yang mau di translate', m)

    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.my.id/api/edu/translate?lang=${kode}&text=` + encodeURIComponent(kalimat))
            .then((res) => {
                conn.reply(m.chat, res.data.text, m)
            })
            .catch(reject)
    })
}
handler.help = ['translate <kata>']
handler.tags = ['internet']
handler.command = /^(translate|ts)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler