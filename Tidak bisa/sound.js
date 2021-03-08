const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *SOUNDS MENU* ]----- 🔰
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
╠➥ *${prefix}dj1* <Maintace>
╠➥ *${prefix}iri*
╠➥ *${prefix}pale*
╠➥ *${prefix}sound1*
╠➥ *${prefix}sound2*
╠➥ *${prefix}sound3*
╠➥ *${prefix}sound4*
╠➥ *${prefix}sound5*
╠➥ *${prefix}sound6*
╠➥ *${prefix}sound7*
╠➥ *${prefix}sound8*
╠➥ *${prefix}sound9*
╠➥ *${prefix}sound10*
║
╠══✪〘 THX 〙✪══
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.sound = sound
