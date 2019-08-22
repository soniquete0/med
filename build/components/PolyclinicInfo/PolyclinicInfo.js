"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactMarkdown = _interopRequireWildcard(require("react-markdown/with-html"));

var _Link = _interopRequireDefault(require("../../partials/Link"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PolyclinicInfo = function PolyclinicInfo(props) {
  var _props$data = props.data,
      geo = _props$data.geo,
      clinic = _props$data.clinic,
      transport = _props$data.transport,
      clinicColor = _props$data.clinicColor,
      geoUrl = _props$data.geoUrl,
      transportUrl = _props$data.transportUrl,
      phone = _props$data.phone,
      transportImage = _props$data.transportImage;
  return React.createElement("div", {
    className: 'policlinicInfo'
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "row policlinicInfo__list"
  }, React.createElement("div", {
    className: "col-12 col-lg-4"
  }, React.createElement("div", {
    className: 'policlinicInfo__item'
  }, React.createElement("img", {
    src: '/assets/medicon/images/geo.svg',
    alt: "address"
  }), React.createElement("div", {
    className: 'policlinicInfo__item--content'
  }, React.createElement("p", {
    style: {
      display: 'block'
    }
  }, geo), clinic && React.createElement("p", {
    style: clinicColor ? {
      color: "".concat(clinicColor)
    } : {}
  }, clinic), geoUrl && React.createElement(_Link["default"], _extends({}, geoUrl, {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0
    }
  }))))), React.createElement("div", {
    className: "col-12 col-lg-4"
  }, React.createElement("div", {
    className: 'policlinicInfo__item'
  }, React.createElement("img", {
    src: '/assets/medicon/images/phone.svg',
    alt: "phone nubmer"
  }), React.createElement("p", {
    className: 'policlinicInfo__item--content'
  }, phone && React.createElement(ReactMarkdown, {
    skipHtml: false,
    escapeHtml: false,
    source: phone
  })))), React.createElement("div", {
    className: "col-12 col-lg-4"
  }, React.createElement("div", {
    className: 'policlinicInfo__item'
  }, transportImage && React.createElement(_Media["default"], {
    type: 'image',
    data: transportImage
  }), React.createElement("p", {
    className: 'policlinicInfo__item--content'
  }, transport), transportUrl && React.createElement(_Link["default"], _extends({}, transportUrl, {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0
    }
  })))))));
};

var _default = PolyclinicInfo;
exports["default"] = _default;