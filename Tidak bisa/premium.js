const vip = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
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
╠➥ *${prefix}premiumlist*
╠➥ *${prefix}randomhentong*
╠➥ *${prefix}bokep*
╠➥ *${prefix}blowjob*
╠➥ *${prefix}nulis1*
╠➥ *${prefix}nulis2*
╠➥ *${prefix}play*
╠➥ *${prefix}mutual*
╠➥ *${prefix}next*
╠➥ *${prefix}nangis*
╠➥ *${prefix}cium*
╠➥ *${prefix}peluk*
╠➥ *${prefix}tomp3*
╠➥ *${prefix}slowmo*
╠➥ *${prefix}ngebass*
╠➥ *${prefix}gemok*
╠➥ *${prefix}tupai*
╠➥ *${prefix}hidetag5*
╠➥ *${prefix}hidetag10*
╠➥ *${prefix}moddroid*
╠➥ *${prefix}happymod*
║
╠══✪〘 THX 〙✪══
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.vip = vip
