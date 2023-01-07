require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

async function bookshelve() {
    const url = `https://www.googleapis.com/books/v1/users/110562728982580442245/bookshelves/2/volumes`;
    const response = EleventyFetch(url, {
    duration: "1d",
    type: "json"
  }).then((json) => json.items);
  const bookshelves = await response;
  return bookshelves;
}

module.exports = bookshelve;