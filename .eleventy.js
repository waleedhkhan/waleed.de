
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { htmlMinifier } = require("./eleventy/transforms");

const {
  allTags,
  ideasCollection,
  postsCollection,
  bestOfCollection,
  sitemapCollection,
  rssCollection,
} = require("./eleventy/collections");

const {
  stripSquareBrackets,
  makeSlug,
  jsonStringify,
  objectKeys,
  dateformat,
  markdownToSlides,
  urlToDomain,
} = require("./eleventy/filters");

const { h2br, info, warning, caption, bigtext, markdownRender } = require("./eleventy/shortcodes");

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 
    images: "_images",
    html: "_html",
    "images/favicon": "/",
  });

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("idea", "layouts/idea.njk");

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addTransform("htmlMinifier", htmlMinifier);

  eleventyConfig.addCollection("allTags", allTags);
  eleventyConfig.addCollection("bestOfCollection", bestOfCollection);
  eleventyConfig.addCollection("ideasCollection", ideasCollection);
  eleventyConfig.addCollection("postsCollection", postsCollection);
  eleventyConfig.addCollection("rssCollection", rssCollection);
  eleventyConfig.addCollection("sitemapCollection", sitemapCollection);

  eleventyConfig.addFilter("dateformat", dateformat);
  eleventyConfig.addFilter("json", jsonStringify);
  eleventyConfig.addFilter("keys", objectKeys);
  eleventyConfig.addFilter("markdownToSlides", markdownToSlides);
  eleventyConfig.addFilter("slug", makeSlug);
  eleventyConfig.addFilter("stripSquareBrackets", stripSquareBrackets);
  eleventyConfig.addFilter("domain", urlToDomain);

  eleventyConfig.addPairedShortcode("h2br", h2br);
  eleventyConfig.addPairedShortcode("info", info);
  eleventyConfig.addPairedShortcode("warning", warning);
  eleventyConfig.addPairedShortcode("caption", caption);
  eleventyConfig.addPairedShortcode("bigtext", bigtext);
  eleventyConfig.addPairedShortcode("markdown", markdownRender);


  return {
    dir: {
      input: "input",
      output: "_dist",
    },
    templateFormats: [
      "md",
      "html",
      "txt",
      "htaccess",
      "pdf",
      "toml",
      "njk",
      "webmanifest",
    ],
    passthroughFileCopy: true,
  };
};

