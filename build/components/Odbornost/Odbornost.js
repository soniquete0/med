"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var Odbornost = function Odbornost(props) {
  var _props$data = props.data,
      image = _props$data.image,
      doctorName = _props$data.doctorName,
      cite = _props$data.cite;
  return React.createElement("div", {
    className: 'odbornost'
  }, React.createElement(_DividerCircles["default"], null), React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, image && React.createElement(_Media["default"], {
    type: 'image',
    data: image
  })), React.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, React.createElement("div", {
    className: 'odbornost__contentWrapper'
  }, React.createElement("div", {
    className: 'odbornost__content'
  }, React.createElement("div", {
    className: 'horizontal-line'
  }), React.createElement("p", null, doctorName || ''), React.createElement("cite", null, cite || '')))))));
};

var _default = Odbornost;
exports["default"] = _default;