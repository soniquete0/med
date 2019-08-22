"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactMarkdown = _interopRequireWildcard(require("react-markdown"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Faq = function (_React$Component) {
  _inherits(Faq, _React$Component);

  function Faq(props) {
    var _this;

    _classCallCheck(this, Faq);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Faq).call(this, props));
    _this.state = {
      numberOfPage: 1
    };
    return _this;
  }

  _createClass(Faq, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(_List["default"], {
        data: this.props.data.items
      }, function (_ref) {
        var getPage = _ref.getPage;

        var _getPage = getPage(_this2.state.numberOfPage, 'infinite', 4),
            items = _getPage.items,
            lastPage = _getPage.lastPage;

        return React.createElement("div", {
          className: 'faq'
        }, React.createElement("div", {
          className: 'container'
        }, items && items.map(function (item, i) {
          return React.createElement("div", {
            key: i,
            className: 'faq__element'
          }, React.createElement("h3", null, item.title), item.description && React.createElement(ReactMarkdown, {
            source: item.description
          }));
        }), _this2.state.numberOfPage < lastPage && React.createElement("button", {
          className: 'btn hCenterBlock btn--blueBkg btn--fullWidth',
          onClick: function onClick() {
            return _this2.setState({
              numberOfPage: _this2.state.numberOfPage + 1
            });
          }
        }, "v\xEDce info")));
      });
    }
  }]);

  return Faq;
}(React.Component);

exports["default"] = Faq;