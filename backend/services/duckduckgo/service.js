import { fetchResults } from "@/backend/services/duckduckgo/repository";
import { readFromJson, writeToFile } from "@/backend/utils";

export const getDuckDuckResults = async (searchTerm) => {
  try {
    const results = await fetchResults(searchTerm);
    return results?.RelatedTopics?.reduce((searchResults, { FirstURL, Text, Topics }) => {
      if (!Topics) {
        return [...searchResults, { url: FirstURL, title: Text }];
      } else {
        const topics = Topics.map(({ FirstURL, Text }) => ({ url: FirstURL, title: Text }));
        return [...searchResults, ...topics]
      }
    }, []);
  } catch (err) {
    console.error(`getDuckDuckResults -> An error has occurred while fetching results`);
    throw err;
  }
}

export const saveTermToFile = async (searchTerm) => {
  try {
    const allTerms = await readFromJson();
    await writeToFile([searchTerm, ...allTerms]);
  } catch (err) {
    console.error(`saveTermToFile -> An error has occurred while persisting data`);
    throw err;
  }
}

export const getAllTerms = async () => {
  try {
    return await readFromJson();
  } catch (err) {
    console.error(`getAllTerms -> An error has occurred while fetching all terms`);
    throw err;
  }
}