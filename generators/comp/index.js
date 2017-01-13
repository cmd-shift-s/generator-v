var Generator = require('yeoman-generator')
var path = require('path')

const usage = 'Usage: yo v:comp name'

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts)

    try {
      // name을 필수로 받도록 처리
      this.argument('name', { type: String, required: true })
    } catch(err) {
      this.log.error(usage)
      process.exit(1)
    }
  }

  initializing() {
    // 생성 될 스크립트확장자
    this.options.suffixScript = '.vue'
  }
  prompting() {}
  configuring() {}
  // default() {}
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
