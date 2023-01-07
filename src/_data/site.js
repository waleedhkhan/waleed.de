module.exports = function site(data) {
  return {
    fonts: [
      'signifier-web-light',
      'EBGaramond-Italic',
      'EBGaramond-Medium',
      'EBGaramond-Regular',
      'pitch-web-semibold',
    ],
    generator: data.eleventy.generator,
  };
};
