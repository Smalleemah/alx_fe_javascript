const SERVER_URL = "https://jsonplaceholder.typicode.com/posts";

// Function to Sync Quotes to the Server (POST)
async function syncQuotes() {
  try {
    const response = await fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quotes),
    });

    if (response.ok) {
      alert("Quotes synced with server!");
    }
  } catch (error) {
    console.error("Sync failed:", error);
  }
}

// Function to Fetch Quotes from the Server (GET)
async function fetchQuotesFromServer() {
  try {
    const response = await fetch(SERVER_URL);
    const serverQuotes = await response.json();

    // Simulate server providing a list of quotes
    // (JSONPlaceholder returns mock posts, so we map them to our structure)
    return serverQuotes.slice(0, 5).map((post) => ({
      text: post.title,
      category: "Server",
    }));
  } catch (error) {
    console.error("Error fetching from server:", error);
    return [];
  }
}
