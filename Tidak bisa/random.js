const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `đ° -----[ *RANDOMS MENU* ]----- đ°
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
â â„ *${prefix}nekonime*
â â„ *${prefix}wibu*
â â„ *${prefix}neko*
â â„ *${prefix}husbu*
â â„ *${prefix}kpop*
â â„ *${prefix}anjing*
â â„ *${prefix}pokemon*
â â„ *${prefix}bokep*
â â„ *${prefix}darkjokes*
â â„ *${prefix}meme*
â â„ *${prefix}nsfwneko*
â
â âââȘă THX ăâȘââ
đ° -----[ *POWERED BY ${ownerName}* ]----- đ°`
}
exports.random = random

