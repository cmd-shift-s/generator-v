var helper = require('yeoman-test')
var assert = require('yeoman-assert')
var path = require('path')

const target = 'app'
describe(target, () => {
  const generatorName = path.join('..', 'generators', target)
  const name = 'mock'
  const destFile = path.join('src', name + '.vue')
  
  describe('with name', () => {
    beforeEach(() => {
      return helper.run(path.join(__dirname, generatorName))
              .withArguments([name])
    })

    it('create file with content', () => {
      assert.file([destFile])
      assert.fileContent(destFile, name)
    })
  })

  describe('without name', () => {
    it('do not run generator', () => {
      const generator = helper.run(path.join(__dirname, generatorName))

      assert.equal(generator.ran, false, 'generator는 실행되지 않아야 한다.');
    })
  })
})
