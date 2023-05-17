// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getDuckDuckResults, saveTermToFile } from "@/backend/services/duckduckgo/service";

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET' && req.method !== 'POST') {
      return res.status(405).json({});
    }
    const { q } = req.query;
    if (!q) return res.status(400).json({});
    const shouldPersistTerm = req.method === 'POST';
    if (shouldPersistTerm) await saveTermToFile(q);
    const searchResults = await getDuckDuckResults(q);
    return res.json(searchResults)
  } catch (e) {
    console.error('An error has occurred in user route', e);
    return res.status(500).json({});
  }
}
