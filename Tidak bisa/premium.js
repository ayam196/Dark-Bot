const vip = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `đ° -----[ *OWNERS MENU* ]----- đ°
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
â â„ *${prefix}premiumlist*
â â„ *${prefix}randomhentong*
â â„ *${prefix}bokep*
â â„ *${prefix}blowjob*
â â„ *${prefix}nulis1*
â â„ *${prefix}nulis2*
â â„ *${prefix}play*
â â„ *${prefix}mutual*
â â„ *${prefix}next*
â â„ *${prefix}nangis*
â â„ *${prefix}cium*
â â„ *${prefix}peluk*
â â„ *${prefix}tomp3*
â â„ *${prefix}slowmo*
â â„ *${prefix}ngebass*
â â„ *${prefix}gemok*
â â„ *${prefix}tupai*
â â„ *${prefix}hidetag5*
â â„ *${prefix}hidetag10*
â â„ *${prefix}moddroid*
â â„ *${prefix}happymod*
â
â âââȘă THX ăâȘââ
đ° -----[ *POWERED BY ${ownerName}* ]----- đ°`
}
exports.vip = vip
