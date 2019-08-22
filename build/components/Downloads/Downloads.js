"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _SvgIcon = _interopRequireDefault(require("../../partials/SvgIcon"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

var _getImageUrl = _interopRequireDefault(require("../../helpers/getImageUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var Downloads = function Downloads(props) {
  var _props$data = props.data,
      title = _props$data.title,
      description = _props$data.description,
      downloads = _props$data.downloads;
  return React.createElement("div", {
    className: 'downloads'
  }, React.createElement("div", {
    className: 'container'
  }, title && React.createElement("h3", null, title), description && React.createElement("p", null, description), React.createElement("div", {
    className: "downloads__list row"
  }, React.createElement(_List["default"], {
    data: downloads
  }, function (_ref) {
    var data = _ref.data;
    return data && data.map(function (item, i) {
      return React.createElement("div", {
        className: "col-sm-12 col-md-6 col-lg-4 col-xl-3",
        key: i
      }, React.createElement("div", {
        className: 'downloads__list__element'
      }, item.title && React.createElement("p", null, item.title), item.file && React.createElement("a", {
        href: (0, _getImageUrl["default"])(item.file),
        download: true,
        target: '_blank',
        className: 'btn btn--blueBorder'
      }, "St\xE1hnout", React.createElement(_SvgIcon["default"], {
        name: 'download',
        type: 'lightBlue'
      }))));
    });
  }))), React.createElement(_DividerCircles["default"], null));
};

var _default = Downloads;
exports["default"] = _default;