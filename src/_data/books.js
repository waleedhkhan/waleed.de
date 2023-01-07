require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

async function book() {
    const url = `https://www.googleapis.com/books/v1/users/110562728982580442245/bookshelves/3/volumes`;
    const response = EleventyFetch(url, {
    duration: "1d",
    type: "json"
  }).then((json) => json.items);
  const books = await response;
  return books;
}

module.exports = book;