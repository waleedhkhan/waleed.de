module.exports = [
  {
    type: 'input',
    name: 'title',
    message: "Idea title",
    validate: (value) => !value ? "Title cannot be empty" : true
  },
  {
    type: 'input',
    name: 'content',
    message: "Idea content",
    validate: (value) => !value ? "Content cannot be empty" : true
  },
  {
    type: 'input',
    name: 'date',
    message: "Idea date (XXXX-XX-XX)",
    validate: (value) => {
      if (!value) {
        return true;
      }

      const splitDate = value.split("-");
      if (splitDate[0].length === 4 && splitDate[1].length === 2 && splitDate[2].length === 2) {
        return true;
      }

      return "Invalid date"
    }
  },
  {
    type: 'input',
    name: 'link_to',
    message: "Link out"
  },
]
