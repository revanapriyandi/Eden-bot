let handler = async m => m.reply(`
╭─「 Donasi • Gopay • Pulsa 」
│ • Gopay [081275050254]
│ • Telkomsel [081261865875]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler