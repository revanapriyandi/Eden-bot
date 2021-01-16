const BrainlySearch = require('../lib/brainly')

let handler = async(m, { conn, text, usedPrefix }) => {
    if (text.length == 0) return conn.reply(m.chat, `Untuk mencari jawaban dari brainly\n\nPenggunaan: ${usedPrefix}brainly [pertanyaan] [.jumlah]\n\nEx : \n!brainly NKRI .2`, m)
    let tanya = text
    let jum = Number(tanya.split('.')[1]) || 2
    if (jum > 10) return conn.reply(m.chat, 'Max 10!', m)
    if (Number(tanya[tanya.length - 1])) {
        tanya
    }
    conn.reply(m.chat, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, m)
    await BrainlySearch(tanya.split('.')[0], Number(jum), function(res) {
        res.forEach(x => {
            if (x.jawaban.fotoJawaban.length == 0) {
                conn.reply(m.chat, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, m)
                conn.reply(m.chat, 'Selesai ✅,Jangan lupa donasi ya')

            } else {
                conn.reply(m.chat, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, m)
            }

        })
    })

}

handler.help = ['brainly'].map(v => v + ' <pertanyaan>')
handler.tags = ['tools']
handler.command = /^(brainly)$/i
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