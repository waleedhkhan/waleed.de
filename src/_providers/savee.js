const Cache = require('@11ty/eleventy-fetch');

module.exports = class SaveeAPI {
  constructor() {
    this.url = 'https://savee.it/api/graphql/';
  }

  async getItems() {
    return Cache(this.url, {
      duration: '1d',
      type: 'json',
      fetchOptions: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `{
            userByUsername(username: "waleedhkhan") {
              items(limit: 50) {
                items {
                  _id
                  url
                  name
                  pageURL
                  asset {
                    _id
                    image {
                      thumbnail
                      width
                      ratio
                    }
                  }
                }
              }
            }
          }`,
        }),
      },
    });
  }
};
