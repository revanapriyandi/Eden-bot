let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter text', m)

    if (text) return conn.reply(m.chat, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)

    let link = 'https://arugaz.my.id/api/textpro/advancedglow?text=' + text

    conn.sendFile(m.chat, link, 'Nih bro')
}
handler.help = ['textadvancedglow', 'advancedglow'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(textadvancedglow|advancedglow)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler