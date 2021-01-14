const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix: _p }) => {
    if (!text) return conn.reply(m.chat, 'Username yang mau distalk ?', m)
    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.my.id/api/media/stalkig?user=@` + text)
            .then((res) => {
                const teks = `➸ *Nama* : ${res.data.result.full_name}\n➸ *Username* : ${res.data.result.username}\n➸ *Jumlah Followers* : ${res.data.result.edge_followed_by.count}\n➸ *Jumlah Following* : ${res.data.result.edge_follow.count}\n➸ *Jumlah Postingan* : ${res.data.result.edge_owner_to_timeline_media.count}\n➸ *Biodata* : ${res.data.result.biography}`

                conn.sendFile(m.chat, res.data.result.profile_pic_url_hd, 'Stalk Ig', teks, m)

            })
            .catch(reject)
    })

}

handler.help = ['stalkig', 'igstalk'].map(v => v + ' <username>')
handler.tags = ['internet']
handler.command = /^(stalkig|igstalk|\?)$/i
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