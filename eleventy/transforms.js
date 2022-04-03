const htmlmin = require("html-minifier");

const htmlMinifier = (content, outputPath) => {
  if (!outputPath || !outputPath.endsWith(".html")) {
    return content;
  }

  if (process.env.NODE_ENV === "development") {
    return content;
  }

  return htmlmin.minify(content, {
    useShortDoctype: true,
    removeComments: true,
    collapseWhitespace: true,
  });
};

module.exports = {
  htmlMinifier,
};
