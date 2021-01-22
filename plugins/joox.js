const axios = require('axios')
const { MessageType } = require('@adiwajshing/baileys')
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'Masukkan judul lagi !\n\nContoh penggunaan: ' + usedPrefix + 'joox perfect', m)
    axios.get(`https://mnazria.herokuapp.com/api/jooxnich?search=` + text)
        .then((res) => {
            conn.reply(m.chat, 'Proses ini membutuhkan beberapa waktu !', m)
            conn.sendFile(m.chat, res.data.result.mp3Url, res.data.result.msong + '.mp3', `
            *Title:* ${res.data.result.msong}
            *Filesize:* ${res.data.result.size320}
            `.trim(), m, false, { asDocument: true })
        })
}
handler.help = ['joox', 'play'].map(v => v + ' <judul>')
handler.tags = ['music']
handler.command = /^(joox|play)$/i
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