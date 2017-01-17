import helper from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import util from '../util'

const target = 'comp'
const config = util.localConfig
describe(target, () => {
  const generatorName = util.getGeneratorName(target)
  const name = 'mock'
  const srcfile = path.join(config.srcPath, name + config.suffixScript)
  const specfile = path.join(config.testSpecPath, name + config.testSuffixScript)

  describe('with name', () => {
    beforeEach(() => {
      return helper.run(generatorName)
        .withLocalConfig(config)
        .withArguments([name])
    })

    it('create file with content', () => {
      assert.file([srcfile, specfile])
      assert.fileContent(srcfile, `${name}Component`)

      // template lang
      assert.fileContent(srcfile, `<template lang="${config.templateLang}">`)

      // style lang
      assert.fileContent(srcfile, `<style lang="${config.styleLang}"`)

      // style scoped
      if (config.styleScoped)
        assert.fileContent(srcfile, `scoped>`)

      // src user imports
      for (let userImport of config.srcUserImports) {
        assert.fileContent(srcfile, userImport)
      }

      // test assertion
      if (config.testAssertion === 'should') {
        assert.fileContent(specfile, 'vm.$el.textContent.should.be.equal(text)')
      }

      // test user imports
      for (let userImport of config.testUserImports) {
        assert.fileContent(specfile, userImport)
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
