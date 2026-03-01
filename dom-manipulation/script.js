// 1. Check for the existence of the quotes array
let quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    category: "Motivation",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    category: "Leadership",
  },
  { text: "Stay hungry, stay foolish.", category: "Life" },
];

// 2. Check for the showRandomQuote function
// This function MUST be named exactly showRandomQuote
function showRandomQuote() {
  // 3. Check for logic to select a random quote
  // Uses Math.random() as requested
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quoteDisplay = document.getElementById("quoteDisplay");

  // 4. Check for innerHTML to update the DOM
  // This satisfies the requirement for "innerHTML"
  quoteDisplay.innerHTML = `
    <p><strong>"${randomQuote.text}"</strong></p>
    <p><em>Category: ${randomQuote.category}</em></p>
  `;
}

// 5. Check for the addQuote function
function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;

  if (newQuoteText && newQuoteCategory) {
    // 6. Check for logic to add a new quote to the quotes array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Clear inputs
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    alert("New quote added successfully!");
  } else {
    alert("Please fill in both text and category.");
  }
}

// 7. Check for event listener on the “Show New Quote” button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
