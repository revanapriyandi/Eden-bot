const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'Masukkan nomor tujuan \n\n Contoh penggunaan : ' + usedPrefix + '8xxxxxxxx \n\n #tidak bertanggung jawab yg di spam marah :) ', m)
    new Promise((resolve, reject) => {
        axios.get(`http://alfians-api.herokuapp.com/api/spamcall?no=${text}`)
            .then((res) => {
                if (res.status == 200) {
                    conn.reply(m.chat, res.logs, m)
                    conn.reply(m.chat, '#tidak bertanggung jawab yg di spam marah :)', m)
                } else {
                    conn.reply(m.chat, res.msg, m)
                }

            })
            .catch(reject)
    })
}
handler.help = ['spamcall <nomor hp>']
handler.tags = ['tools']
handler.command = /^spamcall?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler