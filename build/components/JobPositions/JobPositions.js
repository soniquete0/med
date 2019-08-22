"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../helpers/getImageUrl"));

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

var JobPositions = function (_React$Component) {
  _inherits(JobPositions, _React$Component);

  function JobPositions(props) {
    var _this;

    _classCallCheck(this, JobPositions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JobPositions).call(this, props));
    _this.state = {
      numberOfPage: 1
    };
    return _this;
  }

  _createClass(JobPositions, [{
    key: "renderPositions",
    value: function renderPositions(items) {
      var _this2 = this;

      return items.map(function (position, index) {
        return (position.polyclinic === _this2.state.filter || _this2.state.filter === 'Všechny polikliniky') && React.createElement("div", {
          key: index,
          className: 'col-sm-12 col-lg-6 col-xl-4'
        }, React.createElement("div", {
          className: 'positions__element',
          style: {
            backgroundImage: position.image && "url(".concat((0, _getImageUrl["default"])(position.image), ")")
          }
        }, React.createElement("div", {
          className: 'positions__element-content'
        }, position.name && React.createElement("p", null, position.name), React.createElement(_Button["default"], {
          classes: 'btn--whiteBorder',
          url: position.url
        }, "v\xEDce informac\xED")), React.createElement("div", {
          className: 'positions__colorGradient',
          style: {
            background: "linear-gradient(to bottom, transparent 0%, #2473ba 100%)"
          }
        })));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$data = this.props.data,
          title = _this$props$data.title,
          positions = _this$props$data.positions;
      return React.createElement(_List["default"], {
        data: positions
      }, function (_ref) {
        var getPage = _ref.getPage;

        var _getPage = getPage(_this3.state.numberOfPage, 'infinite', 3),
            items = _getPage.items,
            lastPage = _getPage.lastPage;

        return React.createElement("div", {
          className: 'container'
        }, React.createElement("div", {
          className: 'actual-positions'
        }, title && React.createElement("h3", null, title), React.createElement("div", {
          className: 'positions row'
        }, items && _this3.renderPositions(items)), _this3.state.numberOfPage < lastPage && React.createElement("button", {
          className: 'btn hCenterBlock btn--blueBkg btn--down btn--fullWidth',
          onClick: function onClick() {
            return _this3.setState({
              numberOfPage: _this3.state.numberOfPage + 1
            });
          }
        }, "dal\u0161\xED pozice")));
      });
    }
  }]);

  return JobPositions;
}(React.Component);

var _default = JobPositions;
exports["default"] = _default;