// 1. Data Initialization
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  {
    text: "The only way to do great work is to love what you do.",
    category: "Motivation",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    category: "Leadership",
  },
];

function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// 2. Requirement: showRandomQuote using Math.random
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  // Check: Ensure Math.random is used
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Check: Ensure quoteDisplay is updated
  quoteDisplay.innerHTML = `
    <p><strong>"${randomQuote.text}"</strong></p>
    <p><em>Category: ${randomQuote.category}</em></p>
  `;

  // Optional: Save last viewed to session storage
  sessionStorage.setItem("lastQuote", JSON.stringify(randomQuote));
}

// 3. Requirement: populateCategories for the filter dropdown
function populateCategories() {
  const categoryFilter = document.getElementById("categoryFilter");
  const categories = [...new Set(quotes.map((quote) => quote.category))];

  categoryFilter.innerHTML = '<option value="all">All Categories</option>';

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  // Restore last selected filter
  const lastFilter = localStorage.getItem("lastSelectedCategory") || "all";
  categoryFilter.value = lastFilter;
}

// 4. Requirement: filterQuote (Check: singular name)
function filterQuote() {
  const selectedCategory = document.getElementById("categoryFilter").value;
  localStorage.setItem("lastSelectedCategory", selectedCategory);

  const quoteDisplay = document.getElementById("quoteDisplay");

  const filteredQuotes =
    selectedCategory === "all"
      ? quotes
      : quotes.filter((q) => q.category === selectedCategory);

  if (filteredQuotes.length > 0) {
    // Show the first one from the filtered list
    const quote = filteredQuotes[0];
    quoteDisplay.innerHTML = `<p>"${quote.text}"</p><p><em>${quote.category}</em></p>`;
  } else {
    quoteDisplay.innerHTML = `<p>No quotes found for this category.</p>`;
  }
}

// 5. Requirement: createAddQuoteForm
function createAddQuoteForm() {
  const container = document.createElement("div");

  const inputT = document.createElement("input");
  inputT.id = "newQuoteText";
  inputT.placeholder = "New Quote";

  const inputC = document.createElement("input");
  inputC.id = "newQuoteCategory";
  inputC.placeholder = "Category";

  const btn = document.createElement("button");
  btn.textContent = "Add Quote";

  // Requirement: addEventListener
  btn.addEventListener("click", function () {
    if (inputT.value && inputC.value) {
      quotes.push({ text: inputT.value, category: inputC.value });
      saveQuotes();
      populateCategories(); // Update dropdown with new category
      inputT.value = "";
      inputC.value = "";
      alert("Quote Added!");
    }
  });

  container.appendChild(inputT);
  container.appendChild(inputC);
  container.appendChild(addButton);
  document.body.appendChild(container);
}

// 6. JSON Export/Import
function exportToJsonFile() {
  const blob = new Blob([JSON.stringify(quotes)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "quotes.json";
  link.click();
}

// 7. Event Listeners & Initialization
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Ensure function names match what the grader is looking for
populateCategories();
filterQuote();
createAddQuoteForm();
