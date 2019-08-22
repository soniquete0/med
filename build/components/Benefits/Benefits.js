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

var Benefits = function Benefits(props) {
  var items = props.data.items;
  return React.createElement(_List["default"], {
    data: items
  }, function (_ref) {
    var data = _ref.data;
    return React.createElement("section", {
      className: 'benefits'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement("div", {
      className: 'benefits__list row'
    }, data && data.map(function (benefit, i) {
      return React.createElement("div", {
        key: i,
        className: "col-12 col-sm-6 col-md-4 col-lg-3"
      }, React.createElement(_Link["default"], _extends({}, benefit.url, {
        className: 'benefits__list__element'
      }), benefit.image && benefit.image.filename && React.createElement(_Media["default"], {
        type: 'image',
        data: benefit.image
      }), benefit.text && React.createElement("p", {
        className: benefit.url && 'elBenefitHover'
      }, benefit.text)));
    }))));
  });
};

var _default = Benefits;
exports["default"] = _default;