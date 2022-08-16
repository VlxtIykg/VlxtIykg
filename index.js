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
	const quotes = [
		["> We must understand that sadness is an ocean, and sometimes we drown, while other days we are forced to swim.","By R.M. Drake"],
		["> All alone! Whether you like it or not, alone is something you'll be quite a lot!","By Dr. Seuss"],
		["> From the moment we are born, we begin to die","By Janne Teller"],
		["> I love you, not only for what you are, but for what I am when I am with you.","By Roy Croft"],
		["> Love is when the other person's happiness is more important than your own."," By H. Jackson Brown, Jr"],
		["> Life is the flower for which love is the honey","Ny Victor Hugo"],
		["> It is better to die on your feet than to live on your knees.","By Emiliano Zapato"],
		["> Ours not to reason why, ours but to do and die","By Alfred Lord Tennyson"],
		["> It is easier to find men who will volunteer to die, than to find those who are willing to endure pain and patience.","By Julius Caesar"]
		["> If you prick us do we not bleed? If you tickle us do we not laugh? If you poison us do we not die? And if you wrong us shall we not revenge?","By William Shakespeare"]
	]
	let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
	return randomQuotes;
}
(async () => {
  let quoteOfToday = getQuote();

  const discordBadge = `[<img src="./discordlogo.png" height=${badgeHeight}>](${discordUrl})`;
  const sbsBadge = `[<img src="https://cdn.discordapp.com/icons/652148034448261150/a_1eaa1f0ecc10b7d5272ebcb190d7fda1.webp?size=32" height=${badgeHeight}>](${sbsUrl})`;

  const text = `

	${quoteOfToday[0]}

	${quoteOfToday[1]}\n\n
## About Me\n
[Current] My Favourite emoji: <sub>![FavEmojiHere](https://cdn.discordapp.com/emojis/955415390354276372.webp?size=80)</sub>\n\n
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

  const result = md.render(text);
	const header = `## &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -ˏˋ♥̩͙♥̩̩̥͙♥̩̥̩ ⑅⋆ ˚｡⋆୨୧˚༶•┈┈୨♡୧┈┈•༶˚୨୧⋆｡˚ ⋆⑅ ♥̩̥̩♥̩̩̥͙♥̩͙ˊˎ\n## &nbsp;&nbsp;&nbsp;&nbsp;Quote of the day\n`
	fs.writeFile("README.md", header, function(err) { 
		if(err) return console.log(err); 
		console.log(`${header}\n${result}`);
	})
  fs.appendFile("README.md", result, function (err) {
    if (err) return console.log(err);
    console.log(`${result} > README.md`);
  });
})();
