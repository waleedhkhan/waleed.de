module.exports = {
  gitHubLink: (page) =>
    page.inputPath.replace("./", "https://github.com/waleedhkhan/waleed.de/edit/main/"),
  gitHubComment: (page) =>
    "https://github.com/waleedhkhan/waleed.de/issues/new" +
    "?template=comment.md" +
    "&title=Comment on " +
    page.url +
    "&body=" +
    encodeURIComponent("❤️ Thank you for your feedback! ❤️\n\n## What would you like to say?\n\n"),
};
