var path = require('path')

exports.getGeneratorName = function getGeneratorName(name) {
  return path.resolve(__dirname, '..', 'generators', name, 'index.es6')
}
