const md = require("markdown-it")({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into \n
  linkify: true, // Autoconvert URL-like text to links
});
const emoji = require("markdown-it-emoji");
const fs = require("fs");

const websiteUrl = "https://kami-x.tk";
const discordUrl = "https://discord.com/";
const sbsUrl = "https://discord.com/invite/sbs";
const badgeHeight = "25";


md.use(emoji);
function getQuote() {
	const quotes = require('./dist/quotes.json')
	return randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
}
(() => {
  let quoteOfToday = getQuote();
  console.log(quoteOfToday);
 const discordBadge = `[<img src="dist/images/discordlogo.png" height=${badgeHeight}>](${discordUrl})`;
 const sbsBadge = `[<img src="https://cdn.discordapp.com/icons/652148034448261150/a_1eaa1f0ecc10b7d5272ebcb190d7fda1.webp?size=32" height=${badgeHeight}>](${sbsUrl})`;

	//Header
	const header = `<h2 align="center"> -ˏˋ♥̩͙♥̩̩̥͙♥̩̥̩ ⑅⋆ ˚｡⋆୨୧˚༶•┈┈୨♡୧┈┈•༶˚୨୧⋆｡˚ ⋆⑅ ♥̩̥̩♥̩̩̥͙♥̩͙ˊˎ</h2>\n<h2 align="center">Quote of the day</h2>\n<div align="center">`
	fs.writeFileSync("README.md", header, function(err) { 
		if(err) return console.log(err); 
		console.log(`Test 1 passed, header printed.`);
	});

		//Quotes
	const quote = `
		${quoteOfToday[0]}
		﹌﹌﹌﹌\\⎯⎯ ୨ ୧ ⎯⎯/﹌﹌﹌﹌
		${quoteOfToday[1]}
		﹀﹀﹀﹀♡.﹀﹀.♡﹀﹀﹀﹀
		`;
		let quotedMsg = md.render(quote);
	fs.appendFileSync("README.md", quotedMsg, function(err) { 
		if(err) return console.log(err); 
		console.log(`Test 2 passed, quotes printed.`);
	})
	fs.appendFileSync("README.md", "</div>", function(err) { 
		if(err) return console.log(err); 
		console.log(`Test 2.5 passed, quotes printed.`)
	})

	//Favourites
	const favourite = `<h2 align="center">About Me</h2>\n\n<!--[Current] My Favourite emoji: <br><sub>![FavEmojiHere](https://cdn.discordapp.com/emojis/955415390354276372.webp?size=80)</sub><br>-->\n[Current] My Favourite programming language: <sub>![JavaScript](dist/images/JavaScript.png) <br>JavaScript</sub><br><br>\n`;
  fs.appendFileSync("README.md", favourite, function (err) {
		if (err) return console.log(err + '\nTest 3 failed, favourite list failed to print. L82 Vlxtiykg/index.js');
    console.log(`Test 3 passed, favourite list printed.`);
  });

	//Songs
	const song = `[Current] My Favourite songs: [Astrid S - Hurt so Good](https://www.youtube.com/watch?v=4fqwVBuunxY)<br>
	<details align="center"><summary>Favourite Song list</summary><br>
	<div align="center">┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄</div><br>
		<details align="center">
			<summary><h5>Sad songs</h5></summary>
				[Queen of broken hearts](https://www.youtube.com/watch?v=sxf3K4Wt4x4)<br>
				[Anxiety - blackbear](https://www.youtube.com/watch?v=w4rq0H8v_Dk)<br>
				[Me and your ghost](https://www.youtube.com/watch?v=HQM_T-ijA_I)<br>
				[SnowFlake](https://www.youtube.com/watch?v=dvLFMZUcqlU)<br>
				[Death bed](https://www.youtube.com/watch?v=jJPMnTXl63E)<br>
		</details>
		<details align="center">
			<summary><h5>Anime rap</h5></summary>
				[Oni - Nezuko Rap](https://www.youtube.com/watch?v=Pt9NMSITIH0)<br>
				[King - Mureuem Rap](https://www.youtube.com/watch?v=AgprfVieuBQ)<br>
				[Forgive Me - Gon Rap](https://www.youtube.com/watch?v=Iz0HjeTMnpA)<br>
				[Roll Call - Koro Sensei Rap](https://www.youtube.com/watch?v=GecfllwjdPY)<br>
				[Running In Blind - Gojo Rap](https://www.youtube.com/watch?v=AqKm5HFWAZw)<br>
			</details>
			<div align="center">┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄</div><br>
	</details>
	`;
	fs.appendFileSync("README.md", song, function (err) {
    if (err) return console.log(err);
    console.log(`Test 4 passed, song list posted`);
  });

  const bot = `
<h3 align="center">Bot</h3>\n
:construction_worker: I’m currently working on a puzzlebot *[Discord bot](https://discord.com/developers/docs/intro#bots-and-apps)* tailored for a specific person!\n
:sparkles: The features are create a puzzle, upload answer, check database and restart command.\n
:card_file_box: The library for puzzlebot uses [Eris](https://abal.moe/Eris/docs/0.17.1/).\n
:memo: There are other discord bot libraries, check them out [here!](https://discord.com/developers/docs/topics/community-resources#libraries) <details><summary>Languages with discord bot api (libraries)</summary>
\`\`\`The languages supported for the libraries are C#, Go, Java, JavaScript, Lua, Php, Python, Ruby, Rust\`\`\`\n</details>
📞📖 How to reach me: Add me on Discord @ Kami#7715 or join discord.gg/sbs and ping me!\n
  💬 Ask me about something on discord, I may answer it!\n
  <p>:eyes: Fun fact: The first computer virus was created in 1986</p>
  <details><summary>More info</summary>Given the moniker Brain, the virus was created by two brothers, Basit and Amjad Farooq Alvi, in Pakistan. According to the siblings, who ran a popular computer store, they created Brain to stop their customers from making copies of their software without permission.

	However, unlike traditional viruses, Brain only contained a hidden copyright message and did not corrupt or delete any of the user\’s files or information.</details>
  ${discordBadge} ${sbsBadge}\n\n
  [:arrow_right: Check out my website](${websiteUrl})\n\n`;
  fs.appendFileSync("README.md", bot, function(err) { if(err) throw err} )
})();
