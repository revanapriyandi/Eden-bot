const axios = require('axios')

let handler = async(m, { conn }) => {
    new Promise((resolve, reject) => {
        axios.get(`https://api.i-tech.id/anim/neko?key=selVHB-QcNIs3-DS6jjp-8BPCH9-IJIlhH`)
            .then((res) => {
                conn.sendFile(m.chat, res.result, 'neko', 'neko', m)

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