const discord = require('discord.js.old');
const client = new discord.Client();
const cooldown = new Set();

let condo = "No condo found."

client.on('ready', async () => {
    console.log("...")
})

client.on("message", message => {
	let check = "roblox.com/games/64"
	if(message.author.bot) return
	if(message.content === ",condo"){
		if(cooldown.has(message.author.id)){
			message.reply("Cooldown! 10 seconds.")
		} else {
			message.author.send(""+ condo +"")
			setTimeout(() => {
				cooldown.add(message.author.id)
			}, 10000)
		}
	}

	if(message.channel.id === "792776632481218571" || message.channel.id === "800623137447608371" || message.channel.id === "772365886115282944" || message.channel.id === "778482442578296833" || message.channel.id === "792301294005649448" || message.channel.id === "801701275069579324" || message.channel.id === "792899269023105084" || message.channel.id === "807768141811023952" || message.channel.id === "771975903684329513" || message.channel.id === "748510864814112799" || message.channel.id === "777967074269986866" || message.channel.id === "795488305805393923" || message.channel.id === "806202972013985844" || message.channel.id === "804163586896822303"){
		message.content = message.content.toLowerCase();
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		let sender = "809420315230339112"
		condo = message.content
		if(message.content.search(check) >= 8){
			let embed = new discord.RichEmbed()
			.setTitle("**Possible condo found!**")
			.setColor(randomColor)
			.setDescription("**Condo:** [Link]("+ message.content +")")
			client.channels.get(sender).send({ embed: embed })
		}
	}
})

client.login(process.env.BOT_TOKEN)
