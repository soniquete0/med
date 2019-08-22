"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogCard = BlogCard;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../../../partials/Link"));

var _Media = _interopRequireDefault(require("../../../partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function BlogCard(props) {
  var url = props.url,
      title = props.title,
      text = props.text,
      color = props.color,
      img = props.img;
  return React.createElement(_Link["default"], _extends({
    className: 'blogCard'
  }, url), React.createElement("h3", null, title), React.createElement("p", null, text && text.length > 80 ? text.slice(0, 80) + ' ..' : text), img && React.createElement(_Media["default"], {
    type: 'image',
    data: img
  }), React.createElement("div", {
    className: 'blogCard__colorGradient',
    style: {
      background: "linear-gradient( to bottom,rgba(125, 185, 232, 0) 0%,".concat(color, " 100%)")
    }
  }));
}