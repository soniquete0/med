"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactMarkdown = _interopRequireWildcard(require("react-markdown"));

var _List = _interopRequireDefault(require("../List"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

var _title = _interopRequireDefault(require("./components/title"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PolyclinicsList = function (_React$Component) {
  _inherits(PolyclinicsList, _React$Component);

  function PolyclinicsList(props) {
    var _this;

    _classCallCheck(this, PolyclinicsList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PolyclinicsList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "filterServices", function (services, index) {
      services = services && services.length > 0 && services.split('\n').filter(function (service, i) {
        return i <= 8;
      }).join('\n') || '';
      return services;
    });

    _defineProperty(_assertThisInitialized(_this), "getServicesLength", function (services) {
      return services.split('\n').length;
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDisplayServices", function (index) {
      _this.setState({
        displayAllServices: index === null ? false : true,
        activeCard: index
      });
    });

    _this.state = {
      displayAllServices: false,
      activeCard: null
    };
    return _this;
  }

  _createClass(PolyclinicsList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var clinics = this.props.data.clinics;
      return React.createElement("section", {
        className: "polyclinicsList"
      }, React.createElement(_List["default"], {
        data: clinics
      }, function (_ref) {
        var data = _ref.data;
        return data && data.map(function (clinic, index) {
          return React.createElement("div", {
            className: 'pcitem',
            key: index
          }, React.createElement("div", {
            className: "fullWidthContainer"
          }, React.createElement("div", {
            className: "container"
          }, React.createElement("div", {
            className: "pcitem__wrapper"
          }, React.createElement("div", {
            className: 'pcitem__img'
          }, clinic.image && React.createElement(_Media["default"], {
            data: clinic.image,
            type: "image"
          })), React.createElement("div", {
            className: 'pcitem__info'
          }, React.createElement(_title["default"], {
            name: clinic.name
          }), React.createElement("div", {
            className: "pcitem__info__details"
          }, React.createElement("div", {
            className: "pcitem__info__details__item"
          }, React.createElement("img", {
            src: "../../../assets/medicon/images/geoIcon.svg",
            alt: "Medicon GeoLocation Icon"
          }), React.createElement("div", null, React.createElement("p", null, clinic.address && clinic.address, " ", React.createElement("br", null), clinic.district && clinic.district), clinic.clinic && React.createElement("p", {
            style: clinic.clinicColor ? {
              color: "".concat(clinic.clinicColor)
            } : {}
          }, clinic.clinic))), React.createElement("div", {
            className: "pcitem__info__details__item"
          }, React.createElement("img", {
            src: "../../../assets/medicon/images/phoneIcon.svg",
            alt: "Medicon Phone Icon"
          }), clinic.phone && React.createElement("p", null, clinic.phone)), React.createElement("div", {
            className: "pcitem__info__details__item"
          }, clinic.transportImage && React.createElement(_Media["default"], {
            data: clinic.transportImage,
            type: "image"
          }), !clinic.transportImage && React.createElement("img", {
            src: "../../../assets/medicon/images/metro2.png",
            alt: ""
          }), React.createElement("p", null, clinic.transport && clinic.transport, React.createElement("br", null), clinic.station && clinic.station))), React.createElement("div", {
            className: 'pcitem__info__list'
          }, React.createElement(ReactMarkdown, {
            source: _this2.state.displayAllServices && index === _this2.state.activeCard ? clinic.services : _this2.filterServices(clinic.services, index),
            renderers: {
              paragraph: function paragraph(rProps) {
                return React.createElement("ul", null, rProps.children);
              }
            }
          }), _this2.getServicesLength(clinic.services) > 9 && React.createElement("div", {
            className: 'pcitem__info__list__showMore',
            onClick: function onClick() {
              return _this2.toggleDisplayServices(index === _this2.state.activeCard ? null : index);
            }
          }, _this2.state.displayAllServices && index === _this2.state.activeCard ? 'Skrýt' : 'Další odbornosti', ' ', React.createElement("span", {
            className: "arrow"
          }))), React.createElement("div", {
            className: 'pcitem__info__desc'
          }, React.createElement("div", {
            className: 'pcitem__info__desc__txt'
          }, React.createElement(ReactMarkdown, {
            source: clinic.description,
            renderers: {
              paragraph: function paragraph(rProps) {
                return React.createElement("p", null, rProps.children);
              }
            }
          })), React.createElement("div", {
            className: 'pcitem__info__btnHolder'
          }, React.createElement(_Button["default"], {
            classes: "btn btn--blueBorder",
            url: clinic.url && clinic.url
          }, "v\xEDce informac\xED"))))))));
        });
      }));
    }
  }]);

  return PolyclinicsList;
}(React.Component);

var _default = PolyclinicsList;
exports["default"] = _default;