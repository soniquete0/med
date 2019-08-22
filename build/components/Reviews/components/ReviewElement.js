"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReviewElement;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../partials/Media"));

var _SvgIcon = _interopRequireDefault(require("../../../partials/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ReviewElement(props) {
  var image = props.image,
      cite = props.cite,
      starCount = props.starCount;
  var rows = [];

  for (var i = 0; i < starCount; i++) {
    rows.push(React.createElement(_SvgIcon["default"], {
      name: "star",
      key: i
    }));
  }

  if (starCount < 5) {
    rows.slice(-(5 - starCount), starCount);
  }

  return React.createElement("div", {
    className: 'col-sm-12 col-md-6 col-lg-4'
  }, React.createElement("div", {
    className: 'reviews__list__element'
  }, React.createElement("div", {
    style: {
      height: '100%',
      width: '100%',
      display: 'table'
    }
  }, React.createElement("div", {
    style: {
      display: 'table-cell',
      verticalAlign: 'middle'
    }
  }, React.createElement("div", {
    className: 'row'
  }, React.createElement("div", {
    className: 'reviews__list__element__image col-3 col-md-4'
  }, image && React.createElement(_Media["default"], {
    type: 'image',
    data: image
  })), React.createElement("div", {
    className: 'col-8'
  }, React.createElement("div", {
    className: 'reviews__list__element__content'
  }, cite && React.createElement("cite", null, cite), rows && React.createElement("div", {
    className: 'stars'
  }, rows))))))));
}