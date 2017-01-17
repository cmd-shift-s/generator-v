import helper from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'

const target = 'app'
describe(target, () => {
  const _generator = path.resolve(__dirname, '../..', 'generators', target, 'index.es6')

  describe('with prompts', () => {
    var gen
    const props = {
      useSemi: false,
      useImport: true,
      srcPath: 'src',
      suffixScript: '.vue',
      members: ['methods', 'computed', 'components'],
      srcUserImports: [],
      templateLang: ['html'],
      styleLang: ['css'],
      styleScoped: true,
      testSpecPath: './test/spec',
      testSuffixScript: '.spec.js',
      testUserImports: [],
      testUserCtor: 'const Ctor = Vue.extend'
    }

    beforeEach(() => {
      return helper.run(_generator)
        .withPrompts(props)
        .on('ready', (_gen) => {
          gen = _gen
        })
    })

    it('works with props', () => {
      assert.deepEqual(gen.props, props)
    })

    it('works configuring', () => {
      const configs = gen.config.getAll()
      assert.deepEqual(configs, props)
    })
  })
})
