"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../../partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var ParagraphMedia = function ParagraphMedia(props) {
  return React.createElement("div", {
    style: props.styles,
    className: "paragraph__content__images ".concat(props["class"])
  }, props.source && React.createElement(_Media["default"], {
    type: 'image',
    data: props.source,
    width: props.width,
    height: '438'
  }));
};

var _default = ParagraphMedia;
exports["default"] = _default;