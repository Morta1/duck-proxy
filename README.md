# duck-proxy

A simple app to query ddg related topics

The app consist of:
* Search field to query DDG
* Find field to highlight a term in the results from previous field
* Search history - when using the POST api, the search term will be saved and loaded on refresh

## Getting Started
```shell
npm install

npm run dev
```

## API
Using `next.js` file based api under `/app/api`

`GET /api/?q=` - search a term in ddg

`POST /api/?q=` - search a term in ddg + saves your search term in `/backend/db/terms.json`

`GET /api/terms` - get all search terms in the `terms.json` file
