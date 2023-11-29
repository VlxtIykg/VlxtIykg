const fs = require('fs');
const fetch = require('node-fetch');


function getRandomQuote() {
  const quotes = require('./dist/quotes.json');
  return quotes[Math.floor(Math.random() * quotes.length)];
}

async function getReadmeContent() {
  const response = await fetch('https://raw.githubusercontent.com/VlxtIykg/VlxtIykg/main/README.md');
  const text = await response.text();
  return text;
}

async function updateReadme() {
  const quote = getRandomQuote();
	const quoteText = quote[0];
	const quoteAuthor = quote[1];
	console.log(quote)
  const newQuoteSection = `<!-- BEGIN: Do not modify the quote below -->
<div align="center">

<h2> ˏˋ♥̩͙♥̩̩̥͙♥̩̥̩ ⑅⋆ ˚｡⋆୨୧˚༶•┈┈୨♡୧┈┈•༶˚୨୧⋆｡˚ ⋆⑅ ♥̩̥̩♥̩̩̥͙♥̩͙ˊˎ</h2>
<h2>Quote of the day</h2>
<hr>

<pre><code>> ${quoteText} <
﹌﹌﹌﹌\⎯⎯ ୨ ୧ ⎯⎯/﹌﹌﹌﹌
By ${quoteAuthor}
﹀﹀﹀﹀♡.﹀﹀.♡﹀﹀﹀﹀
</code></pre>
<hr>
</div>
<!-- END: Do not modify the quote above -->`;

  const readmeContent = await getReadmeContent();
  const quoteStart = readmeContent.indexOf('<!-- BEGIN: Do not modify the quote below -->');
  const quoteEnd = readmeContent.indexOf('<!-- END: Do not modify the quote above -->') + '<!-- END: Do not modify the quote above -->'.length;
  const newReadmeContent = readmeContent.slice(0, quoteStart) + newQuoteSection + readmeContent.slice(quoteEnd);

  fs.writeFileSync('README.md', newReadmeContent);
}

updateReadme();