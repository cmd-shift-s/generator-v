var Generator = require('yeoman-generator')
var path = require('path')

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts)

    // name을 필수로 받도록 처리
    this.argument('name', { type: String, required: true })

    // 생성 될 스크립트확장자
    this.options.suffixScript = '.vue'
  }

  initializing() {}
  prompting() {}
  configuring() {}
  default() {}
  writing() {
    const filename = this.options.name + this.options.suffixScript
    this.fs.copyTpl(
      this.templatePath('Vue.vue'),
      this.destinationPath(path.join('src', filename)),
      { name: this.options.name}
    )
  }
  conflicts() {}
  install() {}
  end() {}
}
