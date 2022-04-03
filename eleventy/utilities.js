const slugifyRequire = require("slugify");

const slugify = (text) => slugifyRequire(text, { lower: true, strict: true });

module.exports = {
  slugify,
};
