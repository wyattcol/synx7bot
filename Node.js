/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDAxMTUyOTU3MDI0MDQzMDE4.DTmErQ.UfF6iaAOesg79bpTXTTseFEmCgs';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
	var words = message.content.split(' ')
	if (words[0] === ':buy') {
		var number1 = words[1]
		console.log(message.author.id)
		console.log(message.author.username)
		username = message.author.username
		id = message.author.id
		//var number2 = words[2]
		//console.log('your number is', number1)
		   //client.sendMessage('you ran the :purchase command')
		message.guild.channels.find("name", "purchaseusers").send("DiscordId: "+ id + " " + "Username: " + username + " " + "RequestedVersion: " + number1);
		message.author.sendMessage("Thank you for sending a purchase request for Synx7!\nYou will be messaged shortly by an owner to do the transaction.")
	}
});

client.on('message', message => {
	if (message.content === ':test')
	{
		message.channel.send('a');
	}
});


// Log our bot in
client.login(token);
