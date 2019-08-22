"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../../partials/Link"));

var _Avatar = _interopRequireDefault(require("./components/Avatar"));

var _SvgIcon = _interopRequireDefault(require("../../partials/SvgIcon"));

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

var MyProblem = function (_React$Component) {
  _inherits(MyProblem, _React$Component);

  function MyProblem(props) {
    var _this;

    _classCallCheck(this, MyProblem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyProblem).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "clickArea", function (area) {
      var availableSpecializations = [];

      for (var i = 0; i < _this.props.data.specializations.length; i++) {
        if (_this.props.data.specializations[i][area] === true) {
          availableSpecializations.push(_this.props.data.specializations[i]);
        }
      }

      _this.setState({
        availableSpecializations: availableSpecializations,
        area: area
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeInfoBox", function () {
      _this.setState({
        area: ''
      });
    });

    _this.state = {
      area: '',
      availableSpecializations: null
    };
    return _this;
  }

  _createClass(MyProblem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        className: "container"
      }, React.createElement("section", {
        className: 'myProblem'
      }, React.createElement("h3", null, "M\u016Fj Probl\xE9m se t\xFDk\xE1"), React.createElement("p", null, "Klikn\u011Bte na \u010D\xE1st t\u011Bla se kterou m\xE1te probl\xE9m."), React.createElement("div", {
        className: 'flexRow myProblem__holder'
      }, React.createElement(_Avatar["default"], {
        onClick: this.clickArea,
        activeArea: this.state.area ? 'active--' + this.state.area : ''
      }), this.state.area && React.createElement("div", {
        className: "infoBox ".concat(this.state.area ? 'infoBox--' + this.state.area : '')
      }, React.createElement("div", {
        className: 'infoBox__close',
        onClick: function onClick() {
          return _this2.closeInfoBox();
        }
      }, React.createElement(_SvgIcon["default"], {
        name: "close",
        type: "gray"
      })), this.state.availableSpecializations && this.state.availableSpecializations.map(function (specialization, i) {
        if (specialization.link) {
          return React.createElement("div", {
            className: 'infoBox__item',
            key: i
          }, React.createElement(_Link["default"], specialization.link, specialization.name));
        } else {
          return React.createElement("div", {
            className: 'infoBox__item'
          }, React.createElement("p", null, specialization.name));
        }
      })))));
    }
  }]);

  return MyProblem;
}(React.Component);

var _default = MyProblem;
exports["default"] = _default;