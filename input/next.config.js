module.exports = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/about',
        permanent: true,
      },
    ]
  },
}