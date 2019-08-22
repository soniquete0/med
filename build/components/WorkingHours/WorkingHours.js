"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var WorkingHours = function WorkingHours(props) {
  return React.createElement(_List["default"], {
    data: props.data.items
  }, function (_ref) {
    var data = _ref.data;
    return React.createElement("div", {
      className: "workingHours"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: 'workingHours__title'
    }, React.createElement("h4", null, props && props.data && props.data.title || '')), React.createElement("table", null, React.createElement("tbody", null, data && data.map(function (item, index) {
      return React.createElement(React.Fragment, {
        key: index
      }, React.createElement("tr", {
        className: 'mobileHeading'
      }, React.createElement("td", {
        colSpan: 3
      }, item.day)), React.createElement("tr", {
        className: 'normalRow'
      }, React.createElement("td", null, item.day), React.createElement("td", null, React.createElement("p", null, item.morningHours), React.createElement("p", null, item.morningHoursDescription)), React.createElement("td", null, React.createElement(_DividerCircles["default"], null)), React.createElement("td", null, React.createElement("p", null, item.eveningHours), React.createElement("p", null, item.eveningHoursDescription))));
    })))));
  });
};

var _default = WorkingHours;
exports["default"] = _default;