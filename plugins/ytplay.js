const axios = require('axios')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${usedPrefix}play judul lagu`, m)
    axios.get(`https://arugaytdl.herokuapp.com/search?q=${args}`)
        .then(async(res) => {
            await ytmp3(`https://youtu.be/` + res.data[0].id)
                .then(async(mus) => {
                    console.log(mus.data)
                    await conn.sendFile(m.chat, `${mus.data.thumb}`, ``, `Lagu ditemukan\n\nJudul: ${mus.data.title}\n\nsedang diproses...`, m)
                    await conn.sendFile(m.chat, `${mus.data.result}`, mus.data.title, mus.data.title, m, false, { asDocument: true })
                        // .catch(() => {
                        //     conn.reply(m.chat, `URL Ini ${args[0]} Sudah pernah di Download sebelumnya. URL akan di Reset setelah 1 Jam/60 Menit`, m)
                        // })
                })
        })

}

handler.help = ['ytplay'].map(v => v + ' <query>')
handler.tags = ['music']
handler.command = /^(ytplay)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

function ytmp3(url) {
    return new Promise((resolve, reject) => {
        axios.get(`https://st4rz.herokuapp.com/api/yta2?url=` + url)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}