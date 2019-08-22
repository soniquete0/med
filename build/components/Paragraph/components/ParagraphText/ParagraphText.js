"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactMarkdown = _interopRequireWildcard(require("react-markdown/with-html"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var ParagraphText = function ParagraphText(props) {
  return React.createElement("div", {
    style: props.styles,
    className: "paragraph__content__text ".concat(props["class"])
  }, props.source && React.createElement(ReactMarkdown, {
    source: props.source,
    skipHtml: false,
    escapeHtml: false
  }));
};

var _default = ParagraphText;
exports["default"] = _default;