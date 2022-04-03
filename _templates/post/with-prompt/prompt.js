module.exports = [
  {
    type: 'select',
    name: 'isDraft',
    message: "Is this post a draft?",
    choices: ["yes", "no"]
  },
  {
    type: 'input',
    name: 'permalink',
    message: "Post permalink"
  },
  {
    type: 'input',
    name: 'title',
    message: "Post title",
    validate: (value) => !value ? "Title cannot be empty" : true
  },
  {
    type: 'input',
    name: 'meta_title',
    message: "Meta title"
  },
  {
    type: 'input',
    name: 'excerpt',
    message: "Post excerpt"
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
    type: 'list',
    name: 'tags',
    message: "Enter tags, separated by commas"
  },
  {
    type: 'input',
    name: 'link_to',
    message: "Link out"
  },
  {
    type: 'input',
    name: 'canonical_link',
    message: "Canonical link"
  }
]
