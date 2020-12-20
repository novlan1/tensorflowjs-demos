const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = loaderUtils.getOptions(this) || {};
  return source.replace('http://127.0.0.1:8080', options.replace || '');
};
