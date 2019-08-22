"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InfoElement;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../../helpers/getImageUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function InfoElement(props) {
  var title = props.title,
      gradientColor = props.gradientColor,
      image = props.image,
      button = props.button,
      titleColor = props.titleColor,
      link = props.link;
  return React.createElement("div", {
    className: 'col-sm-12 col-lg-6 col-xl-4'
  }, React.createElement("div", {
    className: 'info-boxes__list__element',
    style: {
      backgroundImage: image && "url(".concat((0, _getImageUrl["default"])(image), ")")
    }
  }, React.createElement("div", {
    className: 'info-boxes__list__element__content'
  }, title && React.createElement("h5", {
    style: {
      color: "".concat(titleColor)
    }
  }, title), button && React.createElement(_Button["default"], {
    url: link,
    classes: 'btn--fullWidth ' + button
  }, "v\xEDce informac\xED")), gradientColor && React.createElement("div", {
    className: 'info-boxes__list__element--colorGradient',
    style: {
      background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, ".concat(gradientColor, " 100%)")
    }
  })));
}