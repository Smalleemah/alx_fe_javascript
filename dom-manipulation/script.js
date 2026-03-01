const SERVER_URL = "https://jsonplaceholder.typicode.com/posts";

// Requirement: periodic data fetching
async function fetchQuotesFromServer() {
  try {
    const response = await fetch(SERVER_URL);
    const serverPosts = await response.json();

    // Convert mock data to our quote format
    const serverQuotes = serverPosts.slice(0, 5).map((post) => ({
      text: post.title,
      category: "Server",
    }));

    // Conflict Resolution: Check for new quotes we don't have locally
    let newQuotesAdded = false;
    serverQuotes.forEach((serverQuote) => {
      const exists = quotes.some(
        (localQuote) => localQuote.text === serverQuote.text,
      );
      if (!exists) {
        quotes.push(serverQuote);
        newQuotesAdded = true;
      }
    });

    if (newQuotesAdded) {
      saveQuotes();
      populateCategories();
      // Requirement: Inform users when data has been updated
      alert("Quotes synced with server!");
    }
  } catch (error) {
    console.error("Error syncing with server:", error);
  }
}

// Requirement: syncQuotes function for POSTing data
async function syncQuotes() {
  try {
    const response = await fetch(SERVER_URL, {
      method: "POST", // Requirement: method must be POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quotes),
    });

    if (response.ok) {
      console.log("Quotes synced with server successfully.");
    }
  } catch (error) {
    console.error("Failed to sync quotes to server.");
  }
}

setInterval(fetchQuotesFromServer, 60000);
