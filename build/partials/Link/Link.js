"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactAdopt = require("react-adopt");

var _reactApollo = require("react-apollo");

var _reactRouterDom = require("react-router-dom");

var _Loader = _interopRequireDefault(require("../Loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query pagesUrls($language: ID!, $websiteId: ID!) {\n    pagesUrls(where: { language: $language, websiteId: $websiteId }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    languageData @client\n    websiteData @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var isExternalLink = function isExternalLink(url) {
  var pattern = /^https?|^www|^mailto:|^tel:|^sms:|^call:/gi;
  return pattern.test(url);
};

var GET_CONTEXT = (0, _graphqlTag["default"])(_templateObject());
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
      return render({
        loading: true
      });
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
var GET_PAGES_URLS = (0, _graphqlTag["default"])(_templateObject2());

var ComposerLink = function ComposerLink(props) {
  var children = props.children,
      urlNewWindow = props.urlNewWindow,
      url = props.url,
      query = props.query,
      pageId = props.pageId,
      dynamic = props.dynamic,
      args = _objectWithoutProperties(props, ["children", "urlNewWindow", "url", "query", "pageId", "dynamic"]);

  return React.createElement(ComposedQuery, null, function (_ref4) {
    var _ref4$getPagesUrls = _ref4.getPagesUrls,
        loading = _ref4$getPagesUrls.loading,
        error = _ref4$getPagesUrls.error,
        data = _ref4$getPagesUrls.data;

    if (loading) {
      return React.createElement(_Loader["default"], null);
    }

    if (error) {
      return "Error: ".concat(error);
    }

    var pageUrlObj;
    var pagesUrls = data.pagesUrls;

    if (pagesUrls) {
      pageUrlObj = pagesUrls.find(function (u) {
        return u.page === pageId || u.url === url;
      });
    }

    if (isExternalLink(url) || args.forceHtml || urlNewWindow) {
      return React.createElement("a", _extends({}, args, {
        style: props.style,
        target: urlNewWindow ? '_blank' : '',
        href: isExternalLink(url) && url || pageUrlObj && pageUrlObj.url || '#'
      }), children);
    } else {
      return React.createElement(_reactRouterDom.NavLink, _extends({
        activeClassName: 'navItemActive',
        to: dynamic && url || (pageUrlObj ? "".concat(pageUrlObj.url).concat(query ? "?".concat(query) : '') : '#'),
        style: props.style
      }, args), children);
    }
  });
};

var _default = ComposerLink;
exports["default"] = _default;