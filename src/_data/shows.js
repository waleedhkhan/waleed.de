require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

async function show() {
    const url = `https://api.themoviedb.org/3/list/8230401?api_key=${process.env.TMD_API_KEY}&language=en-US`;
    const response = EleventyFetch(url, {
    duration: "1d",
    type: "json"
  }).then((json) => json.items);
  const shows = await response;
  return shows;
}

module.exports = show;