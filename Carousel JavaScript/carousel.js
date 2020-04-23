var quoteIndex = 1;
quotesGenerator(quoteIndex);

function nextQuote(number) {
  quotesGenerator(quoteIndex += number);
}
function prevQuote(number) {
  quotesGenerator(quoteIndex = number);
}

function quotesGenerator(number) {
  var i;
  var quotes = document.getElementsByClassName("myQuotes");
  if (number > quotes.length) {quoteIndex = 1;}    
  if (number < 1) {quoteIndex = quotes.length;}
  for (i = 0; i < quotes.length; i++) {
      quotes[i].style.display = "none";  
  }
  quotes[quoteIndex-1].style.display = "block";  
}