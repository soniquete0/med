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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MedicalGroup = function (_React$Component) {
  _inherits(MedicalGroup, _React$Component);

  function MedicalGroup(props) {
    var _this;

    _classCallCheck(this, MedicalGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MedicalGroup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "list", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleItemClick", function (index) {
      if (_this.state.activeIndex === index) {
        _this.setState({
          activeIndex: null
        });
      } else {
        _this.setState({
          activeIndex: index
        });
      }
    });

    _this.list = React.createRef();
    _this.state = {
      activeIndex: null,
      listHeight: 0
    };
    return _this;
  }

  _createClass(MedicalGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var listHeight = this.list.current.getBoundingClientRect().height + 120;
      this.setState({
        listHeight: listHeight
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$data = this.props.data,
          companies = _this$props$data.companies,
          title = _this$props$data.title;
      return React.createElement("div", {
        className: 'container'
      }, React.createElement("section", {
        className: 'medicalGroup'
      }, title && React.createElement("h4", null, "sou\u010D\xE1sti skupiny medicon jsou tyto spole\u010Dnosti"), React.createElement("div", {
        className: 'medicalGroup__list',
        ref: this.list,
        style: {
          height: this.state.listHeight > 0 && this.state.listHeight
        }
      }, React.createElement("ul", null, React.createElement(_List["default"], {
        data: companies
      }, function (_ref) {
        var data = _ref.data;
        return data && data.map(function (item, index) {
          return React.createElement("li", {
            key: index,
            className: "medicalGroup__list__item ".concat(_this2.state.activeIndex === index ? 'active' : ''),
            onClick: function onClick() {
              return _this2.handleItemClick(index);
            }
          }, React.createElement("p", {
            className: 'medicalGroup__list__item__title'
          }, React.createElement("span", null, item.name), " - ", React.createElement("span", null, item.subtitle)), React.createElement("div", {
            className: 'medicalGroup__list__item__text'
          }, item.text && React.createElement(ReactMarkdown, {
            source: item.text,
            renderers: {
              paragraph: function paragraph(props) {
                return React.createElement("p", null, props.children);
              }
            }
          })));
        });
      })))));
    }
  }]);

  return MedicalGroup;
}(React.Component);

var _default = MedicalGroup;
exports["default"] = _default;