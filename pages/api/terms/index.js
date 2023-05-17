import { getAllTerms } from "@/backend/services/duckduckgo/service";


export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({});
    }
    const searchResults = await getAllTerms();
    return res.json(searchResults)
  } catch (e) {
    console.error('An error has occurred in user route', e);
    return res.status(500).json({});
  }
}
