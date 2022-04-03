const markdown = require("markdown-it")({
  html: true,
});

const { slugify } = require("./utilities");

const h2br = (text, anchor) =>
  `<h2 class="hr" id="${anchor || slugify(text)}">
    <span class="pink">&lt;</span>
      ${text}
    <span class="pink">&gt;</span>
  </h2>`;

const info = (text) => `<blockquote class="info-block">${text}</blockquote>`;

const warning = (text) => `<blockquote class="warning-block">${text}</blockquote>`;

const caption = (text) => `<figcaption><em>${text}</em></figcaption>`;

const bigtext = (text) => `<p class="bigtext">${text}</p>`;

const markdownRender = (content) => markdown.render(content);

module.exports = {
  h2br,
  info,
  warning,
  caption,
  bigtext,
  markdownRender,
};
