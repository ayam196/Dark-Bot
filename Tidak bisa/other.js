const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `đ° -----[ *OTHERS MENU* ]----- đ°
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
â â„ *${prefix}brainly*
â â„ *${prefix}wiki*
â â„ *${prefix}pinterest*
â â„ *${prefix}resepmakanan*
â â„ *${prefix}beritahoax*
â â„ *${prefix}timer*
â â„ *${prefix}nulis1*
â â„ *${prefix}nulis2*
â
â âââȘă THX ăâȘââ
đ° -----[ *POWERED BY ${ownerName}* ]----- đ°`
}
exports.other = other