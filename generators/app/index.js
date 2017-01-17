'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppGenerator = function (_Generator) {
  _inherits(AppGenerator, _Generator);

  function AppGenerator() {
    _classCallCheck(this, AppGenerator);

    return _possibleConstructorReturn(this, (AppGenerator.__proto__ || Object.getPrototypeOf(AppGenerator)).apply(this, arguments));
  }

  _createClass(AppGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.userImports = {
        src: [],
        test: []
      };
    }
  }, {
    key: 'prompting',
    value: function prompting() {
      var _this2 = this;

      var questions = [{
        type: 'confirm',
        name: 'useSemi',
        message: 'use semicolon?',
        default: false
      }, {
        type: 'confirm',
        name: 'useImport',
        message: 'use import?',
        default: true
      }, {
        type: 'input',
        name: 'srcPath',
        message: 'Enter source path:',
        default: './app/src'
      }, {
        type: 'checkbox',
        name: 'members',
        choices: ['props', 'computed', 'methods', 'components'],
        message: 'component members?'
      }, {
        type: 'list',
        name: 'templateLang',
        choices: ['html', 'pug', 'jade'],
        message: 'template lang?',
        default: 'html'
      }, {
        type: 'list',
        name: 'styleLang',
        choices: ['css', 'sass', 'scss', 'stylus'],
        message: 'style lang?',
        default: 'css'
      }, {
        type: 'confirm',
        name: 'styleScoped',
        message: 'append style scoped?',
        default: true
      }, {
        type: 'input',
        name: 'srcUserImports',
        message: 'ex) vue[:vue] -> import vue from \'vue\' or var vue = require(\'vue\')\nEnter your src imports(ex: vue[:vue]):',
        validate: function validate(value) {
          if (value.length === 0) {
            return true;
          }

          if (!value.includes(':')) value += ':' + value;

          _this2.userImports.src.push(value);
          return '';
        }
      }, {
        type: 'input',
        name: 'testSpecPath',
        message: 'Enter test specs path:',
        default: './test/specs'
      }, {
        type: 'input',
        name: 'testUserImports',
        message: 'ex) vue[:vue] -> import vue from \'vue\' or var vue = require(\'vue\')\nEnter your test imports(ex: vue[:vue]):',
        validate: function validate(value) {
          if (value.length === 0) {
            return true;
          }

          if (!value.includes(':')) value += ':' + value;

          _this2.userImports.test.push(value);
          return '';
        }
      }, {
        type: 'input',
        name: 'testUserCtor',
        message: 'ex) var Ctor = Vue.extend -> Vue.extend(Name)\nEnter your constructor:'
      }];

      return this.prompt(questions).then(function (answers) {
        _this2.props = answers;

        _this2.props.srcUserImports = _this2.userImports.src;
        _this2.props.testUserImports = _this2.userImports.test;
      });
    }
  }, {
    key: 'configuring',
    value: function configuring() {
      this.props.suffixScript = '.vue';
      this.props.testSuffixScript = '.spec.js';

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(this.props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          this.config.set(key, this.props[key]);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return AppGenerator;
}(_yeomanGenerator2.default);

module.exports = AppGenerator;