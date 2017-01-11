var Generator = require('yeoman-generator')
var path = require('path')

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts)

    // arguments
    this.argument('appname', { type: String, required: true })
  }

  initializing() {}
  prompting() {}
  configuring() {}
  default() {}
  writing() {
    const filename = this.options.appname + '.vue'
    this.fs.copyTpl(
      this.templatePath('Vue.vue'),
      this.destinationPath(path.join('src', this.options.appname + '.vue')),
      { name: this.options.appname }
    )
  }
  conflicts() {}
  install() {}
  end() {}
}
