const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *OWNERS MENU* ]----- 🔰
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
╠➥ *${prefix}bc* <PROMOSI>
╠➥ *${prefix}bcgc* <PROMOSI GC>
╠➥ *${prefix}clearall*
╠➥ *${prefix}block*
╠➥ *${prefix}unblock*
╠➥ *${prefix}clone*
╠➥ *${prefix}setppbot*
╠➥ *${prefix}setreply*
╠➥ *${prefix}setprefix*
╠➥ *${prefix}addprem*
╠➥ *${prefix}dellprem*
╠➥ *${prefix}ban*
╠➥ *${prefix}unban*
╠➥ *${prefix}resetlimit*
╠➥ *${prefix}event* 「1/0」
║
╠══✪〘 THX 〙✪══
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.owb = owb
