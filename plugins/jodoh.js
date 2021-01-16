const axios = require('axios')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length !== 2) return conn.reply(m.chat, `Untuk mengecek jodoh melalui nama\nketik: ${usedPrefix}cekjodoh nama-kamu nama-pasangan\n\ncontoh: ${usedPrefix}cekjodoh bagas siti\n\nhanya bisa pakai nama panggilan (satu kata)`)
    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.herokuapp.com/api/jodohku?nama=${args[0]}&pasangan=${args[1]}`)
            .then((res) => {
                const textc = `Nama : ${res.data.nama}\nPasangan : ${res.data.pasangan}\nPositif: ${res.data.positif}\nNegatif : ${res.data.negatif}`
                conn.sendFile(m.chat, `${res.data.gambar}`, '', `${textc}`, m)
            })
            .catch((err) => {
                reject(err)
            })
    })

}

handler.help = ['cekjodoh'].map(v => v + ' <query>')
handler.tags = ['primbon']
handler.command = /^(cekjodoh|jodoh)$/i
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