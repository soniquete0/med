"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../partials/Link"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CrossRoads = function CrossRoads(props) {
  var items = props.data.items;
  return React.createElement("section", {
    className: 'crossRoads'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'crossRoads__wrapper row'
  }, React.createElement(_List["default"], {
    data: items
  }, function (_ref) {
    var data = _ref.data;
    return data && data.map(function (item, index) {
      return React.createElement("div", {
        className: 'col-md-12 col-lg-4',
        key: index
      }, React.createElement("div", {
        className: 'crossRoads__card'
      }, React.createElement("div", {
        className: 'crossRoads__card__img'
      }, item.image && React.createElement(_Media["default"], {
        type: "image",
        data: item.image
      })), item.text && React.createElement("p", null, item.text), item.link && React.createElement(_Link["default"], _extends({}, item.link, {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }
      }))));
    });
  }))));
};

var _default = CrossRoads;
exports["default"] = _default;