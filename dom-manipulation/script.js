function addQuote() {
  const text = document.getElementById("newQuoteText").value;
  const category = document.getElementById("newQuoteCategory").value;

  if (text && category) {
    quotes.push({ text, category });

    // Call the function that contains localStorage.setItem
    saveQuotes();

    alert("Quote saved to local storage!");
  }
}
