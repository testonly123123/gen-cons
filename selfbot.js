	const discord = require('discord.js.old');
	const client = new discord.Client();
	let condo = "No condo detected!	"
	const prefix = '!'

	client.on('ready', async () => {
	    console.log(`ready`)
	})

	client.on("message", message => {
	  if (message.author.bot) return;
	    if (message.content == "!condo") {
	 	message.author.send("```css\nPossible condo sent.\n If this is banned wait a few minutes to change.```\n"+ condo +"")
		message.react("🥵")
	    }
	});

	client.on("message", message => {
		if(message.author.bot) return;
		const args = message.content.slice(prefix.length).trim().split(' ');
		const command = args.shift().toLowerCase();
		if(message.channel.id === "786820507805679696"){
			if(command === "post"){
				if(!args.length){
					return message.channel.send("Please provide a condo link.")
				}
				let checkURL = "roblox.com/games/60"
				if (message.content.search(checkURL) >= 8){
					let one9 = "786820507805679696"
					client.channels.get(one9).send(""+ args[0] +"")
				}
			}
		}
	})

	client.on("message", message => {
		let reply = ""
		let check3 = "roblox.com/games/60"
		let check4 = "roblox.com/games/59"
		if (message.author.bot) return;	

		if (message.channel.id === "781880694031777802"){ // CALI SERVER
			message.content = message.content.toLowerCase();
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			let sender = "784137705164242974"
			if (message.content.search(check3) >= 8){
				condo = message.content
				let embed = new discord.RichEmbed()
				.setTitle("**Possible condo found!**")
				.setColor(randomColor)
				.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
				.setFooter("Cali Condos | https://discord.gg/TzQ5Dce5Vn")
				client.channels.get(sender).send({ embed: embed })
				message.react("✅")
				message.react("❌")
			}
		}
		if (message.channel.id === "777206202916405278"){ // COMMUNITY SERVER
			message.content = message.content.toLowerCase();
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			let sender = "784137705164242974"
			if (message.content.search(check3) >= 8){
				condo = message.content
				let embed = new discord.RichEmbed()
				.setTitle("**Possible condo found!**")
				.setColor(randomColor)
				.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
				.setFooter("Community Condos | https://discord.gg/TzQ5Dce5Vn")
				client.channels.get(sender).send({ embed: embed })
				message.react("✅")
				message.react("❌")
			}
		}
		if (message.channel.id === "783924733522608179"){ // CASHOUT SERVER
			message.content = message.content.toLowerCase();
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			let sender = "784137705164242974"
			if (message.content.search(check3) >= 8){
				condo = message.content
				let embed = new discord.RichEmbed()
				.setTitle("**Possible condo found!**")
				.setColor(randomColor)
				.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
				.setFooter("CA$HOUT | https://discord.gg/BrsucuvDhu")
				client.channels.get(sender).send({ embed: embed })
				message.react("✅")
				message.react("❌")
			}
		}
		if (message.channel.id === "759244053517697044"){ // THOTCON SERVER
			message.content = message.content.toLowerCase();
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			let sender = "784137705164242974"
			if (message.content.search(check3) >= 8){
				condo = message.content
				let embed = new discord.RichEmbed()
				.setTitle("**Possible condo found!**")
				.setColor(randomColor)
				.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
				.setFooter("Thot Con | discord.gg/thotcon")
				client.channels.get(sender).send({ embed: embed })
				message.react("✅")
				message.react("❌")
			}
		}
		if (message.channel.id === "784196552331624468"){ // CONDO REBORN SERVER
			message.content = message.content.toLowerCase();
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			let sender = "784137705164242974"
			if (message.content.search(check3) >= 8){
				condo = message.content
				let embed = new discord.RichEmbed()
				.setTitle("**Possible condo found!**")
				.setColor(randomColor)
				.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
				.setFooter("Condo Reborn | https://discord.gg/vbNnqVmJdF")
				client.channels.get(sender).send({ embed: embed })
				message.react("✅")
				message.react("❌")
			}
		}
		if (message.channel.id === "783685693896785942"){ // CONDO SERVER
			message.content = message.content.toLowerCase();
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			let sender = "784137705164242974"
			if (message.content.search(check3) >= 8){
				condo = message.content
				let embed = new discord.RichEmbed()
				.setTitle("**Possible condo found!**")
				.setColor(randomColor)
				.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
				.setFooter("Condo | https://discord.gg/mJYkKuXB7X")
				client.channels.get(sender).send({ embed: embed })
				message.react("✅")
				message.react("❌")
			}
		}
		if (message.channel.id === "756223026324045934"){ // PARADISE SERVER
			message.content = message.content.toLowerCase();
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			let sender = "784137705164242974"
			if (message.content.search(check3) >= 8){
				condo = message.content
				let embed = new discord.RichEmbed()
				.setTitle("**Possible condo found!**")
				.setColor(randomColor)
				.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
				.setFooter("Paradise Condos |https://discord.gg/gYQkbAgpdQ")
				client.channels.get(sender).send({ embed: embed })
				message.react("✅")
				message.react("❌")
			}
		}
		if (message.channel.id === "770032561841373194"){ // FUTURE SERVER
			message.content = message.content.toLowerCase();
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			let sender = "784137705164242974"
			if (message.content.search(check3) >= 8){
				condo = message.content
				let embed = new discord.RichEmbed()
				.setTitle("**Possible condo found!**")
				.setColor(randomColor)
				.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
				.setFooter("Future | https://discord.gg/eWPQkQWebF")
				client.channels.get(sender).send({ embed: embed })
				message.react("✅")
				message.react("❌")
			}
		}
		if (message.channel.id === "772365886115282944"){ // MIDNIGHT SOCIETY SERVER
			message.content = message.content.toLowerCase();
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			let sender = "784137705164242974"
			if (message.content.search(check3) >= 8){
				condo = message.content
				let embed = new discord.RichEmbed()
				.setTitle("**Possible condo found!**")
				.setColor(randomColor)
				.setDescription("**Condo:** ("+ message.content +")\n **Thank you xkid#1527 for help!**")
				.setFooter("Midnight Society | https://discord.gg/sdunWEHF")
				client.channels.get(sender).send({ embed: embed })
				message.react("✅")
				message.react("❌")
			}
		}
	})

	client.login(process.env.BOT_TOKEN)
