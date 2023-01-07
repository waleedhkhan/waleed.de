/* eslint no-underscore-dangle: 0 */
class Posts {
  constructor() {
    this.filename = 'posts.json';
    this.result = [];
  }

  data() {
    return {
      permalink: `/feeds/${this.filename}`,
    };
  }

  render(data) {
    const posts = data.collections.post;
    posts.reverse();
    this.result = posts.map((post) => ({
      id: post.data.page.fileSlug,
      content_html: post.data._templateContent,
      url: `https://www.waleed.de${post.url}`,
      summary: post.data.description,
      date_published: post.data.date,
      title: post.data.title,
    }));

    const wrapper = {
      version: 'https://jsonfeed.org/version/1.1',
      title: 'Waleed H.Khan | Personal Website',
      description:
        'Software engineer based in Berlin, specialized in designing and operations of large-scale e-commerce systems for more than a decade.',
      authors: [{ name: 'Waleed H.Khan', url: 'https://www.waleed.de' }],
      language: 'en',
      home_page_url: 'https://www.waleed.de',
      feed_url: 'https://www.waleed.de/feeds/posts.json',
      items: this.result,
    };

    return JSON.stringify(wrapper);
  }
}

module.exports = Posts;
