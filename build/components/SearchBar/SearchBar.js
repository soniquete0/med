"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _SvgIcon = _interopRequireDefault(require("../../partials/SvgIcon"));

var _BlogSearchResults = _interopRequireDefault(require("./components/BlogSearchResults"));

var _DoctorSearchResults = _interopRequireDefault(require("./components/DoctorSearchResults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var doctorSearchResultsTemplate = {
  datasourceId: 'cjrkew3eu02gp0d71xoi0i5em',
  data: {
    name: '%doctorPersonalInformation,firstName% %doctorPersonalInformation,lastName% ',
    speciality: '%doctorPersonalInformation,expertises,0,name% ',
    clinic: '%doctorPersonalInformation,polyclinic,name% ',
    workingHours: '%doctorPersonalInformation,workingHours% ',
    link: {
      url: '/medicon/cs/ds:doctor',
      pageId: 'cjoy8qfdl001b0845fwgt2200',
      urlNewWindow: false
    }
  },
  filters: []
};

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchBar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "searchBar", void 0);

    _defineProperty(_assertThisInitialized(_this), "input", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        focused: !_this.state.focused
      });
    });

    _this.state = {
      query: '',
      focused: false,
      doctorResults: null,
      blogResults: null
    };
    _this.input = React.createRef();
    _this.searchBar = React.createRef();
    _this.checkDoctorResults = (0, _lodash.debounce)(_this.checkDoctorResults, 50).bind(_assertThisInitialized(_this));
    _this.checkBlogResults = (0, _lodash.debounce)(_this.checkBlogResults, 50).bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.clearData = (0, _lodash.debounce)(_this.clearData, 600).bind(_assertThisInitialized(_this));
    _this.changeSearchQuery = (0, _lodash.debounce)(_this.changeSearchQuery, 600).bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SearchBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleClick, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClick, false);
    }
  }, {
    key: "checkDoctorResults",
    value: function checkDoctorResults(doctorResults) {
      if (doctorResults !== this.state.doctorResults) {
        return this.setState({
          doctorResults: doctorResults
        });
      }
    }
  }, {
    key: "checkBlogResults",
    value: function checkBlogResults(blogResults) {
      if (blogResults !== this.state.blogResults) {
        return this.setState({
          blogResults: blogResults
        });
      }
    }
  }, {
    key: "changeSearchQuery",
    value: function changeSearchQuery(query) {
      this.setState({
        query: query
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      if (this.searchBar.current && this.searchBar && this.searchBar.current.contains(e.target)) {
        return;
      } else {
        this.changeSearchQuery('');
      }
    }
  }, {
    key: "clearData",
    value: function clearData() {
      this.setState({
        focused: false,
        query: ''
      });
      this.input.current.value = '';
    }
  }, {
    key: "renderNoResults",
    value: function renderNoResults() {
      if (!this.state.doctorResults && !this.state.blogResults) {
        return React.createElement("div", {
          className: 'searchBarResults__noResults'
        }, "Bohu\u017Eel jsme nena\u0161li \u017E\xE1dn\xE9 vysledky.");
      } else {
        return React.createElement(React.Fragment, null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          barColor = _this$props.barColor;

      var doctorSearchResults = _objectSpread({}, doctorSearchResultsTemplate);

      if (this.props.doctorsLink) {
        doctorSearchResults = _objectSpread({}, doctorSearchResults, {
          data: _objectSpread({}, doctorSearchResults.data, {
            link: this.props.doctorsLink
          })
        });
      }

      return React.createElement("div", {
        ref: this.searchBar,
        className: "searchBar ".concat(this.state.focused ? 'searchBar--focused' : '', " searchBar--").concat(barColor)
      }, React.createElement("div", {
        className: 'searchBar__input'
      }, React.createElement("input", {
        type: "text",
        ref: this.input,
        placeholder: placeholder,
        onFocus: function onFocus() {
          return _this2.handleFocus();
        },
        onBlur: function onBlur() {
          return _this2.handleFocus();
        },
        onChange: function onChange(e) {
          return _this2.changeSearchQuery(e.target.value);
        }
      }), React.createElement(_SvgIcon["default"], {
        name: 'search',
        type: barColor
      })), React.createElement("div", {
        className: "searchBar__bar"
      }), this.state.query.length > 1 && React.createElement("div", {
        className: "searchBarResults ".concat(this.state.query.length > 1 ? 'active' : '')
      }, this.props.blogSearchResults && this.state.query.length > 1 && React.createElement(_BlogSearchResults["default"], {
        query: this.state.query,
        searchKeys: ['pi.page.name', 'pi.page.annotations.perex', 'pi.page.annotations.title'],
        searchResults: this.props.blogSearchResults,
        checkBlogResults: this.checkBlogResults
      }), doctorSearchResults && this.state.query.length > 1 && React.createElement(_DoctorSearchResults["default"], {
        searchResults: doctorSearchResults,
        query: this.state.query,
        searchKeys: ['di.doctorPersonalInformation.firstName', 'di.doctorPersonalInformation.lastName', 'di.doctorPersonalInformation.expertises.0.name', 'di.doctorPersonalInformation.polyclinic.name', 'di.doctorPersonalInformation.prenominal', 'di.doctorPersonalInformation.postnominal'],
        clearData: this.clearData,
        checkDoctorResults: this.checkDoctorResults
      }), this.renderNoResults()));
    }
  }]);

  return SearchBar;
}(React.Component);

var _default = SearchBar;
exports["default"] = _default;