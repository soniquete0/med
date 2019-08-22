"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactMarkdown = _interopRequireWildcard(require("react-markdown"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../helpers/getImageUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var RegistrationBlock = function RegistrationBlock(props) {
  var _props$data = props.data,
      title = _props$data.title,
      text = _props$data.text,
      btnTitle = _props$data.btnTitle,
      btnUrl = _props$data.btnUrl,
      conditionsFile = _props$data.conditionsFile;
  return React.createElement("div", {
    className: 'registration-block'
  }, React.createElement("div", {
    className: "container"
  }, title && React.createElement("h3", null, title), text && React.createElement(ReactMarkdown, {
    source: text
  }), btnTitle && btnUrl && React.createElement("div", {
    className: 'registration-block__btn-holder'
  }, React.createElement(_Button["default"], {
    url: btnUrl,
    classes: 'btn--blueBorder'
  }, btnTitle)), conditionsFile && conditionsFile.filename && React.createElement("a", {
    download: true,
    target: '_blank',
    href: (0, _getImageUrl["default"])(conditionsFile),
    className: 'registration-block__conditions'
  }, "V\u0161eobecn\xE9 obchodn\xED podm\xEDnky")));
};

var _default = RegistrationBlock;
exports["default"] = _default;