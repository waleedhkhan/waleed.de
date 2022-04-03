const { v4: uuidv4 } = require("uuid");
const { paramCase } = require("change-case");

const today = new Date();

const getYear = today.getFullYear();
const getMonth = today.getMonth() + 1;
const getDay = today.getDate();

const padLeft = (num) => num < 10 ? "0" + num : "" + num;

const getDate = `${getYear}-${padLeft(getMonth)}-${padLeft(getDay)}`;

const IMAGE_PATH = "/_images/";
const DEFAULT_THUMB = IMAGE_PATH + "default-thumb.png";

module.exports = {
  helpers: {
    getPostFileName: (locals, yearFolder = false) => {
      if (locals.isDraft === "yes") {
        return `DRAFT-${locals.permalink ? locals.permalink : uuidv4() }`;
      }

      const permalink = locals.permalink || paramCase(locals.title);
      let postYear = getYear;
      let postDate = getDate;
      if (locals.date) {
        postYear = locals.date.split("-")[0];
        postDate = locals.date;
      }
      return `${yearFolder ? `${getYear}/` : ""}${postDate}-${permalink}`;
    },
    getYear,
    IMAGE_PATH,
    DEFAULT_THUMB,
  }
}