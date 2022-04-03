module.exports = [
  {
    type: 'input',
    name: 'title',
    message: "Page title",
    validate: (value) => !value ? "Title cannot be empty" : true
  },
  {
    type: 'input',
    name: 'permalink',
    message: "Page permalink"
  },
  {
    type: 'input',
    name: 'meta_title',
    message: "Meta title"
  },
  {
    type: 'input',
    name: 'meta_description',
    message: "Meta description"
  },
  {
    type: 'input',
    name: 'featured_img',
    message: "Featured image file name"
  },
  {
    type: 'input',
    name: 'canonical_link',
    message: "Canonical link"
  }
]
