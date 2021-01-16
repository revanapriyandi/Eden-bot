const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'Masukkan judul filmnya yang mau dicari !\n\nContoh penggunaan: ' + usedPrefix + 'filmapik lucifer', m)
    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.my.id/api/media/filmapik/search?query=` + encodeURIComponent(text))
            .then((res) => {
                this.data = res.data.result;
                this.data.forEach(function(x) {
                    conn.sendFile(m.chat, x.thumb, 'text', `➸ *Title* : ${x.title}\n\n➸ *Quality* : ${x.quality}\n\n➸ *Rating* : ${x.rating}\n\n➸ *Link* : ${x.link}`, m)
                })

            })
            .catch(reject)
    })

}

handler.help = ['filmapik', 'fapik'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^(filmapik|fapik)$/i
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