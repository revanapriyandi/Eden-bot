const axios = require('axios')

let handler = async(m, { conn, text }) => {
    new Promise((resolve, reject) => {
        axios.get(`https://api.i-tech.id/tools/pantun?key=selVHB-QcNIs3-DS6jjp-8BPCH9-IJIlhH`)
            .then((res) => {
                if (res.data.status == 'success') {
                    conn.reply(m.chat, res.data.result, m)
                } else {
                    conn.reply(m.chat, res.data.status, m)
                }
            })
            .catch(reject)
    })
}
handler.help = ['pakboi']
handler.tags = ['random']
handler.command = /^pakboi?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler