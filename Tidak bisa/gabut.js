const gabut  = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `đ° -----[ *GABUZ MENU* ]----- đ°
Hallo, ${pushname} đ
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
ââââȘă INFORMATION ăâȘââ
â
â â„ NAMA : ${pushname}
â â„ LEVEL : ${getLevelingLevel(sender)}
â â„ USER ${botName} : ${_registered.length}
â âââȘă BINGUNG ăâȘââ
â
â â„ Berikut adalah fitur yang ada pada bot ini!âš
â â„ Jika tidak paham ketik *${prefix}bingungcok*
â
â âââȘă LIST COMMANDS ăâȘââ
â
â â„ *${prefix}apakah*
â â„ *${prefix}bisakah*
â â„ *${prefix}kapankah*
â â„ *${prefix}hobby*
â â„ *${prefix}rate*
â â„ *${prefix}cekbapak*
â â„ *${prefix}seberapagay*
â â„ *${prefix}truth*
â â„ *${prefix}dare*
â â„ *${prefix}tebakin*
â â„ *${prefix}timer*
â â„ *${prefix}simi*
â
â âââȘă THX ăâȘââ
đ° -----[ *POWERED BY ${ownerName}* ]----- đ°`
}
exports.gabut = gabut
