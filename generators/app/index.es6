import { Base } from 'yeoman-generator'

class AppGenerator extends Base {
  initializing() {
    // 생성 될 스크립트확장자
    this.options.suffixScript = '.vue'
  }
  prompting() {}
  configuring() {}
  // default() {}
  writing() {}
  conflicts() {}
  install() {}
  end() {}
}

module.exports = AppGenerators
