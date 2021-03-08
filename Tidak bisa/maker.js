const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *MAKER MENU* ]----- 🔰
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
╠➥ *${prefix}hartatahta*
╠➥ *${prefix}ninjalogo*
╠➥ *${prefix}halloweentext*
╠➥ *${prefix}pornhub*
╠➥ *${prefix}glitchtext*
╠➥ *${prefix}blackpink*
╠➥ *${prefix}cloudtext*
╠➥ *${prefix}neontext*
╠➥ *${prefix}textlight*
║
╠══✪〘 THX 〙✪══
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.maker = maker

