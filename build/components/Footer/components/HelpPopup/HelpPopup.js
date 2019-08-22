"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

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

var HelpPopup = function (_React$Component) {
  _inherits(HelpPopup, _React$Component);

  function HelpPopup(props) {
    var _this;

    _classCallCheck(this, HelpPopup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HelpPopup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleList", function () {
      _this.setState({
        active: !_this.state.active
      });
    });

    _this.state = {
      active: false
    };
    return _this;
  }

  _createClass(HelpPopup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        className: "helpPopup ".concat(this.state.active ? 'helpPopup--active' : '', " ")
      }, React.createElement("div", {
        className: 'helpPopup__main',
        style: {
          backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)'
        },
        onClick: function onClick() {
          return _this2.toggleList();
        }
      }, React.createElement("h4", null, "Pot\u0159ebujete poradit?")), React.createElement("ul", {
        className: 'helpPopup__list'
      }, React.createElement("li", {
        style: {
          backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)'
        }
      }, React.createElement("p", null, "Poliklinika Bud\u011Bjovick\xE1"), React.createElement("a", {
        href: "tel:+420261006111"
      }, "+420 261 006 111")), React.createElement("li", {
        style: {
          backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)'
        }
      }, React.createElement("p", null, "Poliklinika Hole\u0161ovice"), React.createElement("a", {
        href: "tel:+420227777677"
      }, "+420 227 777 677")), React.createElement("li", {
        style: {
          backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)'
        }
      }, React.createElement("p", null, "Poliklinika Vyso\u010Dany"), React.createElement("a", {
        href: "tel:+420266006211"
      }, "+420 266 006 211")), React.createElement("li", {
        style: {
          backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)'
        }
      }, React.createElement("p", null, "Poliklinika Zelen\xFD pruh"), React.createElement("a", {
        href: "tel:+420234105111"
      }, "+420 234 105 111"))));
    }
  }]);

  return HelpPopup;
}(React.Component);

exports["default"] = HelpPopup;