import helper from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import util from '../util'

const target = 'comp'
const config = util.localConfig
describe(target, () => {
  const generatorName = util.getGeneratorName(target)
  const name = 'Mock'
  const srcfile = path.join(config.srcPath, 'components', name + config.suffixScript)
  const specfile = path.join(config.testSpecPath, 'components', name + config.testSuffixScript)

  describe('with name', () => {
    beforeEach(() => {
      return helper.run(generatorName)
        .withLocalConfig(config)
        .withArguments([name])
    })

    it('create file with content', () => {
      assert.file([srcfile, specfile])
      assert.fileContent(srcfile, `${name}Component`)

      const semi = (config.useSemi)? ';' : ''

      // template lang
      assert.fileContent(srcfile, `<template lang="${config.templateLang}">`)

      // style lang
      assert.fileContent(srcfile, `<style lang="${config.styleLang}"`)

      // style scoped
      if (config.styleScoped)
        assert.fileContent(srcfile, `scoped>`)

      // src user imports
      for (let userImport of config.srcUserImports) {
        const [name, path] = userImport.split(':')
        if (config.useImport) {
          assert.fileContent(srcfile, `import ${name} from '${path}'${semi}`)
        } else {
          assert.fileContent(srcfile, `var ${name} = require('${path}')${semi}`)
        }
      }

      // test user imports
      for (let userImport of config.testUserImports) {
        const [name, path] = userImport.split(':')
        if (config.useImport) {
          assert.fileContent(specfile, `import ${name} from '${path}'${semi}`)
        } else {
          assert.fileContent(specfile, `var ${name} = require('${path}')${semi}`)
        }
      }

      // test user contructor
      if (config.testUserCtor) {
        assert.fileContent(specfile, `${config.testUserCtor}(${name})${semi}`)
      }
    })
  })

  describe('without name', () => {
    it('do not run generator', () => {
      const generator = helper.run(generatorName)

      assert.equal(generator.ran, false, 'generator는 실행되지 않아야 한다.');
    })
  })
})
