function populateCategories() {
  const categoryFilter = document.getElementById("categoryFilter");

  // Extract unique categories
  const categories = [...new Set(quotes.map((quote) => quote.category))];

  // Reset the dropdown (keeping the "All" option)
  categoryFilter.innerHTML = '<option value="all">All Categories</option>';

  // Create and append an option for each category
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  // Restore the last selected filter from Local Storage
  const lastFilter = localStorage.getItem("lastSelectedCategory") || "all";
  categoryFilter.value = lastFilter;
}
