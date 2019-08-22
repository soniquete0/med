"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactMarkdown = _interopRequireWildcard(require("react-markdown/with-html"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var ContactInfo = function ContactInfo(props) {
  var _props$data = props.data,
      address = _props$data.address,
      phones = _props$data.phones,
      emails = _props$data.emails,
      additional = _props$data.additional,
      clinic = _props$data.clinic,
      clinicColor = _props$data.clinicColor;
  var source = ['Zelená budova', 'Žlutá budova', 'Červená budova', 'Fialová budova'];
  var result = ['<b style="color: green">Zelená budova</b>', '<b style="color: #AA8F00">Žlutá budova</b>', '<b style="color: red">Červená budova</b>', '<b style="color: purple">Fialová budova</b>'];
  var finalAddress = address;

  for (var i = source.length - 1; i >= 0; i--) {
    finalAddress = finalAddress.replace("".concat(source[i]), "".concat(result[i]));
  }

  return React.createElement("div", {
    className: 'contact-info'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'contact-info__grid row'
  }, React.createElement("div", {
    className: "col-12 col-sm-6 col-lg-3"
  }, React.createElement("div", {
    className: 'contact-info__grid__element'
  }, React.createElement("img", {
    src: '/assets/medicon/images/contact-info-1.png',
    alt: "address"
  }), React.createElement("div", {
    className: 'contact-info__grid__element__content'
  }, address && React.createElement(ReactMarkdown, {
    skipHtml: false,
    escapeHtml: false,
    source: finalAddress
  }), clinic && React.createElement("p", {
    style: clinicColor ? {
      color: "".concat(clinicColor)
    } : {}
  }, clinic)))), React.createElement("div", {
    className: "col-12 col-sm-6 col-lg-3"
  }, React.createElement("div", {
    className: 'contact-info__grid__element'
  }, React.createElement("img", {
    src: '/assets/medicon/images/contact-info-2.png',
    alt: "phone number"
  }), React.createElement("div", {
    className: 'contact-info__grid__element__content'
  }, phones && React.createElement(ReactMarkdown, {
    skipHtml: false,
    escapeHtml: false,
    source: phones
  })))), React.createElement("div", {
    className: "col-12 col-sm-6 col-lg-3"
  }, React.createElement("div", {
    className: 'contact-info__grid__element'
  }, React.createElement("img", {
    src: '/assets/medicon/images/contact-info-3.png',
    alt: "e-mail"
  }), React.createElement("div", {
    className: 'contact-info__grid__element__content'
  }, emails && React.createElement(ReactMarkdown, {
    skipHtml: false,
    escapeHtml: false,
    source: emails
  })))), React.createElement("div", {
    className: "col-12 col-sm-6 col-lg-3"
  }, React.createElement("div", {
    className: 'contact-info__grid__element'
  }, React.createElement("img", {
    src: '/assets/medicon/images/contact-info-4.png',
    alt: "ICO and DIC"
  }), React.createElement("div", {
    className: 'contact-info__grid__element__content'
  }, additional && React.createElement(ReactMarkdown, {
    skipHtml: false,
    escapeHtml: false,
    source: additional
  })))))));
};

var _default = ContactInfo;
exports["default"] = _default;