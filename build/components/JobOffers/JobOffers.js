"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../partials/Link"));

var _getImageUrl = _interopRequireDefault(require("../../helpers/getImageUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var JobOffers = function JobOffers(props) {
  var _props$data = props.data,
      title = _props$data.title,
      offers = _props$data.offers;
  return React.createElement("div", {
    className: 'container'
  }, React.createElement("section", {
    className: 'jobOffers'
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: "jobOffers__list row"
  }, React.createElement(_List["default"], {
    data: offers
  }, function (_ref) {
    var data = _ref.data;
    return data && data.map(function (offer, index) {
      return React.createElement("div", {
        key: index,
        className: 'col-md-12 col-lg-6'
      }, React.createElement("div", {
        className: 'jobOffers__list__item'
      }, React.createElement("div", {
        style: {
          backgroundImage: offer.image && offer.image.filename && "url(".concat((0, _getImageUrl["default"])(offer.image), ")")
        }
      }, offer.title && React.createElement("p", {
        className: 'hCenterBlock',
        style: offer.image && offer.image.filename ? {
          paddingLeft: 60
        } : {}
      }, offer.title)), offer.url && React.createElement(_Link["default"], _extends({}, offer.url, {
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

var _default = JobOffers;
exports["default"] = _default;