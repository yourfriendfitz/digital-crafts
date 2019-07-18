const [
  allQuotesButton,
  appleQuotesButton,
  amazonQuotesButton,
  alibabaQuotesButton,
  googleQuotesButton,
  facebookQuotesButton,
  quotesDiv
] = [
  document.getElementById("allQuotes"),
  document.getElementById("appleQuotes"),
  document.getElementById("amazonQuotes"),
  document.getElementById("alibabaQuotes"),
  document.getElementById("googleQuotes"),
  document.getElementById("facebookQuotes"),
  document.getElementById("quotes")
];

const quoteElement = quote => {
  return `<div class="quote" id="${quote.name.toLowerCase()}"><h1>${
    quote.name
  }</h1><h3>${quote.price}</h3></div>`;
};

// In order to get the quotes you can call the getStockQuote function as shown below:

// getStockQuote(pass in the symbol of the stock)

// available symbols are below:
// APLE
// AMAZ
// ALBAB
// GOOG
// FB

const symbolsArray = ["APLE", "AMAZ", "ALBAB", "GOOG", "FB"];

let quotes = {
  APLE: { name: "Apple", price: 0 },
  AMAZ: { name: "Amazon", price: 0 },
  ALBAB: { name: "Ali Baba", price: 0 },
  GOOG: { name: "Google", price: 0 },
  FB: { name: "Facebook", price: 0 }
};

function getStockQuote(symbol) {
  let stock = quotes[symbol];
  stock.price = getRandomInt(100, 500);
  return quotes[symbol];
}

const getStockQuotes = symbolsArray => {
  const currentQuotes = [];
  symbolsArray.forEach(symbol => {
    const quote = getStockQuote(symbol);
    currentQuotes.push(quote);
  });
  return currentQuotes;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hideQuotes = quotesArray => {
  quotesArray.forEach(quote => {
    quote.style.display = "none";
  });
};

const showQuotes = quotesArray => {
  quotesArray.forEach(quote => {
    quote.style.display = "flex";
  });
};

const hideQuote = quote => {
  quote.style.display = "none";
};

const showQuote = quote => {
  quote.style.display = "flex";
};

const displayQuotes = (quotesArray, targetDiv) => {
  quotesArray.forEach(quote => {
    targetDiv.insertAdjacentHTML("beforeend", quoteElement(quote));
  });
};

allQuotesButton.addEventListener("click", () => {
  quotesDiv.innerHTML = "";
  const currentQuotes = getStockQuotes(symbolsArray);
  displayQuotes(currentQuotes, quotesDiv);
});

appleQuotesButton.addEventListener("click", () => {
  quotesDiv.innerHTML = "";
  newQuote = getStockQuote(symbolsArray[0]);
  newQuoteElement = quoteElement(newQuote);
  quotesDiv.innerHTML = newQuoteElement;
});

amazonQuotesButton.addEventListener("click", () => {
  quotesDiv.innerHTML = "";
  newQuote = getStockQuote(symbolsArray[1]);
  newQuoteElement = quoteElement(newQuote);
  quotesDiv.innerHTML = newQuoteElement;
});

alibabaQuotesButton.addEventListener("click", () => {
  quotesDiv.innerHTML = "";
  newQuote = getStockQuote(symbolsArray[2]);
  newQuoteElement = quoteElement(newQuote);
  quotesDiv.innerHTML = newQuoteElement;
});

googleQuotesButton.addEventListener("click", () => {
  quotesDiv.innerHTML = "";
  newQuote = getStockQuote(symbolsArray[3]);
  newQuoteElement = quoteElement(newQuote);
  quotesDiv.innerHTML = newQuoteElement;
});

facebookQuotesButton.addEventListener("click", () => {
  quotesDiv.innerHTML = "";
  newQuote = getStockQuote(symbolsArray[4]);
  newQuoteElement = quoteElement(newQuote);
  quotesDiv.innerHTML = newQuoteElement;
});
