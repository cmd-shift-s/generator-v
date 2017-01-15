'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentGenerator = function (_Generator) {
  _inherits(ComponentGenerator, _Generator);

  // The name `constructor` is important here
  function ComponentGenerator(args, opts) {
    _classCallCheck(this, ComponentGenerator);

    var _this = _possibleConstructorReturn(this, (ComponentGenerator.__proto__ || Object.getPrototypeOf(ComponentGenerator)).call(this, args, opts));
    // Calling the super constructor is important so our generator is correctly set up


    _this.option('skip-import', {
      description: 'component를 생성할 때 import 구문을 넣지 않습니다.',
      type: Boolean,
      alias: 'si',
      default: false
    });

    _this.option('skip-member', {
      description: '옵션으로 지정한 맴버들을 추가하지 않는다. 단, 파라메터로 넘겨주는 맴버들은 추가한다.',
      type: Boolean,
      alias: 'sm',
      default: false
    });

    _this.option('skip-life-cycle', {
      description: '옵션으로 지정한 life-cycle 메소드들을 추가하지 않는다. 단, 파라메터로 넘겨주는 매소드들은 추가한다.',
      type: Boolean,
      alias: 'slc',
      default: false
    });

    _this.option('skip-test', {
      description: '테스트 케이스를 생성하지 않습니다.',
      type: Boolean,
      alias: 'st',
      default: false
    });

    _this.option('skip-test-import', {
      description: '테스트 케이스를 생성하면서 import 구문을 넣지 않습니다.',
      type: Boolean,
      alias: 'sti',
      default: false
    });

    try {
      // name을 필수로 받도록 처리
      _this.argument('name', { type: String, required: true });
    } catch (err) {
      _this.log.error(_this.help());
      _this.abort = true;
    }

    return _this;
  }

  _createClass(ComponentGenerator, [{
    key: 'initializing',
    value: function initializing() {
      if (this.abort) return;
      // 생성 될 스크립트확장자
      this.options.suffixScript = '.vue';
    }
  }, {
    key: 'prompting',
    value: function prompting() {}
  }, {
    key: 'configuring',
    value: function configuring() {}
    // default() {}

  }, {
    key: 'writing',
    value: function writing() {
      if (this.abort) return;
      var filename = this.options.name + this.options.suffixScript;
      this.fs.copyTpl(this.templatePath('Vue.vue'), this.destinationPath(_path2.default.join('src', filename)), { name: this.options.name });
    }
  }, {
    key: 'conflicts',
    value: function conflicts() {}
  }, {
    key: 'install',
    value: function install() {}
  }, {
    key: 'end',
    value: function end() {}
  }]);

  return ComponentGenerator;
}(_yeomanGenerator2.default);

module.exports = ComponentGenerator;