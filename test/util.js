var path = require('path')

exports.getGeneratorName = function getGeneratorName(name) {
  return path.resolve(__dirname, '..', 'generators', name, 'index.es6')
}

exports.localConfig = {
  useSemi: false,
  useImport: true,
  srcPath: 'src',
  suffixScript: '.vue',
  members: ['methods', 'computed', 'components'],
  srcUserImports: ['axios:axios'],
  templateLang: ['html'],
  styleLang: ['css'],
  styleScoped: true,
  testSpecPath: './test/spec',
  testSuffixScript: '.spec.js',
  testUserImports: ['util:test/util'],
  testUserCtor: 'const Ctor = Vue.extend'
}
