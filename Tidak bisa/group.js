const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `ð° -----[ *GROUPS MENU* ]----- ð°
Hallo, ${pushname} ð
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
ââââªã INFORMATION ãâªââ
â
â â¥ NAMA : ${pushname}
â â¥ LEVEL : ${getLevelingLevel(sender)}
â â¥ USER ${botName} : ${_registered.length}
â âââªã BINGUNG ãâªââ
â
â â¥ Berikut adalah fitur yang ada pada bot ini!â¨
â â¥ Jika tidak paham ketik *${prefix}bingungcok*
â
â âââªã LIST COMMANDS ãâªââ
â
â â¥ *${prefix}welcome* ã1/0ã
â â¥ *${prefix}leveling* ã1/0ã
â â¥ *${prefix}simih* ã1/0ã
â â¥ *${prefix}nsfw* ã1/0ã
â â¥ *${prefix}antilinkgrup* ã1/0ã
â â¥ *${prefix}grup* ãbuka/tutupã
â â¥ *${prefix}add* <@tag>
â â¥ *${prefix}kick* <@tag>
â â¥ *${prefix}hedsot* <@tag>
â â¥ *${prefix}linkgrup*
â â¥ *${prefix}promote* <@tag>
â â¥ *${prefix} demote* <@tag>
â â¥ *${prefix}setname*
â â¥ *${prefix}setdesc*
â â¥ *${prefix}leave*
â â¥ *${prefix}tagall*
â â¥ *${prefix}admin*
â â¥ *${prefix}level*
â â¥ *${prefix}fitnah*
â â¥ *${prefix}hidetag*
â
â âââªã THX ãâªââ
ð° -----[ *POWERED BY ${ownerName}* ]----- ð°`
}
exports.groupm = groupm

