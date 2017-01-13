var path = require('path')

exports.getGeneratorName = function getGeneratorName(name) {
  return path.resolve('generators', name , 'index.es6')
}
