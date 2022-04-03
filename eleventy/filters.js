const moment = require("moment");
moment.locale("en");

const { slugify } = require("./utilities");

const markdownToSlides = (content) =>
  content
    .replace(/<h2>/g, "<section><section><h2>")
    .replace(/<\/h2>/g, "</h2></section><section>")
    .replace(/<hr>/g, "</section></section>");

const dateformat = (dateIn) => moment(dateIn).format("MMM DD, YYYY");

const objectKeys = (data) => Object.keys(data);

const jsonStringify = (data) => JSON.stringify(data, null, 2);

const makeSlug = (text) => slugify(text);

const stripSquareBrackets = (text) => text.replace(/\[\[/g, "").replace(/\]\]/g, "");

const urlToDomain = (url) => {
  const urlObject = new URL(url);
  return urlObject.hostname;
};

module.exports = {
  stripSquareBrackets,
  makeSlug,
  jsonStringify,
  objectKeys,
  dateformat,
  markdownToSlides,
  urlToDomain,
};
