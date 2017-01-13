var Generator = require('yeoman-generator')
var path = require('path')

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts)
  }

  initializing() {
    // 생성 될 스크립트확장자
    this.options.suffixScript = '.vue'
  }
  prompting() {

  }
  configuring() {}
  // default() {}
  writing() {}
  conflicts() {}
  install() {}
  end() {}
}
