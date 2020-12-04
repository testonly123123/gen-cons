const discord = require('discord.js.old');
const client = new discord.Client();

client.on('ready', async () => {
    console.log(`ready`)
})

client.on("message", message => {
	let reply = ""
	let check3 = "roblox.com/games/60"
	let check4 = "roblox.com/games/59"
	if (message.author.bot) return;

	if(message.content === "!condo"){
		if(reply){
			message.author.send("***Condo: (FIXING CURRENTLY) \"If the link is banned wait a few minutes.\"***")
		}
	}

	if (message.channel.id === "781880694031777802"){ // CALI SERVER
		message.content = message.content.toLowerCase();
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		let sender = "784137705164242974"
		if (message.content.search(check3) >= 8){
			reply = message.content
			let embed = new discord.RichEmbed()
			.setTitle("**Possible condo found!**")
			.setColor(randomColor)
			.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
			.setFooter("Cali Condos | https://discord.gg/TzQ5Dce5Vn")
			client.channels.get(sender).send({ embed: embed })
		}
		if (message.content.search(check4) >= 8){
			reply = message.content
			let embed = new discord.RichEmbed()
			.setTitle("**Possible condo found!**")
			.setColor(randomColor)
			.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
			.setFooter("Cali Condos | https://discord.gg/TzQ5Dce5Vn")
			client.channels.get(sender).send({ embed: embed })
		}
	}
	if (message.channel.id === "777206202916405278"){ // COMMUNITY SERVER
		message.content = message.content.toLowerCase();
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		let sender = "784137705164242974"
		if (message.content.search(check3) >= 8){
			reply = message.content
			let embed = new discord.RichEmbed()
			.setTitle("**Possible condo found!**")
			.setColor(randomColor)
			.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
			.setFooter("Community Condos | https://discord.gg/TzQ5Dce5Vn")
			client.channels.get(sender).send({ embed: embed })
		}
		if (message.content.search(check4) >= 8){
			reply = message.content
			let embed = new discord.RichEmbed()
			.setTitle("**Possible condo found!**")
			.setColor(randomColor)
			.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
			.setFooter("Community Condos | https://discord.gg/TzQ5Dce5Vn")
			client.channels.get(sender).send({ embed: embed })
		}
	}
	if (message.channel.id === "783924733522608179"){ // CASHOUT SERVER
		message.content = message.content.toLowerCase();
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		let sender = "784137705164242974"
		if (message.content.search(check3) >= 8){
			reply = message.content
			let embed = new discord.RichEmbed()
			.setTitle("**Possible condo found!**")
			.setColor(randomColor)
			.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
			.setFooter("CA$HOUT | https://discord.gg/BrsucuvDhu")
			client.channels.get(sender).send({ embed: embed })
		}
		if (message.content.search(check4) >= 8){
			reply = message.content
			let embed = new discord.RichEmbed()
			.setTitle("**Possible condo found!**")
			.setColor(randomColor)
			.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
			.setFooter("CA$HOUT | https://discord.gg/BrsucuvDhu")
			client.channels.get(sender).send({ embed: embed })
		}
	}
	if (message.channel.id === "759244053517697044"){ // THOTCON SERVER
		message.content = message.content.toLowerCase();
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		let sender = "784137705164242974"
		if (message.content.search(check3) >= 8){
			reply = message.content
			let embed = new discord.RichEmbed()
			.setTitle("**Possible condo found!**")
			.setColor(randomColor)
			.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
			.setFooter("Thot Con | discord.gg/thotcon")
			client.channels.get(sender).send({ embed: embed })
		}
		if (message.content.search(check4) >= 8){
			reply = message.content
			let embed = new discord.RichEmbed()
			.setTitle("**Possible condo found!**")
			.setColor(randomColor)
			.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
			.setFooter("Thot Con | discord.gg/thotcon")
			client.channels.get(sender).send({ embed: embed })
		}
	}
})

client.login(process.env.BOT_TOKEN)
