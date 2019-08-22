"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Button = function Button(props) {
  if (props.url) {
    return React.createElement(_Link["default"], _extends({
      className: "btn ".concat(props.classes)
    }, props.url || {}), props.children, !props.noArrow && React.createElement("span", {
      className: "arrow"
    }));
  } else {
    return React.createElement("button", {
      className: "btn ".concat(props.classes)
    }, props.children, !props.noArrow && React.createElement("span", {
      className: "arrow"
    }));
  }
};

var _default = Button;
exports["default"] = _default;