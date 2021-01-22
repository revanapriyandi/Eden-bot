const { MessageType } = require('@adiwajshing/baileys')
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')

let handler = async(m, { conn, args }) => {
    const type = Object.keys(m.message)[0]
    const content = JSON.stringify(m.message)
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
    const { sticker } = MessageType
    var seconds = Math.floor(seconds % 60);
    if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
        const media = await conn.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.webp')
        await ffmpeg(`./${media}`)
            .input(media)
            .on('error', function(err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                conn.reply('Sepertinya ada yang error')
            })
            .on('end', function() {
                console.log('Finish')
                conn.sendMessage(m.chat, fs.readFileSync(ran), sticker, { quoted: m })
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
    } else if ((isMedia && m.message.videoMessage.seconds < 11 || isQuotedVideo && m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
        const media = await conn.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.webp')
        conn.reply('Tunggu beberapa saat')
        await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('error', function(err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                conn.reply(m.chat, `❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function() {
                console.log('Finish')
                buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, buff, sticker, { quoted: m })
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
    }
}
handler.help = ['stiker (caption|reply media)', 'stiker <url>']
handler.tags = ['sticker']
handler.command = /^stic?ker$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function getRandom(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}