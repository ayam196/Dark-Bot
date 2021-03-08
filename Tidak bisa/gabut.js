const gabut  = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GABUZ MENU* ]----- 🔰
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
╠➥ *${prefix}apakah*
╠➥ *${prefix}bisakah*
╠➥ *${prefix}kapankah*
╠➥ *${prefix}hobby*
╠➥ *${prefix}rate*
╠➥ *${prefix}cekbapak*
╠➥ *${prefix}seberapagay*
╠➥ *${prefix}truth*
╠➥ *${prefix}dare*
╠➥ *${prefix}tebakin*
╠➥ *${prefix}timer*
╠➥ *${prefix}simi*
║
╠══✪〘 THX 〙✪══
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.gabut = gabut
