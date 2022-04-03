/*
console.log(data.page);
{
  date: 2021-11-01T12:00:00.000Z,
  inputPath: './input/posts/2021/2021-11-01-taking-notes.md',
  fileSlug: 'taking-notes',
  filePathStem: '/posts/2021/taking-notes',
  url: '/notes/',
  outputPath: '_dist/notes/index.html'
}
*/

const { dateformat } = require("../../eleventy/filters");

const isDraft = (data) => data.page.fileSlug.split("-")[0] === "DRAFT";

module.exports = {
  layout: "post",
  modified: "Last Modified",
  eleventyComputed: {
    permalink: (data) => {
      return data.permalink || data.page.fileSlug + "/index.html";
    },
    eleventyExcludeFromCollections: (data) => !!data.eleventyExcludeFromCollections || isDraft(data),
    date: (data) => {
      if (data.date) {
        return data.date;
      }
      if (isDraft(data)) {
        return dateformat(new Date(0)) + " 12:00:00";
      }
      const { inputPath, fileSlug } = data.page;
      const inputPathParts = inputPath.split("/");
      const fileName = inputPathParts[inputPathParts.length - 1];
      const postDate = fileName.replace(`-${fileSlug}.md`, "");
      return postDate + " 12:00:00";
    },
  },
};
