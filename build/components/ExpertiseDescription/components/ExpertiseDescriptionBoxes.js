"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../../../partials/Link"));

var _Button = _interopRequireDefault(require("../../../partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../../helpers/getImageUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ExpertiseDescriptionBoxes = function ExpertiseDescriptionBoxes(props) {
  var boxes = props.boxes;
  return React.createElement("section", {
    className: "info"
  }, React.createElement("div", {
    className: "row"
  }, boxes && boxes.map(function (box, i) {
    return React.createElement("div", {
      key: i,
      className: "col-sm-12 col-md-6"
    }, React.createElement("div", {
      className: 'info__element',
      style: {
        backgroundImage: box.image && "url(".concat((0, _getImageUrl["default"])(box.image), ")")
      }
    }, React.createElement("div", {
      className: 'info__element--cell'
    }, box.title && React.createElement("h5", {
      style: box.textColor ? {
        color: box.textColor
      } : {}
    }, box.title), !box.url2 && !box.url3 && React.createElement("div", {
      style: {
        maxWidth: 260
      }
    }, React.createElement(_Button["default"], {
      url: box.url1,
      classes: 'btn--whiteBorder'
    }, box.url1Title ? box.url1Title : 'více informací')), (box.url2 || box.url3) && React.createElement("div", {
      style: {
        paddingLeft: 20
      }
    }, box.url1 && (box.url2 || box.url3) && React.createElement(_Link["default"], _extends({}, box.url1, {
      className: 'downloadLink',
      style: box.textColor ? {
        color: box.textColor
      } : {}
    }), box.url1Title ? box.url1Title : 'více informací'), box.url2 && React.createElement(_Link["default"], _extends({}, box.url2, {
      className: 'downloadLink',
      style: box.textColor ? {
        color: box.textColor
      } : {}
    }), box.url2Title ? box.url2Title : 'více informací'), box.url3 && React.createElement(_Link["default"], _extends({}, box.url3, {
      className: 'downloadLink',
      style: box.textColor ? {
        color: box.textColor
      } : {}
    }), box.url3Title ? box.url3Title : 'více informací'))), React.createElement("div", {
      className: 'info__element--colorGradient'
    })));
  })));
};

var _default = ExpertiseDescriptionBoxes;
exports["default"] = _default;