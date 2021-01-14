const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix: _p }) => {
    if (!text) return conn.reply(m.chat, 'Masukkan resep yang dicari', m)
    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.my.id/api/edu/resep?query=` + encodeURIComponent(text))
            .then((res) => {
                const teks = `➸ *Title* : ${res.data.results.title}\n➸ *Waktu* : ${res.data.results.times}\n➸ *Kesulitan* : ${res.data.results.dificulty}\n➸ *Author* : ${res.data.results.author.user}\n➸ *Published* : ${res.data.results.author.datePublished}\n➸ *Desc* : ${res.data.results.desc}\n➸ *Need Item* : ${res.data.results.needItem.item_name}\n➸ *Bahan* : ${res.data.results.ingredient}\n➸ *Langkah* : ${res.data.results.step}`

                conn.sendFile(m.chat, res.data.results.thumb, 'Resep', teks, m)

            })
            .catch(reject)
    })

}

handler.help = ['resep'].map(v => v + ' <makanan>')
handler.tags = ['internet']
handler.command = /^resep$/i
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