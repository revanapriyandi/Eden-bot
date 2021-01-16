const axios = require('axios')

let handler = async(m, { conn }) => {
    new Promise((resolve, reject) => {
        axios.get(`https://api.i-tech.id/tools/cat?key=selVHB-QcNIs3-DS6jjp-8BPCH9-IJIlhH`)
            .then((res) => {
                conn.sendFile(m.chat, res.result, 'cat', 'cat', m)
            })
            .catch(reject)
    })
}
handler.help = ['kucing']
handler.tags = ['random']
handler.command = /^(cat|kucing)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler