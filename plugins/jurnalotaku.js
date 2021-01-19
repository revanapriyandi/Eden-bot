const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'Masukkan yang mau dicari !\n\nContoh penggunaan: ' + usedPrefix + 'jotaku tensura', m)
    new Promise((resolve, reject) => {
        axios.get(`https://api.i-tech.id/anim/otaku?key=selVHB-QcNIs3-DS6jjp-8BPCH9-IJIlhH&type=search&query=` + encodeURIComponent(text))
            .then((res) => {
                this.data = res.data.result;
                this.data.forEach(function(x) {
                    conn.sendFile(m.chat, x.img, 'text', `➸ *Title* : ${x.title}\n\n➸ *Kategori* : ${x.category}\n\n➸ *Date* : ${x.date}\n\n➸ *Link* : ${x.link}`, m)
                })

            })
            .catch(reject)
    })

}

handler.help = ['jurnalotaku', 'jotaku'].map(v => v + ' <search>')
handler.tags = ['internet']
handler.command = /^(jurnalotaku|jotaku|\?)$/i
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