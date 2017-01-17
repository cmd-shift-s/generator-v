import Generator from 'yeoman-generator'

class AppGenerator extends Generator {
  initializing() {
    this.userImports = {
      src: [],
      test: []
    }
  }

  prompting() {
    const questions = [
      {
        type: 'confirm',
        name: 'useImport',
        message: 'use import?',
        default: true
      },
      {
        type: 'input',
        name: 'srcPath',
        message: 'source path?',
        default: './app/src'
      },
      {
        type: 'checkbox',
        name: 'members',
        choices: ['el', 'template', 'props', 'data', 'computed', 'methods', 'components'],
        message: 'component members?'
      },
      {
        type: 'list',
        name: 'templateLang',
        choices: ['html', 'pug', 'jade'],
        message: 'template lang?',
        default: 'html'
      },
      {
        type: 'list',
        name: 'styleLang',
        choices: ['css', 'sass', 'scss', 'stylus'],
        message: 'style lang?',
        default: 'css'
      },
      {
        type: 'confirm',
        name: 'styleScoped',
        message: 'append style scoped?',
        default: true
      },
      {
        type: 'input',
        name: 'srcUserImports',
        message: 'Enter your src imports(ex:import Vue from \'vue\')',
        validate: (value) => {
          if (value.length === 0) {
            return true
          }

          this.userImports.src.push(value)
          return ''
        }
      },
      {
        type: 'input',
        name: 'testSpecPath',
        message: 'test specs path?',
        default: './test/specs'
      },
      {
        type: 'list',
        name: 'testAssertion',
        message: 'use assertion?',
        choices: ['should', 'expect', 'expect.js']
      },
      {
        type: 'input',
        name: 'testUserImports',
        message: 'Enter your test imports(ex:import Vue from \'vue\')',
        validate: (value) => {
          if (value.length === 0) {
            return true
          }

          this.userImports.test.push(value)
          return ''
        }
      },
    ]

    return this.prompt(questions)
      .then((answers) => {
        this.props = answers

        this.props.srcUserImports = this.userImports.src
        this.props.testUserImports = this.userImports.test
      })
  }

  configuring() {
    this.props.suffixScript = '.vue'
    this.props.testSuffixScript = '.spec.js'

    for (let key of Object.keys(this.props)) {
      this.config.set(key, this.props[key])
    }
  }
}

module.exports = AppGenerator
