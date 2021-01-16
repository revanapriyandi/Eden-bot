const axios = require('axios')

let handler = async(m, { conn, text }) => {
    if (text < 1) return reply(m.chat, 'Masukkan nomor tujuan \n\n Contoh penggunaan : ' + usedPrefix + '8xxxxxxxx \n\n #tidak bertanggung jawab yg di spam marah :) ', m)
    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.herokuapp.com/api/lirik?judul=${text}`)
            .then((res) => {
                conn.reply(m.chat, res.data.msg, m)
                conn.reply(m.chat, '#tidak bertanggung jawab yg di spam marah :)', m)
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