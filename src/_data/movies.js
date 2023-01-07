require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

async function movie() {
    const url = `https://api.themoviedb.org/3/list/8234478?api_key=${process.env.TMD_API_KEY}&language=en-US`;
    const response = EleventyFetch(url, {
    duration: "1d",
    type: "json"
  }).then((json) => json.items);
  const movies = await response;
  return movies;
}

module.exports = movie;