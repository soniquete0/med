"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _reactApollo = require("react-apollo");

var _reactAdopt = require("react-adopt");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var R = _interopRequireWildcard(require("ramda"));

var removeAccents = _interopRequireWildcard(require("remove-accents"));

var _Loader = _interopRequireDefault(require("../../partials/Loader"));

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query localizedPages($languageId: ID! $websiteId: ID!) {\n    pages(where: { website: { id: $websiteId } }) {\n      id\n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { \n        language: { id: $languageId }\n      }) {\n        id\n        name\n        createdAt\n        content\n        annotations {\n          key\n          value\n        }\n        language {\n          id\n          code\n        }\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  {\n    pageData @client\n    languageData @client\n    websiteData @client\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query datasource($id: ID!) {\n    datasource(where: { id: $id }) {\n      id\n      type\n      schema\n      datasourceItems {\n        id\n        slug\n        content\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query frontend($url: String!, $origin: String) {\n    frontend: frontend( where: { url: $url, origin: $origin } ) {\n      website @connection(key: \"websiteData\") {\n        id\n        title\n      }\n      language @connection(key: \"languageData\") {\n        id\n        code\n        name\n      }\n      page @connection(key: \"pageData\") {\n        id\n        name\n        content\n      }\n      navigations @connection(key: \"navigationsData\") {\n        id\n        name\n        nodes {\n          id\n          page\n          title\n          link\n          order\n          parent\n          __typename\n        }\n        __typename\n      },\n      languages @connection(key: \"languages\") {\n        id\n        code\n        name\n      },\n      datasourceItems @connection(key: \"datasourceItems\") {\n        id\n        content\n        slug\n        datasource {\n          type\n        }\n      },\n      seo,\n      project {\n        id\n        components\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var escape = function escape(str) {
  return str.replace(/[\b]/g, '\\b').replace(/[\f]/g, '\\f').replace(/[\n]/g, '\\n').replace(/[\r]/g, '\\r').replace(/[\t]/g, '\\t');
};

var FRONTEND = (0, _graphqlTag["default"])(_templateObject());
var DATASOURCE = (0, _graphqlTag["default"])(_templateObject2());
var GET_CONTEXT = (0, _graphqlTag["default"])(_templateObject3());
var GET_ALL_PAGES = (0, _graphqlTag["default"])(_templateObject4());
var AllPagesComposedQuery = (0, _reactAdopt.adopt)({
  getContext: function getContext(_ref) {
    var render = _ref.render;
    return React.createElement(_reactApollo.Query, {
      query: GET_CONTEXT
    }, function (_ref2) {
      var data = _ref2.data;
      return render(data);
    });
  },
  getFrontend: function getFrontend(_ref3) {
    var render = _ref3.render,
        windowOrigin = _ref3.windowOrigin,
        locationPath = _ref3.locationPath;
    return React.createElement(_reactApollo.ApolloConsumer, null, function (client) {
      var data = client.cache.data;
      var origin = windowOrigin;
      var url = locationPath;

      if (data && data.data['$ROOT_QUERY.origin'] && data.data['$ROOT_QUERY.origin'].url && data.data['$ROOT_QUERY.origin'].origin) {
        origin = data.data['$ROOT_QUERY.origin'].origin;
        url = data.data['$ROOT_QUERY.origin'].url;
      }

      if (!windowOrigin || !locationPath) {
        return render({
          frontend: null
        });
      }

      return React.createElement(_reactApollo.Query, {
        query: FRONTEND,
        variables: {
          origin: origin,
          url: url
        }
      }, function (_ref4) {
        var frontend = _ref4.data;
        return render(frontend);
      });
    });
  },
  allPages: function allPages(_ref5) {
    var render = _ref5.render,
        frontend = _ref5.getFrontend.frontend,
        _ref5$getContext = _ref5.getContext,
        languageData = _ref5$getContext.languageData,
        websiteData = _ref5$getContext.websiteData;
    var languageId = languageData && languageData.id || frontend && frontend.language && frontend.language.id;
    var websiteId = websiteData && websiteData.id || frontend && frontend.website && frontend.website.id;

    if (!languageId || !websiteId) {
      return render({
        loading: true
      });
    }

    return React.createElement(_reactApollo.Query, {
      query: GET_ALL_PAGES,
      variables: {
        languageId: languageId,
        websiteId: websiteId
      }
    }, function (data) {
      var fetchMore = data.fetchMore;
      return render(data);
    });
  }
});

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(List)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getPaginatingFunction", function (items) {
      var getPage = function getPage(numberOfPage) {
        var paginationType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pagination';
        var pageSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
        var numberOfItems = items.length;
        var lastPage = Math.ceil(items.length / pageSize);
        var cutTo = numberOfPage * pageSize < numberOfItems ? numberOfPage * pageSize : numberOfItems;
        var cutFrom = numberOfPage * pageSize < numberOfItems ? cutTo - pageSize : numberOfPage - 1 && (numberOfPage - 1) * pageSize || 0;
        return {
          items: items.slice(paginationType === 'pagination' ? cutFrom : 0, cutTo),
          lastPage: lastPage,
          allItems: items
        };
      };

      return getPage;
    });

    _defineProperty(_assertThisInitialized(_this), "datasourcesList", function (data, searchedFragments, searchKeys) {
      return React.createElement(_reactApollo.Query, {
        query: DATASOURCE,
        variables: {
          id: data.datasourceId
        }
      }, function (queryData) {
        var dataShape = data.data,
            error = data.error,
            loading = data.loading;
        var datasourceItems = queryData.data.datasource && queryData.data.datasource.datasourceItems || [];
        datasourceItems = datasourceItems.map(function (item) {
          var res = _objectSpread({}, dataShape);

          if (data.orderBy) {
            res.orderBy = _this.replaceWithSourceItemValues(data.orderBy, item.content);
          }

          if (data.filters) {
            res.filters = data.filters.map(function (filter) {
              var parsedFilter = _objectSpread({}, filter);

              parsedFilter.filterBy = _this.replaceWithSourceItemValues(filter.filterBy, item.content);
              return parsedFilter;
            });
          }

          Object.keys(res).forEach(function (key) {
            if (typeof res[key] === 'string') {
              var replaced = _this.replaceWithSourceItemValues(res[key], item.content);

              res[key] = replaced;
            } else if (res[key].url) {
              var regex = /ds\:(\w+)/g;
              var result;
              var newUrl = String(res[key].url);

              while (result = regex.exec(res[key].url)) {
                if (result[1] && result[1] === queryData.data.datasource.type.toLowerCase()) {
                  newUrl = newUrl.replace(result[0], item.slug);
                }
              }

              if (newUrl !== res[key].url) {
                res[key] = {
                  url: newUrl,
                  dynamic: true
                };
              }
            }
          });
          return _objectSpread({}, res, {
            di: item.content
          });
        }).filter(function (item) {
          if (_this.props.exclude && item[_this.props.exclude.key] && item[_this.props.exclude.key] === _this.props.exclude.value) {
            return false;
          }

          return !item.filters || !item.filters.some(function (filter) {
            return !filter.filterBy.toLowerCase().includes(filter && filter.includes && filter.includes.toLowerCase());
          });
        }).filter(function (item, i) {
          return !data.limit || i < data.limit;
        });

        if (error) {
          return React.createElement("span", null, "Error...");
        }

        if (loading) {
          return React.createElement(_Loader["default"], null);
        }

        var allData = data.orderBy ? datasourceItems.sort(function (a, b) {
          if (data.order === 'DESC') {
            if (a.orderBy > b.orderBy) {
              return -1;
            }

            {
              if (a.orderBy < b.orderBy) {
                return 1;
              }
            }
            return 0;
          }

          if (a.orderBy < b.orderBy) {
            return -1;
          }

          {
            if (a.orderBy > b.orderBy) {
              return 1;
            }
          }
          return 0;
        }).map(function (item) {
          delete item.orderBy;
          return item;
        }) : datasourceItems;
        var items = allData;

        if (searchedFragments && searchedFragments.length > 0) {
          items = searchedFragments.reduce(function (filteredItems, fragment) {
            return filteredItems.filter(function (item) {
              if (!searchKeys) {
                return JSON.stringify(item).toLowerCase().includes(fragment.toLowerCase());
              }

              var flattenItem = _this.flatten(item, '', '');

              return searchKeys.reduce(function (acc, key) {
                var Key = removeAccents("".concat(flattenItem[key]).toLowerCase());
                var Fragment = removeAccents("".concat(fragment).toLowerCase());
                return acc || Key.includes(Fragment);
              }, false);
            });
          }, allData);
        }

        return _this.props.children({
          data: items,
          allData: allData,
          getPage: _this.getPaginatingFunction(items)
        });
      });
    });

    return _this;
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var origin = null;

      if (window) {
        origin = window.origin;
      }

      var _this$props = this.props,
          data = _this$props.data,
          location = _this$props.location;
      var _this$props2 = this.props,
          searchedText = _this$props2.searchedText,
          searchKeys = _this$props2.searchKeys;
      var fulltextFilter = data && data.fulltextFilter;
      var regex = /^\[([a-z]*)\]$/;
      var searchParams = typeof window !== 'undefined' && new URLSearchParams(location && location.search || '');

      if (fulltextFilter) {
        var res = regex.exec(fulltextFilter.trim());

        if (res && res[1]) {
          var textFromSearchParams = searchParams && searchParams.get(res[1]);

          if (!textFromSearchParams) {
            return this.props.children({
              data: [],
              allData: [],
              getPage: this.getPaginatingFunction([])
            });
          }

          searchedText = "".concat(searchedText ? searchedText : '', " ").concat(textFromSearchParams ? textFromSearchParams : '');
        } else {
          searchedText = "".concat(searchedText ? searchedText : '', " ").concat(fulltextFilter);
        }
      }

      var searchedFragments = searchedText && searchedText.trim().split(' ').map(function (fragment) {
        return fragment.trim();
      });

      if (Array.isArray(data)) {
        return this.props.children({
          data: data,
          allData: [],
          getPage: this.getPaginatingFunction(data)
        });
      }

      if (data && data.datasourceId) {
        return this.datasourcesList(data, searchedFragments, this.props.searchKeys);
      }

      if (data && data.sourceType === 'pages') {
        return React.createElement(AllPagesComposedQuery, {
          origin: process.env.REACT_APP_ORIGIN || origin,
          url: location.pathname
        }, function (_ref6) {
          var _ref6$allPages = _ref6.allPages,
              allPagesData = _ref6$allPages.data,
              allPagesLoading = _ref6$allPages.loading,
              allPagesError = _ref6$allPages.error,
              frontend = _ref6.getFrontend.frontend,
              pageData = _ref6.getContext.pageData;
          var pageId = pageData && pageData.id || frontend && frontend.page && frontend.page.id;

          if (allPagesLoading || !allPagesData) {
            return React.createElement(_Loader["default"], null);
          }

          if (allPagesError) {
            return "Error...";
          }

          var pages = allPagesData.pages;
          var pagesWithTag = pages.filter(function (p) {
            if (!(p.translations && p.translations.length > 0)) {
              return false;
            }

            if (data.tagIds && !p.tags.some(function (t) {
              return data.tagIds.some(function (tagId) {
                return t.id === tagId;
              });
            })) {
              return false;
            }

            if (pageId && p.id === pageId) {
              return false;
            }

            return true;
          }).map(function (p) {
            var annotations = {};
            var translation = p && p.translations && p.translations[0];
            translation.annotations.forEach(function (_ref7) {
              var key = _ref7.key,
                  value = _ref7.value;
              annotations[key] = value;
            });

            var res = _objectSpread({}, data.data);

            var item = {
              page: {
                name: translation && translation.name || '',
                annotations: annotations
              }
            };

            if (data.orderBy) {
              res.orderBy = _this2.replaceWithSourceItemValues(data.orderBy, item);
            }

            if (data.filters) {
              res.filters = data.filters.map(function (filter) {
                var parsedFilter = _objectSpread({}, filter);

                parsedFilter.filterBy = _this2.replaceWithSourceItemValues(filter.filterBy, item);
                return parsedFilter;
              });
            }

            Object.keys(res).forEach(function (key) {
              if (typeof res[key] === 'string') {
                var replaced = _this2.replaceWithSourceItemValues(res[key], item);

                res[key] = replaced;
              } else if (res[key].pageSourcedUrl) {
                var queryParams = typeof window !== 'undefined' && /^([\w-]+(=[\w-]*)(&[\w-]+(=[\w-]*)?)*)$/.test(res[key].url) && new URLSearchParams(res[key] && res[key].url || '').toString() || undefined;
                res[key] = {
                  pageId: p.id,
                  query: queryParams
                };
              } else if (res[key].dynamiclySourcedImage) {
                var image;

                try {
                  image = JSON.parse(_this2.replaceWithSourceItemValues(res[key].dynamiclySourcedImage, item, true) || '{}');
                } catch (e) {
                  console.log(e);
                }

                res[key] = image || {};
              }
            });
            return _objectSpread({}, res, {
              pi: item
            });
          }).filter(function (item) {
            return !item.filters || !item.filters.some(function (filter) {
              return !filter.filterBy.toLowerCase().includes(filter && filter.includes && filter.includes.toLowerCase());
            });
          }).filter(function (item, i) {
            return !data.limit || i < data.limit;
          });
          var pagesWithFilter = pagesWithTag;

          if (searchedFragments && searchedFragments.length > 0) {
            pagesWithFilter = searchedFragments.reduce(function (filteredPages, fragment) {
              return filteredPages.filter(function (page) {
                if (!searchKeys) {
                  return JSON.stringify(page).toLowerCase().includes(fragment.toLowerCase());
                }

                var flattenPage = _this2.flatten(_objectSpread({}, page, {
                  annotations: page.translations && page.translations[0] && page.translations[0].annotations && Array.isArray(page.translations[0].annotations) && page.translations[0].annotations.reduce(function (acc, a) {
                    acc[a.key] = a.value;
                    return acc;
                  }, {}) || {}
                }), '', '');

                return searchKeys.reduce(function (acc, key) {
                  var Key = removeAccents("".concat(flattenPage[key]).toLowerCase());
                  var Fragment = removeAccents("".concat(fragment).toLowerCase());
                  return acc || Key.includes(Fragment);
                }, false);
              });
            }, pagesWithTag);
          }

          pages = data.orderBy ? pagesWithFilter.sort(function (a, b) {
            if (data.order === 'DESC') {
              if (a.orderBy > b.orderBy) {
                return -1;
              }

              {
                if (a.orderBy < b.orderBy) {
                  return 1;
                }
              }
              return 0;
            }

            if (a.orderBy < b.orderBy) {
              return -1;
            }

            {
              if (a.orderBy > b.orderBy) {
                return 1;
              }
            }
            return 0;
          }).map(function (item) {
            delete item.orderBy;
            return item;
          }) : pagesWithFilter;
          return _this2.props.children({
            data: pagesWithFilter,
            allData: pagesWithTag,
            getPage: _this2.getPaginatingFunction(pages)
          });
        });
      }

      return this.props.children({
        data: [],
        allData: [],
        getPage: this.getPaginatingFunction([])
      });
    }
  }, {
    key: "replaceWithSourceItemValues",
    value: function replaceWithSourceItemValues(source, item, isImage) {
      var regex = /%([^%]*)%/g;
      var result;
      var replaced = String(source);

      while (result = regex.exec(source)) {
        if (result[1]) {
          try {
            var searchKeys = result[1].split(',');

            if (Array.isArray(searchKeys) && searchKeys.length > 0) {
              var getValueFromDatasourceItems = R.path(searchKeys);
              var replacement = getValueFromDatasourceItems(item);

              if (replacement && typeof replacement === 'string') {
                replaced = replaced.replace(result[0], isImage ? replacement : escape(replacement));
              } else if (replacement && _typeof(replacement) === 'object') {
                replaced = replaced.replace(result[0], JSON.stringify(replacement));
              } else if (replacement && typeof replacement === 'number') {
                replaced = replaced.replace(result[0], replacement.toString());
              } else {
                replaced = replaced.replace(result[0], '');
              }
            }
          } catch (e) {
            console.log(e);
          }
        }
      }

      return replaced;
    }
  }, {
    key: "flatten",
    value: function flatten(obj, prefix, current) {
      var _this3 = this;

      prefix = prefix || [];
      current = current || {};

      if (_typeof(obj) === 'object' && obj !== null) {
        Object.keys(obj).forEach(function (key) {
          _this3.flatten(obj[key], prefix.concat(key), current);
        });
      } else {
        current[prefix.join('.')] = obj;
      }

      return current;
    }
  }]);

  return List;
}(React.Component);

var _default = (0, _reactRouter.withRouter)(List);

exports["default"] = _default;