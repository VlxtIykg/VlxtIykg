const fs = require('fs');

function getRandomQuote() {
  const quotes = require('./dist/quotes.json');
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateReadme() {
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

  const readmeContent = fs.readFileSync('README.md', 'utf8');
  const quoteStart = readmeContent.indexOf('<!-- BEGIN: Do not modify the quote below -->');
  const quoteEnd = readmeContent.indexOf('<!-- END: Do not modify the quote above -->') + '<!-- END: Do not modify the quote above -->'.length;
  const newReadmeContent = readmeContent.slice(0, quoteStart) + newQuoteSection + readmeContent.slice(quoteEnd);

  fs.writeFileSync('README.md', newReadmeContent);
}

updateReadme();