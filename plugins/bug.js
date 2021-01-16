let handler = async(m, { conn, text }) => {
    const pesan = text
    if (pesan.length > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.participant
    const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
    var options = {
        text: teks1,
        contextInfo: { mentionedJid: [nomor] },
    }
    conn.sendMessage('6281261865875@s.whatsapp.net', options, text, { quoted: m })
    conn.reply(m.chat, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.', m)
}
handler.help = ['bug <laporan>']
handler.tags = ['info']
handler.command = /^bug?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler