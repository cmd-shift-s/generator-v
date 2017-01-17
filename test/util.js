var path = require('path')

exports.getGeneratorName = function getGeneratorName(name) {
  return path.resolve(__dirname, '..', 'generators', name, 'index.es6')
}

exports.localConfig = {
  useImport: true,
  suffixScript: '.vue',
  testSuffixScript: '.spec.js',
  srcPath: 'src',
  lifeCycle: ['beforeMount'],
  members: ['props', 'data', 'methods', 'computed', 'components'],
  templateLang: ['html'],
  styleLang: ['css'],
  styleScoped: true,
  srcUserImports: ['import util from \'src/util\'', 'import Hello from \'components/Hello.vue\'', ],
  testSpecPath: 'test/spec',
  testUserImports: ['import util from \'src/util\'']
}
