export const fetchResults = async (searchTerm) => {
  try {
    const result = await fetch(`https://duckduckgo.com/?q=${encodeURIComponent(searchTerm)}&format=json`);
    return await result.json();
  } catch (err) {
    console.error(`fetchResults -> An error has occurred while fetching results`);
    throw err;
  }
}