"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactMarkdown = _interopRequireWildcard(require("react-markdown"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var Highlight = function Highlight(props) {
  var _props$data = props.data,
      text = _props$data.text,
      url = _props$data.url,
      description = _props$data.description,
      urlTitle = _props$data.urlTitle;
  return React.createElement("div", {
    className: "highlight"
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'highlight__content'
  }, React.createElement("img", {
    src: "/assets/medicon/images/info.png",
    alt: "info"
  }), React.createElement("div", null, text && React.createElement("p", null, text), description && React.createElement(ReactMarkdown, {
    className: 'highlight__content--description',
    source: description
  })), url && React.createElement(_Button["default"], {
    classes: 'btn--whiteBorder',
    url: url
  }, urlTitle && urlTitle || 'more info'))));
};

var _default = Highlight;
exports["default"] = _default;