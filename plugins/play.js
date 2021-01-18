const axios = require('axios')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${usedPrefix}play judul lagu`, m)
    axios.get(`https://arugaytdl.herokuapp.com/search?q=${args}`)
        .then(async(res) => {
            await conn.sendFile(m.chat, `${res.data[0].thumbnail}`, ``, `Lagu ditemukan\n\nJudul: ${res.data[0].title}\nDurasi: ${res.data[0].duration}detik\nUploaded: ${res.data[0].uploadDate}\nView: ${res.data[0].viewCount}\n\nsedang diproses`, m)
            await ytmp3(`https://youtu.be/${res.data[0].id}`)
                .then(async(mus) => {
                    await conn.reply(m.chat, `Sabar lagi dikirim~`)
                    await conn.sendFile(m.chat, `${mus.getAudio}`, '', '', m)
                        // .catch(() => {
                        //     conn.reply(m.chat, `URL Ini ${args[0]} Sudah pernah di Download sebelumnya. URL akan di Reset setelah 1 Jam/60 Menit`, m)
                        // })
                })
        })
        .catch(() => {
            conn.reply(m.chat, 'Ada yang Error!', m)
        })

}

handler.help = ['play'].map(v => v + ' <query>')
handler.tags = ['music']
handler.command = /^(play)$/i
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
        axios.get(`https://arugaz.my.id/api/media/ytmus?url=${url}`)
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}