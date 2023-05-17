const path = require("path");
const asyncFs = require('fs').promises;

export const writeToFile = async (data) => {
  try {
    const target = path.resolve('backend/db/terms.json');
    await asyncFs.writeFile(target, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error(`writeToFile -> An error occurred while creating writing to terms.json`, err);
    return null
  }
}

export const readFromJson = async () => {
  try {
    const target = path.resolve('backend/db/terms.json');
    const data = await asyncFs.readFile(target, "binary");
    return JSON.parse(data);
  } catch (err) {
    console.error(`readFromJson -> An error occurred while reading from terms.json `, err);
    return null;
  }
}