const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *OTHERS MENU* ]----- 🔰
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
╠➥ *${prefix}brainly*
╠➥ *${prefix}wiki*
╠➥ *${prefix}pinterest*
╠➥ *${prefix}resepmakanan*
╠➥ *${prefix}beritahoax*
╠➥ *${prefix}timer*
╠➥ *${prefix}nulis1*
╠➥ *${prefix}nulis2*
║
╠══✪〘 THX 〙✪══
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.other = other