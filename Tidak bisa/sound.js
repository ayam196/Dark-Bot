const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `đ° -----[ *SOUNDS MENU* ]----- đ°
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
â â„ *${prefix}dj1* <Maintace>
â â„ *${prefix}iri*
â â„ *${prefix}pale*
â â„ *${prefix}sound1*
â â„ *${prefix}sound2*
â â„ *${prefix}sound3*
â â„ *${prefix}sound4*
â â„ *${prefix}sound5*
â â„ *${prefix}sound6*
â â„ *${prefix}sound7*
â â„ *${prefix}sound8*
â â„ *${prefix}sound9*
â â„ *${prefix}sound10*
â
â âââȘă THX ăâȘââ
đ° -----[ *POWERED BY ${ownerName}* ]----- đ°`
}
exports.sound = sound
