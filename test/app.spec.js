var helper = require('yeoman-test')
var assert = require('yeoman-assert')
var path = require('path')

describe('app', () => {
  const name = 'mock'
  const destFile = path.join('src', name + '.vue')

  beforeEach(() => {
    return helper.run(path.join(__dirname, '../generators/app'))
            .withArguments([name])
  })

  it('create file', () => {
    assert.file([destFile])
  })

  it ('content', () => {
    assert.fileContent(destFile, name)
  })
})
