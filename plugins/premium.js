let handler = async(m, { conn }) => {
    conn.reply(m.chat, 'Untuk menjadi member premium silahkan hubungi owner ', m)
}
handler.help = ['premium']
handler.tags = ['info']
handler.command = /^(premium)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler