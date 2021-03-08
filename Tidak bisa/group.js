const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GROUPS MENU* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
╔══✪〘 INFORMATION 〙✪══
║
╠➥ NAMA : ${pushname}
╠➥ LEVEL : ${getLevelingLevel(sender)}
╠➥ USER ${botName} : ${_registered.length}
╠══✪〘 BINGUNG 〙✪══
║
╠➥ Berikut adalah fitur yang ada pada bot ini!✨
╠➥ Jika tidak paham ketik *${prefix}bingungcok*
║
╠══✪〘 LIST COMMANDS 〙✪══
║
╠➥ *${prefix}welcome* 「1/0」
╠➥ *${prefix}leveling* 「1/0」
╠➥ *${prefix}simih* 「1/0」
╠➥ *${prefix}nsfw* 「1/0」
╠➥ *${prefix}antilinkgrup* 「1/0」
╠➥ *${prefix}grup* 「buka/tutup」
╠➥ *${prefix}add* <@tag>
╠➥ *${prefix}kick* <@tag>
╠➥ *${prefix}hedsot* <@tag>
╠➥ *${prefix}linkgrup*
╠➥ *${prefix}promote* <@tag>
╠➥ *${prefix} demote* <@tag>
╠➥ *${prefix}setname*
╠➥ *${prefix}setdesc*
╠➥ *${prefix}leave*
╠➥ *${prefix}tagall*
╠➥ *${prefix}admin*
╠➥ *${prefix}level*
╠➥ *${prefix}fitnah*
╠➥ *${prefix}hidetag*
║
╠══✪〘 THX 〙✪══
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.groupm = groupm

