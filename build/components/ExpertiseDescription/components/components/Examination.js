"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactMarkdown = _interopRequireWildcard(require("react-markdown"));

var _Link = _interopRequireDefault(require("../../../../partials/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Examination = function (_React$Component) {
  _inherits(Examination, _React$Component);

  function Examination(props) {
    var _this;

    _classCallCheck(this, Examination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Examination).call(this, props));
    _this.state = {
      isDescriptionVisible: false
    };
    return _this;
  }

  _createClass(Examination, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          url = _this$props.url;
      return React.createElement("div", {
        className: "examination__list__item ",
        style: description ? {
          cursor: 'pointer'
        } : {
          cursor: 'default'
        }
      }, React.createElement("div", {
        style: {
          display: 'table',
          height: '100%',
          width: '100%'
        }
      }, React.createElement("div", {
        style: {
          display: 'table-cell',
          verticalAlign: 'middle'
        }
      }, title && React.createElement("p", {
        style: {
          fontWeight: 500
        },
        onClick: function onClick() {
          return _this2.setState({
            isDescriptionVisible: !_this2.state.isDescriptionVisible
          });
        }
      }, title), url && React.createElement(_Link["default"], _extends({}, url, {
        style: {
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }
      })), description && React.createElement(ReactMarkdown, {
        source: description,
        renderers: {
          root: function root(props) {
            return React.createElement("div", {
              className: 'examination__list__item--markdown',
              style: _this2.state.isDescriptionVisible ? {
                display: 'block',
                paddingTop: 15
              } : {
                display: 'none'
              }
            }, props.children);
          }
        }
      }))));
    }
  }]);

  return Examination;
}(React.Component);

var _default = Examination;
exports["default"] = _default;