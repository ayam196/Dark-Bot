const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
â â„ *${prefix}bc* <PROMOSI>
â â„ *${prefix}bcgc* <PROMOSI GC>
â â„ *${prefix}clearall*
â â„ *${prefix}block*
â â„ *${prefix}unblock*
â â„ *${prefix}clone*
â â„ *${prefix}setppbot*
â â„ *${prefix}setreply*
â â„ *${prefix}setprefix*
â â„ *${prefix}addprem*
â â„ *${prefix}dellprem*
â â„ *${prefix}ban*
â â„ *${prefix}unban*
â â„ *${prefix}resetlimit*
â â„ *${prefix}event* ă1/0ă
â
â âââȘă THX ăâȘââ
đ° -----[ *POWERED BY ${ownerName}* ]----- đ°`
}
exports.owb = owb
