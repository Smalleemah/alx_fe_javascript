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

// Function to display a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const quoteDisplay = document.getElementById("quoteDisplay");

  // Requirement: Use innerHTML to update the DOM
  quoteDisplay.innerHTML = `
    <p><strong>"${randomQuote.text}"</strong></p>
    <p><em>Category: ${randomQuote.category}</em></p>
  `;
}

// Requirement: createAddQuoteForm function
function createAddQuoteForm() {
  const formContainer = document.createElement("div");

  // Create Quote Text Input
  const inputText = document.createElement("input");
  inputText.id = "newQuoteText";
  inputText.type = "text";
  inputText.placeholder = "Enter a new quote";

  // Create Category Input
  const inputCategory = document.createElement("input");
  inputCategory.id = "newQuoteCategory";
  inputCategory.type = "text";
  inputCategory.placeholder = "Enter quote category";

  // Create Add Button
  const addButton = document.createElement("button");
  addButton.textContent = "Add Quote";

  // Link the button to the addQuote function
  addButton.onclick = function () {
    addQuote();
  };

  // Append elements to the container
  formContainer.appendChild(inputText);
  formContainer.appendChild(inputCategory);
  formContainer.appendChild(addButton);

  // Append the whole form to the body
  document.body.appendChild(formContainer);
}

// Function to add a new quote to the array
function addQuote() {
  const text = document.getElementById("newQuoteText").value;
  const category = document.getElementById("newQuoteCategory").value;

  if (text && category) {
    quotes.push({ text: text, category: category });
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
    alert("Quote added!");
  } else {
    alert("Please fill in both fields.");
  }
}

// Event Listeners & Initialization
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Call this to generate the form when the page loads
createAddQuoteForm();
