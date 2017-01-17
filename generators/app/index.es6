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
        name: 'useSemi',
        message: 'use semicolon?',
        default: false
      },
      {
        type: 'confirm',
        name: 'useImport',
        message: 'use import?',
        default: true
      },
      {
        type: 'input',
        name: 'srcPath',
        message: 'Enter source path:',
        default: './app/src'
      },
      {
        type: 'checkbox',
        name: 'members',
        choices: ['props', 'computed', 'methods', 'components'],
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
        message: 'ex) vue[:vue] -> import vue from \'vue\' or var vue = require(\'vue\')\nEnter your src imports(ex: vue[:vue]):',
        validate: (value) => {
          if (value.length === 0) {
            return true
          }

          if (!value.includes(':'))
            value += ':' + value

          this.userImports.src.push(value)
          return ''
        }
      },
      {
        type: 'input',
        name: 'testSpecPath',
        message: 'Enter test specs path:',
        default: './test/specs'
      },
      {
        type: 'input',
        name: 'testUserImports',
        message: 'ex) vue[:vue] -> import vue from \'vue\' or var vue = require(\'vue\')\nEnter your test imports(ex: vue[:vue]):',
        validate: (value) => {
          if (value.length === 0) {
            return true
          }

          if (!value.includes(':'))
            value += ':' + value

          this.userImports.test.push(value)
          return ''
        }
      },
      {
        type: 'input',
        name: 'testUserCtor',
        message: 'ex) var Ctor = Vue.extend -> Vue.extend(Name)\nEnter your constructor:'
      }
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
