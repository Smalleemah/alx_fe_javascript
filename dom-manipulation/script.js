// Initialize quotes from Local Storage
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

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `<p>"${randomQuote.text}"</p><p><em>${randomQuote.category}</em></p>`;
}

// Requirement: Use addEventListener for the "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

function createAddQuoteForm() {
  const formContainer = document.createElement("div");

  const inputText = document.createElement("input");
  inputText.id = "newQuoteText";
  inputText.placeholder = "Quote text";

  const inputCategory = document.createElement("input");
  inputCategory.id = "newQuoteCategory";
  inputCategory.placeholder = "Category";

  const addButton = document.createElement("button");
  addButton.textContent = "Add Quote";

  // Requirement: Use addEventListener instead of onclick
  addButton.addEventListener("click", function () {
    const text = inputText.value;
    const category = inputCategory.value;
    if (text && category) {
      quotes.push({ text, category });
      saveQuotes();
      inputText.value = "";
      inputCategory.value = "";
      alert("Quote added!");
    }
  });

  formContainer.appendChild(inputText);
  formContainer.appendChild(inputCategory);
  formContainer.appendChild(addButton);
  document.body.appendChild(formContainer);
}

// JSON Export Logic
function exportToJsonFile() {
  const blob = new Blob([JSON.stringify(quotes)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "quotes.json";
  link.click();
}

// Logic for JSON Import
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert("Quotes imported successfully!");
  };
  fileReader.readAsText(event.target.files[0]);
}

// Initializing UI
createAddQuoteForm();
