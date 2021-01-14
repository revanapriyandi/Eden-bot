let handler = async(m, { conn, text }) => {
    let [l, r] = text.split `|`

    if (!l) return conn.reply(m.chat, 'Silahkan masukan parameter text1', m)
    if (!r) return conn.reply(m.chat, 'Silahkan masukan parameter text2', m)

    if (l > 10) return conn.reply(m.chat, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)
    if (r > 10) return conn.reply(m.chat, '*Teks2 Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)

    let link = 'https://arugaz.my.id/api/textpro/pornhub?text1=' + l + '&text2=' + r

    conn.sendFile(m.chat, link, 'Nih bro')
}
handler.help = ['logopornhub', 'logoporn'].map(v => v + ' <teks>|<teks>')
handler.tags = ['tools']
handler.command = /^(logopornhub|logoporn)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler