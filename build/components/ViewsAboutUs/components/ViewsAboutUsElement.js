"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ViewsAboutUsElement;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../../../partials/Link"));

var _Media = _interopRequireDefault(require("../../../partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ViewsAboutUsElement(props) {
  var url = props.url,
      link = props.link,
      cite = props.cite,
      image = props.image;
  return React.createElement("div", {
    className: "col-sm-12 col-md-6 col-lg-4"
  }, React.createElement("div", {
    className: "viewsAboutUs__list__element"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-4 col-md-5"
  }, React.createElement("div", null, image && React.createElement(_Media["default"], {
    type: 'image',
    data: image
  }))), React.createElement("div", {
    className: "col-8 col-md-7"
  }, React.createElement("div", {
    className: 'viewsAboutUs__list__element__content'
  }, React.createElement("div", {
    style: {
      display: 'table-cell',
      verticalAlign: 'middle'
    }
  }, React.createElement("div", {
    className: "row"
  }, cite && React.createElement("cite", null, cite)), React.createElement("div", {
    className: "row"
  }, React.createElement(_Link["default"], url, "Zdroj: ", React.createElement("strong", null, link)))))), React.createElement(_Link["default"], _extends({
    className: 'viewsAboutUs__list__element__link'
  }, url)))));
}