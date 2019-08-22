"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

var _Link = _interopRequireDefault(require("../../partials/Link"));

var _Loader = _interopRequireDefault(require("../../partials/Loader"));

var _testEmail = _interopRequireDefault(require("../../helpers/testEmail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    pageData @client\n    languageData @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GET_CONTEXT = (0, _graphqlTag["default"])(_templateObject());

var ContactForm = function (_React$Component) {
  _inherits(ContactForm, _React$Component);

  function ContactForm(props) {
    var _this;

    _classCallCheck(this, ContactForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "changeInputValue", function (e) {
      var newState = _objectSpread({}, _this.state, {
        formValues: _objectSpread({}, _this.state.formValues, _defineProperty({}, e.target.name, e.target.value))
      });

      _this.setState(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "resetForm", function () {
      _this.setState({
        formStatus: null,
        formErrorMessage: null,
        formValues: {
          name: '',
          email: '',
          message: '',
          agreement: false
        },
        errors: {
          name: null,
          email: null,
          message: null
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function (e, subject) {
      e.preventDefault();

      if (_this.isValid()) {
        var data = new FormData();
        data.append('firstName', _this.state.formValues.name);
        data.append('lastName', '');
        data.append('email', _this.state.formValues.email);
        data.append('phone', '-');
        data.append('text', _this.state.formValues.message);
        data.append('url', window.location.href);
        data.append('subject', subject);
        data.append('formType', 'contact');

        try {
          _axios["default"].post(process.env.REACT_APP_REST_API_URL + '/inquiry/upload', data).then(function (response) {
            _this.setState(_objectSpread({}, _this.state, {
              formStatus: 'success'
            }));
          })["catch"](function (err) {
            _this.setState(_objectSpread({}, _this.state, {
              formStatus: 'error',
              formErrorMessage: err.toString()
            }));
          });
        } catch (e) {
          return _this.setState(_objectSpread({}, _this.state, {
            formStatus: 'error',
            formErrorMessage: 'Network Problem'
          }));
        }

        _this.resetForm();
      }
    });

    _this.state = {
      formStatus: null,
      formErrorMessage: null,
      formValues: {
        name: '',
        email: '',
        message: '',
        agreement: false
      },
      errors: {
        name: null,
        email: null,
        message: null
      }
    };
    return _this;
  }

  _createClass(ContactForm, [{
    key: "isValid",
    value: function isValid() {
      var _this2 = this;

      var valid = true;

      var newError = _objectSpread({}, this.state.errors);

      Object.keys(newError).forEach(function (field) {
        if (field === 'agreement') {
          newError[field] = _this2.state.formValues[field] === false ? 'Tento údaj je povinný' : '';
        }

        if (field === 'email') {
          if (_this2.state.formValues[field] === '') {
            newError[field] = 'Tento údaj je povinný';
          } else if (_this2.state.formValues[field] !== '' && !(0, _testEmail["default"])(_this2.state.formValues[field])) {
            newError[field] = 'not an email';
          } else {
            newError[field] = '';
          }
        } else {
          newError[field] = _this2.state.formValues[field] === '' ? 'Tento údaj je povinný' : '';
        }

        if (newError[field] !== '') {
          valid = false;
        }
      });
      this.setState({
        errors: newError
      });
      return valid;
    }
  }, {
    key: "toggleAgreement",
    value: function toggleAgreement() {
      this.setState(_objectSpread({}, this.state, {
        formValues: _objectSpread({}, this.state.formValues, {
          agreement: !this.state.formValues.agreement
        })
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$data = this.props.data,
          gdprLink = _this$props$data.gdprLink,
          title = _this$props$data.title;

      var _this$state = this.state,
          _this$state$formValue = _this$state.formValues,
          name = _this$state$formValue.name,
          email = _this$state$formValue.email,
          message = _this$state$formValue.message,
          agreement = _this$state$formValue.agreement,
          errors = _extends({}, _this$state.errors),
          formStatus = _this$state.formStatus;

      return React.createElement("div", {
        className: 'fullWidthContainer'
      }, React.createElement(_reactApollo.Query, {
        query: GET_CONTEXT
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;

        if (loading) {
          return React.createElement(_Loader["default"], null);
        }

        if (error) {
          return 'Error...';
        }

        var pageData = data.pageData,
            languageData = data.languageData;
        var code = languageData.code;
        return React.createElement("section", {
          className: 'contactForm form'
        }, React.createElement("div", {
          className: 'container'
        }, React.createElement("h3", {
          className: 'gradientHeading'
        }, title), React.createElement("form", {
          method: 'POST',
          onSubmit: function onSubmit(e) {
            return _this3.submit(e, pageData.name);
          }
        }, React.createElement("div", {
          className: 'form__row form__row--first'
        }, React.createElement("div", null, React.createElement("div", {
          className: "form__input active   ".concat(errors.name ? 'error' : '')
        }, React.createElement("input", {
          value: name,
          type: "text",
          name: "name",
          className: "".concat(_this3.state.formValues.name ? 'active' : ''),
          onChange: function onChange(e) {
            return _this3.changeInputValue(e);
          }
        }), React.createElement("span", {
          className: 'form__input__label'
        }, errors.name ? errors.name : 'Jméno'), React.createElement("div", {
          className: 'form__input__bar'
        }))), React.createElement("div", null, React.createElement("div", {
          className: "form__input ".concat(errors.email ? 'error' : '', " ")
        }, React.createElement("input", {
          value: email,
          type: "email",
          name: "email",
          className: "".concat(_this3.state.formValues.email ? 'active' : '', " "),
          onChange: function onChange(e) {
            return _this3.changeInputValue(e);
          }
        }), React.createElement("span", {
          className: 'form__input__label'
        }, errors.email ? errors.email : 'E-mail'), React.createElement("div", {
          className: 'form__input__bar'
        })))), React.createElement("div", {
          className: "form__textarea  ".concat(errors.message ? 'error' : '', " ")
        }, React.createElement("label", null, errors.message ? errors.message : 'Zpráva'), React.createElement("textarea", {
          name: "message",
          onChange: function onChange(e) {
            return _this3.changeInputValue(e);
          },
          value: message
        })), React.createElement("div", {
          className: 'form__messageHolder',
          style: formStatus !== null ? {
            padding: '4rem 0'
          } : {}
        }, formStatus === 'error' && React.createElement("div", {
          className: 'form__message form__message--error'
        }, React.createElement("p", null, code === 'en' ? 'There was an error.' : 'Během odesílání formuláře se vyskytla chyba.'), _this3.state.formErrorMessage && React.createElement("p", null, _this3.state.formErrorMessage)), formStatus === 'success' && React.createElement("div", {
          className: 'form__message form__message--success'
        }, code === 'en' ? 'Thank You for contacting us.' : 'Děkujeme za odeslání formuláře. Brzy se Vám ozveme.')), React.createElement("div", {
          className: 'form__terms'
        }, React.createElement("div", null, React.createElement("input", {
          className: 'checkbox',
          id: "styled-checkbox-1",
          type: "checkbox",
          checked: agreement,
          onChange: function onChange(e) {
            return _this3.toggleAgreement();
          }
        }), React.createElement("label", {
          htmlFor: "styled-checkbox-1"
        })), React.createElement("div", null, "Souhlas\xEDm se ", React.createElement(_Link["default"], gdprLink, "zpracov\xE1n\xEDm osobn\xEDch"), " \xFAdaj\u016F.")), React.createElement("div", {
          className: 'flexRow flexAlign--center'
        }, React.createElement("button", {
          className: "btn btn--blueBkg",
          type: "submit",
          disabled: !_this3.state.formValues.agreement
        }, "Odeslat")))));
      }));
    }
  }]);

  return ContactForm;
}(React.Component);

var _default = ContactForm;
exports["default"] = _default;