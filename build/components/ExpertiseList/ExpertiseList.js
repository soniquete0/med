"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../partials/Link"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

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

var ExpertiseList = function (_React$Component) {
  _inherits(ExpertiseList, _React$Component);

  function ExpertiseList(props) {
    var _this;

    _classCallCheck(this, ExpertiseList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpertiseList).call(this, props));
    _this.state = {
      numberOfPage: 1
    };
    return _this;
  }

  _createClass(ExpertiseList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$data = this.props.data,
          title = _this$props$data.title,
          expertiseList = _this$props$data.expertiseList;
      return React.createElement(_List["default"], {
        data: expertiseList
      }, function (_ref) {
        var getPage = _ref.getPage;

        var _getPage = getPage(_this2.state.numberOfPage, 'infinite', 9),
            items = _getPage.items,
            lastPage = _getPage.lastPage;

        return React.createElement("section", {
          className: "expertiseList"
        }, React.createElement("div", {
          className: "container"
        }, title && React.createElement("h3", null, title), React.createElement("div", {
          className: "row"
        }, items && items.map(function (item, index) {
          return React.createElement("div", {
            key: index,
            className: "col-sm-12 col-lg-6 col-xl-4"
          }, React.createElement("div", {
            className: "expertiseList__element"
          }, React.createElement("div", null, item.image && React.createElement(_Media["default"], {
            type: 'image',
            data: item.image
          })), React.createElement(_Link["default"], item.url), item.title && React.createElement("p", null, item.title)));
        })), _this2.state.numberOfPage < lastPage && React.createElement("button", {
          className: 'btn btn--blueBkg btn--fullWidth',
          onClick: function onClick() {
            return _this2.setState({
              numberOfPage: lastPage
            });
          }
        }, "zobrazit dal\u0161i odbornosti")));
      });
    }
  }]);

  return ExpertiseList;
}(React.Component);

exports["default"] = ExpertiseList;