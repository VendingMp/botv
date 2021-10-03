let handler = async m => m.reply(`
╭─「 Donasi」
│ • Dana [081383717473]
| • Gopay [081383717473]
│ • Telkomsel [081383717473]
╰────

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
