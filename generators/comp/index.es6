import Generator from 'yeoman-generator'
import path from 'path'

class ComponentGenerator extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts)

    this.option('skip-import', {
      description: 'component를 생성할 때 import 구문을 넣지 않습니다.',
      type: Boolean,
      alias: 'si',
      default: false
    })

    this.option('skip-member', {
      description: '옵션으로 지정한 맴버들을 추가하지 않는다. 단, 파라메터로 넘겨주는 맴버들은 추가한다.',
      type: Boolean,
      alias: 'sm',
      default: false
    })

    this.option('skip-life-cycle', {
      description: '옵션으로 지정한 life-cycle 메소드들을 추가하지 않는다. 단, 파라메터로 넘겨주는 매소드들은 추가한다.',
      type: Boolean,
      alias: 'slc',
      default: false
    })

    this.option('skip-test', {
      description: '테스트 케이스를 생성하지 않습니다.',
      type: Boolean,
      alias: 'st',
      default: false
    })

    this.option('skip-test-import', {
      description: '테스트 케이스를 생성하면서 import 구문을 넣지 않습니다.',
      type: Boolean,
      alias: 'sti',
      default: false
    })

    try {
      // name을 필수로 받도록 처리
      this.argument('name', { type: String, required: true })

    } catch(err) {
      this.log.error(this.help())
      this.abort = true
    }

  }

  initializing() {
    if (this.abort) return
    // 생성 될 스크립트확장자
    this.options.suffixScript = '.vue'
  }
  prompting() {}
  configuring() {}
  // default() {}
  writing() {
    if (this.abort) return
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

module.exports = ComponentGenerator
