import Generator from 'yeoman-generator'
import Rx from 'rx'
import inquirer from 'inquirer'

class AppGenerator extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts)

  }

  initializing() {
    // 생성 될 스크립트확장자
    this.options.suffixScript = '.vue'

    this.props = {}
  }
  prompting() {
    var self = this
    var questions = [
      {

      }
    ]

    var observable = Rx.Observable.fromArray(questions);
    return inquirer.prompt(observable).ui.process.subscribe(
      function (ans) {
        self.props[ans.name] = ans.answer
      },
      function (err) {
      },
      function () {
        // TODO Save config
      }
    )
  }
}

module.exports = AppGenerator
