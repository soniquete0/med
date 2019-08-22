"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../partials/Link"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var PolyclinicBoxes = function PolyclinicBoxes(props) {
  var _props$data = props.data,
      title = _props$data.title,
      polyclinics = _props$data.polyclinics;
  return React.createElement("section", {
    className: 'polyclinicBoxes'
  }, React.createElement(_DividerCircles["default"], null), React.createElement("div", {
    className: 'container'
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: 'polyclinicBoxes__list row'
  }, React.createElement(_List["default"], {
    data: polyclinics
  }, function (_ref) {
    var data = _ref.data;
    return data && data.map(function (polyclinic, index) {
      var url = polyclinic.url,
          name = polyclinic.name,
          image = polyclinic.image;
      return React.createElement("div", {
        key: index,
        className: 'col-sm-12 col-lg-6 col-xl-3'
      }, React.createElement("div", {
        className: 'polyclinicBoxes__list__item'
      }, React.createElement(_Link["default"], url), React.createElement("div", {
        className: 'colorGradient'
      }), image && image.filename && React.createElement(_Media["default"], {
        data: image,
        type: 'image'
      }), name && React.createElement("div", {
        className: 'pcTitle'
      }, React.createElement("img", {
        src: "/assets/medicon/images/logo.svg",
        alt: "Medicon Logo"
      }), React.createElement("div", {
        className: 'pcTitle__title'
      }, React.createElement("h3", null, "Poliklinika"), React.createElement("div", {
        className: 'pcTitle__title__subtitle'
      }, React.createElement("span", null, name), React.createElement("span", {
        className: 'pcTitle__title__subtitle__circles'
      }, React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null)))))));
    });
  }))));
};

var _default = PolyclinicBoxes;
exports["default"] = _default;