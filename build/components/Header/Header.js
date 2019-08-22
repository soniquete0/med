"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactAdopt = require("react-adopt");

var _reactApollo = require("react-apollo");

var _Link = _interopRequireDefault(require("../../partials/Link"));

var _Loader = _interopRequireDefault(require("../../partials/Loader"));

var _Hamburger = _interopRequireDefault(require("./components/Hamburger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query pagesUrls($language: ID!, $websiteId: ID!) {\n    pagesUrls(where: { language: $language, websiteId: $websiteId }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GET_CONTEXT = (0, _graphqlTag["default"])(_templateObject());
var GET_PAGES_URLS = (0, _graphqlTag["default"])(_templateObject2());
var ComposedQuery = (0, _reactAdopt.adopt)({
  context: function context(_ref) {
    var render = _ref.render;
    return React.createElement(_reactApollo.Query, {
      query: GET_CONTEXT
    }, function (_ref2) {
      var data = _ref2.data;
      return render(data);
    });
  },
  getPagesUrls: function getPagesUrls(_ref3) {
    var render = _ref3.render,
        _ref3$context = _ref3.context,
        languageData = _ref3$context.languageData,
        websiteData = _ref3$context.websiteData;

    if (!(languageData && websiteData)) {
      return render({});
    }

    return React.createElement(_reactApollo.Query, {
      query: GET_PAGES_URLS,
      variables: {
        language: languageData.id,
        websiteId: websiteData.id
      }
    }, function (data) {
      return render(data);
    });
  }
});

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "logo", void 0);

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      _this.setState({
        menuActive: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMenu", function () {
      _this.setState({
        menuActive: !_this.state.menuActive
      });
    });

    _this.logo = React.createRef();
    _this.state = {
      vX: 15,
      menuActive: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "getVertex",
    value: function getVertex() {
      if (window) {
        var container = 90 * window.innerWidth / 100;
        var logoWidth = this.logo.current && this.logo.current.clientWidth || 55;

        if (window.innerWidth >= 992) {
          logoWidth = this.logo.current && this.logo.current.clientWidth || 123;
        }

        if (window.innerWidth >= 1250) {
          container = 1204;
        }

        logoWidth = Math.ceil(logoWidth / 2);
        var vX = Math.ceil((window.innerWidth - container) / 2) + logoWidth;
        this.setState({
          vX: Math.ceil(vX * 100 / window.innerWidth - 1)
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getVertex();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.state.menuActive ? document.body.style.position = 'fixed' : document.body.style.position = 'static';
      return React.createElement(ComposedQuery, null, function (_ref4) {
        var _ref4$getPagesUrls = _ref4.getPagesUrls,
            loading = _ref4$getPagesUrls.loading,
            error = _ref4$getPagesUrls.error,
            data = _ref4$getPagesUrls.data,
            context = _ref4.context;

        if (!context.navigationsData || !context.languageData || !context.languagesData || !data || !data.pagesUrls) {
          return React.createElement(_Loader["default"], null);
        }

        if (error) {
          return "Error...".concat(error);
        }

        var navigations = context.navigationsData,
            languageCode = context.languageData.code;

        var transformedNavigations = _this2.transformNavigationsIntoTree(navigations, data.pagesUrls);

        var mainNav = 'main';
        var secNav = 'secondary';
        var mainNavItems = transformedNavigations && transformedNavigations[mainNav] ? transformedNavigations[mainNav] : [];
        var secNavItems = transformedNavigations && transformedNavigations[secNav] ? transformedNavigations[secNav] : [];
        return React.createElement("header", {
          className: "header ".concat(_this2.state.menuActive ? 'menuActive' : '')
        }, React.createElement("div", {
          className: "container"
        }, React.createElement("div", {
          className: 'header__wrapper'
        }, React.createElement("div", {
          className: 'header__logo',
          ref: _this2.logo
        }, React.createElement(_Link["default"], {
          url: "".concat(context.websiteData.urlMask === '/' ? '' : context.websiteData.urlMask, "/").concat(context.languageData.code)
        }, React.createElement("img", {
          src: "/assets/medicon/images/logo.svg",
          alt: "Medicon Logo"
        }))), React.createElement("nav", null, React.createElement("ul", null, mainNavItems && mainNavItems.map(function (navItem, i) {
          return React.createElement("li", {
            key: i
          }, React.createElement(_Link["default"], navItem.url, navItem.name || navItem.title));
        })), React.createElement(_Hamburger["default"], {
          active: _this2.state.menuActive,
          onClick: _this2.toggleMenu
        })))), React.createElement("div", {
          className: 'header__iso'
        }, React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none"
        }, React.createElement("polygon", {
          fill: "white",
          points: "0,0 0,50 ".concat(_this2.state.vX, ",100 100,0")
        }))), React.createElement("div", {
          className: "hiddenMenu ".concat(_this2.state.menuActive ? 'hiddenMenu--active' : '')
        }, React.createElement("div", {
          className: 'hiddenMenu__wrapper'
        }, React.createElement("ul", null, secNavItems && secNavItems.map(function (navItem, i) {
          return React.createElement("li", {
            key: i
          }, React.createElement(_Link["default"], _extends({}, navItem.url, {
            onClick: function onClick() {
              return _this2.closeMenu();
            }
          }), navItem.name || navItem.title));
        })))));
      });
    }
  }, {
    key: "transformNavigationsIntoTree",
    value: function transformNavigationsIntoTree(navigation, urls) {
      var _this3 = this;

      var tree = {};

      if (!navigation || navigation.length < 1) {
        return null;
      }

      navigation.forEach(function (nav) {
        tree[nav.name] = _this3.buildNavTree(nav.nodes, null, urls);
      });
      return tree;
    }
  }, {
    key: "buildNavTree",
    value: function buildNavTree(nav, parent, urls) {
      var _this4 = this;

      var res = [];
      nav.forEach(function (node) {
        if (node.parent === parent) {
          var url = urls.find(function (u) {
            return u.page === node.page;
          });

          var item = _objectSpread({}, node, {}, url);

          if (node.page) {
            var children = _this4.buildNavTree(nav, node.page, urls);

            if (children && children.length > 0) {
              item.children = children;
            }
          }

          if (node.title && node.link) {
            item.url = node.link;
          }

          item.url = {
            url: item.url,
            pageId: item.id
          };
          res.push(item);
        }
      });
      res.sort(function (a, b) {
        return a.order - b.order;
      });
      return res;
    }
  }]);

  return Header;
}(React.Component);

var _default = Header;
exports["default"] = _default;