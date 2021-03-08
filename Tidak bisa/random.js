const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *RANDOMS MENU* ]----- 🔰
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
╠➥ *${prefix}nekonime*
╠➥ *${prefix}wibu*
╠➥ *${prefix}neko*
╠➥ *${prefix}husbu*
╠➥ *${prefix}kpop*
╠➥ *${prefix}anjing*
╠➥ *${prefix}pokemon*
╠➥ *${prefix}bokep*
╠➥ *${prefix}darkjokes*
╠➥ *${prefix}meme*
╠➥ *${prefix}nsfwneko*
║
╠══✪〘 THX 〙✪══
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.random = random

