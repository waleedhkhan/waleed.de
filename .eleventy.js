// Setup .env file
require("dotenv").config();

module.exports = function(eleventy) {
  // Eleventy plugins
  const pluginRSS = require("@11ty/eleventy-plugin-rss");
  const pluginReadingTime = require("eleventy-plugin-reading-time");
  eleventy.addPlugin(pluginRSS);
  eleventy.addPlugin(pluginReadingTime);

  // Custom filters
  const date = require("./src/_filters/date");
  const stars = require("./src/_filters/stars");
  eleventy.addFilter("formatDate", date);
  eleventy.addFilter("starRating", stars);
  

  // Custom shortcodes
  const responsiveImage = require("./src/_shortcodes/responsiveImage");
  eleventy.addAsyncShortcode("image", responsiveImage);

  const md = require("markdown-it");
  eleventy.addPairedShortcode("sidenote", (content, number) => {
    const result = md({ html: true }).render(content);
    return `<aside id="sn-${number}" class="sidenote">
              <small>
                ${result}
              </small>
            </aside>`;
  });

  // Custom markdown renderer
  const namedHeadingsPlugin = require("markdown-it-named-headings");
  const externalLinksPlugin = require("markdown-it-external-links");
  eleventy.amendLibrary("md", (mdLib) =>
    mdLib
      .use(namedHeadingsPlugin)
      .use(externalLinksPlugin, {
        externalClassName: null,
        externalTarget: "_blank",
        externalRel: "nofollow noopener noreferrer",
        internalDomains: ["waleed.de", "localhost"],
      })
  );

  // Options
  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
  };
};
