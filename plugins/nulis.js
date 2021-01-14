let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let fontPath = 'src/font/Zahraaa.ttf'
let handler = async(m, { conn, text }) => {
    let inputPath = 'src/kertas/magernulis1.jpg'
    let outputPath = 'tmp/hasil.jpg'
        // let teks = args.join ` `
    let [teks, diNama, hari, waktu] = text.split `|`

    let tgl = new Date().toLocaleDateString()

    if (!diNama) {
        diNama = conn.getName(m.sender)
    }
    if (!teks) return conn.reply(m.chat, 'Silahkan masukan parameter Teks', m)

    var months = ['- 1 -', '- 2 -', '- 3 -', '- 4 -', '- 5 -', '- 6 -', '- 7 -', '- 8 -', '- 9 -', '- 10 -', '- 11 -', '- 12 -'];
    var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var thisDay = date.getDay(),
        thisDay = myDays[thisDay];
    var yy = date.getYear();
    var year = (yy < 1000) ? yy + 1900 : yy;
    if (!waktu) {
        waktu = (day + ' ' + months[month] + ' ' + year)
    }

    if (!hari) {
        hari = (thisDay)
    }
    conn.reply(m.chat, util.format({ fontPath, inputPath, outputPath, diNama, waktu, hari, teks }), m)
    spawn('convert', [
            inputPath,
            '-font',
            fontPath,
            '-size',
            '700x960',
            '-pointsize',
            '20',
            '-interline-spacing',
            '1',
            '-annotate',
            '+806+78',
            hari,
            '-font',
            './font/Zahraaa.ttf',
            '-size',
            '700x960',
            '-pointsize',
            '18',
            '-interline-spacing',
            '1',
            '-annotate',
            '+806+102',
            waktu,
            '-font',
            './font/Zahraaa.ttf',
            '-size',
            '700x960',
            '-pointsize',
            '18',
            '-interline-spacing',
            '1',
            '-annotate',
            '+360+100',
            diNama,
            '-font',
            './font/Zahraaa.ttf',
            '-size',
            '700x960',
            '-pointsize',
            '18',
            '-interline-spacing',
            '1',
            '-annotate',
            '+360+120',
            ' ',
            '-font',
            './font/Zahraaa.ttf',
            '-size',
            '700x960',
            '-pointsize',
            '20',
            '-interline-spacing',
            '-7.5',
            '-annotate',
            '+344+142',
            teks,
            outputPath
        ])
        .on('error', e => conn.reply(m.chat, util.format(e), m))
        .on('exit', () => {
            conn.sendFile(m.chat, outputPath, 'nulis.jpg', 'Nih bro')
        })
}
handler.help = ['n'].map(v => v + 'ulis <teks>|<nama (opsional)>')
handler.tags = ['tools']
handler.command = /^nulis$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler