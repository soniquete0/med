"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../helpers/getImageUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var InfoRectangles = function InfoRectangles(props) {
  var infoRectangles = props.data.infoRectangles;
  return React.createElement("section", {
    className: "info-rectangles"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement(_List["default"], {
    data: infoRectangles
  }, function (_ref) {
    var data = _ref.data;
    return data && data.map(function (rectangle, i) {
      return React.createElement("div", {
        key: i,
        className: "col-sm-12 col-md-6"
      }, React.createElement("div", {
        className: 'info-rectangles__item',
        style: {
          backgroundImage: rectangle.image && "url(".concat((0, _getImageUrl["default"])(rectangle.image), ")")
        }
      }, React.createElement("div", null, rectangle.title && React.createElement("h5", null, rectangle.title), React.createElement(_Button["default"], {
        classes: "btn--blueBorder",
        url: rectangle.url
      }, "v\xEDce informac\xED"))));
    });
  }))));
};

var _default = InfoRectangles;
exports["default"] = _default;