const axios = require('axios')

let handler = async(m, { conn }) => {
    new Promise((resolve, reject) => {
        axios.get(`https://api.i-tech.id/anim/neko?key=selVHB-QcNIs3-DS6jjp-8BPCH9-IJIlhH`)
            .then((res) => {
                if (res.data.status == 'success') {
                    conn.sendFile(m.chat, res.data.result, 'neko', 'neko', m)
                } else {
                    conn.sendFile(m.chat, res.data.status, 'neko', 'neko', m)
                }

            })
            .catch(reject)
    })
}
handler.help = ['neko']
handler.tags = ['random']
handler.command = /^(neko)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler