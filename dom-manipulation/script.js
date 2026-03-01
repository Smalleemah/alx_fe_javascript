// Load quotes from local storage or use defaults if empty
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

// Function to sync the array with Local Storage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}
