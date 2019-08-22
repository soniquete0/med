"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

var _reactAdopt = require("react-adopt");

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../partials/Link"));

var _Social = _interopRequireDefault(require("./components/Social"));

var _Loader = _interopRequireDefault(require("../../partials/Loader"));

var _HelpPopup = _interopRequireDefault(require("./components/HelpPopup"));

var _CookiePopup = _interopRequireDefault(require("./components/CookiePopup"));

var _TemporaryPopup = _interopRequireDefault(require("./components/TemporaryPopup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).call(this, props));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$data = this.props.data,
          social = _this$props$data.social,
          socialIcons = _this$props$data.socialIcons,
          company = _this$props$data.company,
          url = _this$props$data.url,
          text = _this$props$data.text;
      return React.createElement("footer", {
        className: 'footer'
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: "flexRow flexAlign--space-between"
      }, React.createElement(ComposedQuery, null, function (_ref4) {
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

        var transformedNavigations = _this.transformNavigationsIntoTree(navigations, data.pagesUrls);

        var footerFirst = 'footerFirst';
        var footerSecond = 'footerSecond';
        var footerThird = 'footerThird';
        var footerFirstItems = transformedNavigations && transformedNavigations[footerFirst] ? transformedNavigations[footerFirst] : [];
        var footerSecondItems = transformedNavigations && transformedNavigations[footerSecond] ? transformedNavigations[footerSecond] : [];
        var footerThirdItems = transformedNavigations && transformedNavigations[footerThird] ? transformedNavigations[footerThird] : [];
        return React.createElement(React.Fragment, null, React.createElement(_HelpPopup["default"], null), React.createElement(_TemporaryPopup["default"], null), React.createElement(_CookiePopup["default"], {
          lang: context.languageData.code
        }), React.createElement("ul", {
          className: 'footer__list'
        }, footerFirstItems && footerFirstItems.map(function (navItem, i) {
          return React.createElement("li", {
            key: i
          }, React.createElement(_Link["default"], navItem.url, navItem.name || navItem.title));
        })), React.createElement("ul", {
          className: 'footer__list'
        }, footerSecondItems && footerSecondItems.map(function (navItem, i) {
          return React.createElement("li", {
            key: i
          }, React.createElement(_Link["default"], navItem.url, navItem.name || navItem.title));
        })), React.createElement("ul", {
          className: 'footer__list'
        }, footerThirdItems && footerThirdItems.map(function (navItem, i) {
          return React.createElement("li", {
            key: i
          }, React.createElement(_Link["default"], navItem.url, navItem.name || navItem.title));
        })));
      }), social && React.createElement(_List["default"], {
        data: socialIcons
      }, function (_ref5) {
        var data = _ref5.data;
        return React.createElement(_Social["default"], {
          info: social,
          icons: data
        });
      }))), React.createElement("div", {
        className: "bottom"
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: "copyrights"
      }, company && React.createElement("p", null, company), text && url && React.createElement(_Link["default"], url, text)))));
    }
  }, {
    key: "transformNavigationsIntoTree",
    value: function transformNavigationsIntoTree(navigation, urls) {
      var _this2 = this;

      var tree = {};

      if (!navigation || navigation.length < 1) {
        return null;
      }

      navigation.forEach(function (nav) {
        tree[nav.name] = _this2.buildNavTree(nav.nodes, null, urls);
      });
      return tree;
    }
  }, {
    key: "buildNavTree",
    value: function buildNavTree(nav, parent, urls) {
      var _this3 = this;

      var res = [];
      nav.forEach(function (node) {
        if (node.parent === parent) {
          var url = urls.find(function (u) {
            return u.page === node.page;
          });

          var item = _objectSpread({}, node, {}, url);

          if (node.page) {
            var children = _this3.buildNavTree(nav, node.page, urls);

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

  return Footer;
}(React.Component);

var _default = Footer;
exports["default"] = _default;