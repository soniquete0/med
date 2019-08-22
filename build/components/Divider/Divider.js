"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Divider;

var React = _interopRequireWildcard(require("react"));

var _isBackoffice = _interopRequireDefault(require("../../helpers/isBackoffice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function Divider(props) {
  var _props$data = props.data,
      marginTop = _props$data.marginTop,
      marginBottom = _props$data.marginBottom,
      displayDots = _props$data.displayDots;
  return (0, _isBackoffice["default"])() || displayDots ? React.createElement("div", {
    className: "dividerCircles",
    style: {
      marginTop: parseInt(marginTop, 10) > 0 ? parseInt(marginTop, 10) : 0,
      marginBottom: parseInt(marginBottom, 10) > 0 ? parseInt(marginBottom, 10) : 0
    }
  }, React.createElement("div", null)) : React.createElement(React.Fragment, null);
}