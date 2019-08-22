"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../partials/Link"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

var _Select = _interopRequireDefault(require("../../partials/Select"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var removeAccents = _interopRequireWildcard(require("remove-accents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DoctorList = function (_React$Component) {
  _inherits(DoctorList, _React$Component);

  function DoctorList(props) {
    var _this;

    _classCallCheck(this, DoctorList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DoctorList).call(this, props));
    _this.state = {
      numberOfPage: 1,
      filter: ''
    };
    _this.handleChangeSelect = _this.handleChangeSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DoctorList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var search = this.props.location.search;

      if (search.length > 0) {
        this.setFilterBySerchParam(search.split('=')[1]);
      }
    }
  }, {
    key: "handleChangeSelect",
    value: function handleChangeSelect(event) {
      var history = this.props.history;
      var slug = removeAccents(event.target.value).toLowerCase().replace(/[\W_]+/g, '-');
      this.setFilterBySerchParam(slug);
      history.push({
        search: "?clinic=".concat(slug)
      });
    }
  }, {
    key: "getCurrentPolyclinic",
    value: function getCurrentPolyclinic(current, items) {
      var polyclinics = this.getUniquePolyclinicNames(items);

      if (Array.isArray(polyclinics) && current.length > 0) {
        var polyclinic = polyclinics.find(function (pol) {
          return pol.indexOf(current) > -1;
        }) || '';
        return polyclinic;
      }

      return undefined;
    }
  }, {
    key: "getUniquePolyclinicNames",
    value: function getUniquePolyclinicNames(items) {
      return _toConsumableArray(new Set(items.map(function (item) {
        return item.clinicName.trim();
      })));
    }
  }, {
    key: "setFilterBySerchParam",
    value: function setFilterBySerchParam(param) {
      switch (true) {
        case /(vysocany)/.test(param):
          this.setState({
            filter: 'Vysočany'
          });
          break;

        case /(benesov)/.test(param):
          this.setState({
            filter: 'Benešov'
          });
          break;

        case /(budejovicka)/.test(param):
          this.setState({
            filter: 'Budějovická'
          });
          break;

        case /(zeleny-pruh)/.test(param):
          this.setState({
            filter: 'Zelený pruh'
          });
          break;

        case /holesovice/.test(param):
          this.setState({
            filter: 'Holešovice'
          });
          break;

        default:
          this.setState({
            filter: ''
          });
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$data = this.props.data,
          doctors = _this$props$data.doctors,
          title = _this$props$data.title,
          excludedDoctor = _this$props$data.excludedDoctor;
      return React.createElement(_List["default"], {
        data: doctors,
        searchedText: this.state.filter,
        exclude: {
          key: 'name',
          value: excludedDoctor
        },
        searchKeys: ['clinicName']
      }, function (_ref) {
        var getPage = _ref.getPage,
            allData = _ref.allData;

        var _getPage = getPage(_this2.state.numberOfPage, 'infinite', 6),
            items = _getPage.items,
            lastPage = _getPage.lastPage,
            allItems = _getPage.allItems;

        return items && items.length > 0 ? React.createElement("section", {
          className: 'doctorList'
        }, React.createElement("div", {
          className: 'container'
        }, title && React.createElement("h3", null, title), React.createElement(_Select["default"], {
          value: _this2.getCurrentPolyclinic(_this2.state.filter, allData),
          className: 'hCenterBlock',
          onChange: _this2.handleChangeSelect,
          defaultValue: 'Všechny polikliniky',
          items: _this2.getUniquePolyclinicNames(allData)
        }), React.createElement("div", {
          className: "doctorList__wrapper"
        }, items && items.map(function (doctor, index) {
          return React.createElement("div", {
            className: 'doctorList__item',
            key: index
          }, React.createElement("div", {
            className: 'doctorList__item__img'
          }, doctor.image && doctor.image.filename && React.createElement(_Media["default"], {
            data: doctor.image,
            type: "image"
          }) || React.createElement("img", {
            className: "avatarImg",
            src: '../../../assets/medicon/images/doctorIcon.svg',
            alt: "Medicon Doctor Icon"
          })), React.createElement("div", {
            className: 'doctorList__item__info'
          }, React.createElement("h3", null, doctor.name), doctor.field && React.createElement("div", {
            className: 'doctorList__item__info__description'
          }, React.createElement("div", {
            className: 'doctorList__item__info__description--container'
          }, React.createElement("p", null, doctor.field))), React.createElement("p", {
            className: 'doctorList__item__info--mobileField'
          }, doctor.field), React.createElement(_Link["default"], _extends({}, doctor.clinicUrl, {
            className: 'doctorList__item__info__link'
          }), doctor.clinicName), doctor.doctorUrl && doctor.doctorUrl.url && React.createElement(_Button["default"], {
            classes: "btn--blueBorder btn--small",
            url: doctor.doctorUrl
          }, "v\xEDce informac\xED")));
        })), _this2.state.numberOfPage < lastPage && React.createElement("div", {
          className: "doctorList__btnHolder"
        }, React.createElement("button", {
          className: 'btn btn--blueBkg',
          onClick: function onClick() {
            return _this2.setState({
              numberOfPage: lastPage
            });
          }
        }, "zobrazit v\xEDce")))) : React.createElement(React.Fragment, null);
      });
    }
  }]);

  return DoctorList;
}(React.Component);

var _default = (0, _reactRouterDom.withRouter)(DoctorList);

exports["default"] = _default;