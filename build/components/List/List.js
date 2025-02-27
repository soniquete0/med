"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var react_apollo_1 = require("react-apollo");
var react_adopt_1 = require("react-adopt");
var graphql_tag_1 = require("graphql-tag");
var R = require("ramda");
var removeAccents = require("remove-accents");
var Loader_1 = require("../../partials/Loader");
var escape = function (str) {
    // TODO: escape %x75 4HEXDIG ?? chars
    return str
        .replace(/[\b]/g, '\\b')
        .replace(/[\f]/g, '\\f')
        .replace(/[\n]/g, '\\n')
        .replace(/[\r]/g, '\\r')
        .replace(/[\t]/g, '\\t');
};
var FRONTEND = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query frontend($url: String!, $origin: String) {\n    frontend: frontend( where: { url: $url, origin: $origin } ) {\n      website @connection(key: \"websiteData\") {\n        id\n        title\n      }\n      language @connection(key: \"languageData\") {\n        id\n        code\n        name\n      }\n      page @connection(key: \"pageData\") {\n        id\n        name\n        content\n      }\n      navigations @connection(key: \"navigationsData\") {\n        id\n        name\n        nodes {\n          id\n          page\n          title\n          link\n          order\n          parent\n          __typename\n        }\n        __typename\n      },\n      languages @connection(key: \"languages\") {\n        id\n        code\n        name\n      },\n      datasourceItems @connection(key: \"datasourceItems\") {\n        id\n        content\n        slug\n        datasource {\n          type\n        }\n      },\n      seo,\n      project {\n        id\n        components\n      }\n    }\n  }\n"], ["\n  query frontend($url: String!, $origin: String) {\n    frontend: frontend( where: { url: $url, origin: $origin } ) {\n      website @connection(key: \"websiteData\") {\n        id\n        title\n      }\n      language @connection(key: \"languageData\") {\n        id\n        code\n        name\n      }\n      page @connection(key: \"pageData\") {\n        id\n        name\n        content\n      }\n      navigations @connection(key: \"navigationsData\") {\n        id\n        name\n        nodes {\n          id\n          page\n          title\n          link\n          order\n          parent\n          __typename\n        }\n        __typename\n      },\n      languages @connection(key: \"languages\") {\n        id\n        code\n        name\n      },\n      datasourceItems @connection(key: \"datasourceItems\") {\n        id\n        content\n        slug\n        datasource {\n          type\n        }\n      },\n      seo,\n      project {\n        id\n        components\n      }\n    }\n  }\n"])));
var DATASOURCE = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query datasource($id: ID!) {\n    datasource(where: { id: $id }) {\n      id\n      type\n      schema\n      datasourceItems {\n        id\n        slug\n        content\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"], ["\n  query datasource($id: ID!) {\n    datasource(where: { id: $id }) {\n      id\n      type\n      schema\n      datasourceItems {\n        id\n        slug\n        content\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"])));
var GET_CONTEXT = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  {\n    pageData @client\n    languageData @client\n    websiteData @client\n  }\n"], ["\n  {\n    pageData @client\n    languageData @client\n    websiteData @client\n  }\n"])));
var GET_ALL_PAGES = graphql_tag_1.default(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  query localizedPages($languageId: ID! $websiteId: ID!) {\n    pages(where: { website: { id: $websiteId } }) {\n      id\n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { \n        language: { id: $languageId }\n      }) {\n        id\n        name\n        createdAt\n        content\n        annotations {\n          key\n          value\n        }\n        language {\n          id\n          code\n        }\n      }\n    }\n  }\n"], ["\n  query localizedPages($languageId: ID! $websiteId: ID!) {\n    pages(where: { website: { id: $websiteId } }) {\n      id\n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { \n        language: { id: $languageId }\n      }) {\n        id\n        name\n        createdAt\n        content\n        annotations {\n          key\n          value\n        }\n        language {\n          id\n          code\n        }\n      }\n    }\n  }\n"])));
var AllPagesComposedQuery = react_adopt_1.adopt({
    getContext: function (_a) {
        var render = _a.render;
        return React.createElement(react_apollo_1.Query, { query: GET_CONTEXT }, function (_a) {
            var data = _a.data;
            return render(data);
        });
    },
    getFrontend: function (_a) {
        var render = _a.render, windowOrigin = _a.windowOrigin, locationPath = _a.locationPath;
        return (React.createElement(react_apollo_1.ApolloConsumer, null, function (client) {
            var data = client.cache.data;
            var origin = windowOrigin;
            var url = locationPath;
            if (data && data.data['$ROOT_QUERY.origin']
                && data.data['$ROOT_QUERY.origin'].url
                && data.data['$ROOT_QUERY.origin'].origin) {
                origin = data.data['$ROOT_QUERY.origin'].origin;
                url = data.data['$ROOT_QUERY.origin'].url;
            }
            if (!windowOrigin || !locationPath) {
                return render({ frontend: null });
            }
            return (React.createElement(react_apollo_1.Query, { query: FRONTEND, variables: { origin: origin, url: url } }, function (_a) {
                var frontend = _a.data;
                return render(frontend);
            }));
        }));
    },
    allPages: function (_a) {
        var render = _a.render, frontend = _a.getFrontend.frontend, _b = _a.getContext, languageData = _b.languageData, websiteData = _b.websiteData;
        var languageId = (languageData && languageData.id) ||
            (frontend && frontend.language && frontend.language.id);
        var websiteId = (websiteData && websiteData.id) ||
            (frontend && frontend.website && frontend.website.id);
        if (!languageId || !websiteId) {
            return render({ loading: true });
        }
        return (React.createElement(react_apollo_1.Query, { query: GET_ALL_PAGES, variables: {
                languageId: languageId,
                websiteId: websiteId,
            } }, function (data) {
            var fetchMore = data.fetchMore;
            return render(data);
        }));
    },
});
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getPaginatingFunction = function (items) {
            var getPage = function (numberOfPage, paginationType, pageSize) {
                if (paginationType === void 0) { paginationType = 'pagination'; }
                if (pageSize === void 0) { pageSize = 10; }
                var numberOfItems = items.length;
                var lastPage = Math.ceil(items.length / pageSize);
                var cutTo = (numberOfPage) * pageSize < numberOfItems ?
                    (numberOfPage) * pageSize : numberOfItems;
                var cutFrom = (numberOfPage) * pageSize < numberOfItems ?
                    cutTo - pageSize : (((numberOfPage - 1) && ((numberOfPage - 1) * pageSize)) || 0);
                return { items: items.slice(paginationType === 'pagination' ? cutFrom : 0, cutTo),
                    lastPage: lastPage,
                    allItems: items
                };
            };
            return getPage;
        };
        _this.datasourcesList = function (data, searchedFragments, searchKeys) {
            return (React.createElement(react_apollo_1.Query, { query: DATASOURCE, variables: {
                    id: data.datasourceId
                } }, function (queryData) {
                var dataShape = data.data, error = data.error, loading = data.loading;
                var datasourceItems = ((queryData.data.datasource && queryData.data.datasource.datasourceItems) || []);
                // Map datasourceItem data to placeholders
                datasourceItems = datasourceItems
                    .map(function (item) {
                    // Iterate through dataShape 
                    // in case that value inside some of keys is string
                    // try to find key inside item and replace value with it
                    var res = __assign({}, dataShape);
                    if (data.orderBy) {
                        res.orderBy = _this.replaceWithSourceItemValues(data.orderBy, item.content);
                    }
                    if (data.filters) {
                        res.filters = data.filters.map(function (filter) {
                            var parsedFilter = __assign({}, filter);
                            parsedFilter.filterBy = _this.replaceWithSourceItemValues(filter.filterBy, item.content);
                            return parsedFilter;
                        });
                    }
                    // Iterate through keys and in case that value inside key is string value 
                    // apply replace function which replace dynamic placeholders with dynamic source item values.
                    // In case that value of key is url and contains dynamic slug with same entity that we sourcing,
                    // replace it with dynamic source item slug.
                    Object.keys(res).forEach(function (key) {
                        if (typeof res[key] === 'string') {
                            var replaced = _this.replaceWithSourceItemValues(res[key], item.content);
                            res[key] = replaced;
                        }
                        else if (res[key].url) {
                            var regex = /ds\:(\w+)/g;
                            var result = void 0;
                            var newUrl = String(res[key].url);
                            while (result = regex.exec(res[key].url)) {
                                if (result[1] && result[1] === queryData.data.datasource.type.toLowerCase()) {
                                    newUrl = newUrl.replace(result[0], item.slug);
                                }
                            }
                            if (newUrl !== res[key].url) {
                                res[key] = { url: newUrl, dynamic: true };
                            }
                        }
                    });
                    return __assign({}, res, { di: item.content });
                })
                    .filter(function (item) {
                    if (_this.props.exclude && item[_this.props.exclude.key]
                        && item[_this.props.exclude.key] === _this.props.exclude.value) {
                        return false;
                    }
                    return !item.filters ||
                        !item.filters
                            .some(function (filter) {
                            return !filter.filterBy.toLowerCase()
                                .includes(filter && filter.includes && filter.includes.toLowerCase());
                        });
                })
                    .filter(function (item, i) { return !data.limit || i < data.limit; });
                if (error) {
                    return React.createElement("span", null, "Error...");
                }
                if (loading) {
                    return React.createElement(Loader_1.default, null);
                }
                var allData = data.orderBy ?
                    datasourceItems
                        .sort(function (a, b) {
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
                    })
                        .map(function (item) {
                        delete item.orderBy;
                        return item;
                    })
                    :
                        datasourceItems;
                var items = allData;
                if (searchedFragments && searchedFragments.length > 0) {
                    items = searchedFragments.reduce(function (filteredItems, fragment) {
                        return filteredItems.filter(function (item) {
                            if (!searchKeys) {
                                return JSON.stringify(item).toLowerCase().includes(fragment.toLowerCase());
                            }
                            var flattenItem = _this.flatten(item, '', '');
                            return searchKeys.reduce(function (acc, key) {
                                // Remove letter accents
                                var Key = removeAccents(("" + flattenItem[key]).toLowerCase());
                                var Fragment = removeAccents(("" + fragment).toLowerCase());
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
            }));
        };
        return _this;
    }
    List.prototype.render = function () {
        var _this = this;
        var origin = null;
        if (window) {
            origin = window.origin;
        }
        var _a = this.props, data = _a.data, location = _a.location;
        var _b = this.props, searchedText = _b.searchedText, searchKeys = _b.searchKeys;
        var fulltextFilter = data && data.fulltextFilter;
        var regex = /^\[([a-z]*)\]$/;
        var searchParams = typeof window !== 'undefined' && new URLSearchParams(location && location.search || '');
        if (fulltextFilter) {
            var res = regex.exec(fulltextFilter.trim());
            if (res && res[1]) {
                var textFromSearchParams = searchParams && searchParams.get(res[1]);
                if (!textFromSearchParams) {
                    return this.props.children({ data: [], allData: [], getPage: this.getPaginatingFunction([]) });
                }
                searchedText = (searchedText ? searchedText : '') + " " + (textFromSearchParams ? textFromSearchParams : '');
            }
            else {
                searchedText = (searchedText ? searchedText : '') + " " + fulltextFilter;
            }
        }
        var searchedFragments = searchedText && searchedText.trim().split(' ').map(function (fragment) { return fragment.trim(); });
        if (Array.isArray(data)) {
            return this.props.children({ data: data, allData: [], getPage: this.getPaginatingFunction(data) });
        }
        // In case that data isn't array and contain datasourceId try to fetch datasource with his items
        if (data && data.datasourceId) {
            return this.datasourcesList(data, searchedFragments, this.props.searchKeys);
        }
        if (data && data.sourceType === 'pages') {
            return (React.createElement(AllPagesComposedQuery, { origin: process.env.REACT_APP_ORIGIN || origin, url: location.pathname }, function (_a) {
                var _b = _a.allPages, allPagesData = _b.data, allPagesLoading = _b.loading, allPagesError = _b.error, frontend = _a.getFrontend.frontend, pageData = _a.getContext.pageData;
                var pageId = (pageData && pageData.id) ||
                    (frontend && frontend.page && frontend.page.id);
                if (allPagesLoading || !allPagesData) {
                    return React.createElement(Loader_1.default, null);
                }
                if (allPagesError) {
                    return "Error...";
                }
                var pages = allPagesData.pages;
                var pagesWithTag = pages
                    .filter(function (p) {
                    if (!(p.translations && p.translations.length > 0)) {
                        return false;
                    }
                    if (data.tagIds && p.tags.some(function (t) { return t.name === 'unpublished'; })) {
                        return false;
                    }
                    if (data.tagIds && !p.tags.some(function (t) { return data.tagIds.some(function (tagId) { return t.id === tagId; }); })) {
                        return false;
                    }
                    if (pageId && p.id === pageId) {
                        return false;
                    }
                    return true;
                })
                    .map(function (p) {
                    var annotations = {};
                    var translation = (p && p.translations && p.translations[0]);
                    translation.annotations.forEach(function (_a) {
                        var key = _a.key, value = _a.value;
                        annotations[key] = value;
                    });
                    var res = __assign({}, data.data);
                    var item = {
                        page: {
                            name: (translation && translation.name) || '',
                            annotations: annotations,
                        }
                    };
                    if (data.orderBy) {
                        res.orderBy = _this.replaceWithSourceItemValues(data.orderBy, item);
                    }
                    if (data.filters) {
                        res.filters = data.filters.map(function (filter) {
                            var parsedFilter = __assign({}, filter);
                            parsedFilter.filterBy = _this.replaceWithSourceItemValues(filter.filterBy, item);
                            return parsedFilter;
                        });
                    }
                    Object.keys(res).forEach(function (key) {
                        if (typeof res[key] === 'string') {
                            var replaced = _this.replaceWithSourceItemValues(res[key], item);
                            res[key] = replaced;
                        }
                        else if (res[key].pageSourcedUrl) {
                            var queryParams = typeof window !== 'undefined'
                                && /^([\w-]+(=[\w-]*)(&[\w-]+(=[\w-]*)?)*)$/.test(res[key].url)
                                && new URLSearchParams(res[key] && res[key].url || '').toString() || undefined;
                            res[key] = { pageId: p.id, query: queryParams };
                        }
                        else if (res[key].dynamiclySourcedImage) {
                            var image = void 0;
                            try {
                                image = JSON.parse(_this.replaceWithSourceItemValues(res[key].dynamiclySourcedImage, item, true) || '{}');
                            }
                            catch (e) {
                                console.log(e);
                            }
                            res[key] = image || {};
                        }
                    });
                    return __assign({}, res, { pi: item });
                })
                    .filter(function (item) {
                    return !item.filters ||
                        !item.filters
                            .some(function (filter) {
                            return !filter.filterBy.toLowerCase()
                                .includes(filter && filter.includes && filter.includes.toLowerCase());
                        });
                })
                    .filter(function (item, i) { return !data.limit || i < data.limit; });
                var pagesWithFilter = pagesWithTag;
                if (searchedFragments && searchedFragments.length > 0) {
                    pagesWithFilter = searchedFragments.reduce(function (filteredPages, fragment) {
                        return filteredPages
                            .filter(function (page) {
                            if (!searchKeys) {
                                return JSON.stringify(page).toLowerCase().includes(fragment.toLowerCase());
                            }
                            var flattenPage = _this.flatten(__assign({}, page, { 
                                // adding annotations as data to page object
                                annotations: (page.translations && page.translations[0] &&
                                    page.translations[0].annotations && Array.isArray(page.translations[0].annotations)
                                    && page.translations[0].annotations.reduce(function (acc, a) {
                                        acc[a.key] = a.value;
                                        return acc;
                                    }, {})) || {} }), '', '');
                            return searchKeys.reduce(function (acc, key) {
                                // Remove letter accents
                                var Key = removeAccents(("" + flattenPage[key]).toLowerCase());
                                var Fragment = removeAccents(("" + fragment).toLowerCase());
                                return acc || Key.includes(Fragment);
                            }, false);
                        });
                    }, pagesWithTag);
                }
                pages = data.orderBy ?
                    pagesWithFilter
                        .sort(function (a, b) {
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
                    })
                        .map(function (item) {
                        delete item.orderBy;
                        return item;
                    })
                    :
                        pagesWithFilter;
                return _this.props.children({
                    data: pagesWithFilter,
                    allData: pagesWithTag,
                    getPage: _this.getPaginatingFunction(pages)
                });
            }));
        }
        return this.props.children({ data: [], allData: [], getPage: this.getPaginatingFunction([]) });
    };
    List.prototype.replaceWithSourceItemValues = function (source, item, isImage) {
        var regex = /%([^%]*)%/g;
        var result;
        var replaced = String(source);
        while ((result = regex.exec(source))) {
            if (result[1]) {
                try {
                    var searchKeys = result[1].split(',');
                    if (Array.isArray(searchKeys) && searchKeys.length > 0) {
                        var getValueFromDatasourceItems = R.path(searchKeys);
                        var replacement = getValueFromDatasourceItems(item);
                        if (replacement && typeof replacement === 'string') {
                            replaced = replaced.replace(result[0], isImage ? replacement : escape(replacement));
                        }
                        else if (replacement && typeof replacement === 'object') {
                            replaced = replaced.replace(result[0], JSON.stringify(replacement));
                        }
                        else if (replacement && typeof replacement === 'number') {
                            replaced = replaced.replace(result[0], replacement.toString());
                        }
                        else {
                            replaced = replaced.replace(result[0], '');
                        }
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
        return replaced;
    };
    /**
     * Recursively flattens a JSON object using dot notation.
     *
     * NOTE: input must be an object as described by JSON spec. Arbitrary
     * JS objects (e.g. {a: () => 42}) may result in unexpected output.
     * MOREOVER, it removes keys with empty objects/arrays as value (see
     * examples bellow).
     *
     * @example
     * // returns {a:1, 'b.0.c': 2, 'b.0.d.e': 3, 'b.1': 4}
     * flatten({a: 1, b: [{c: 2, d: {e: 3}}, 4]})
     * // returns {a:1, 'b.0.c': 2, 'b.0.d.e.0': true, 'b.0.d.e.1': false, 'b.0.d.e.2.f': 1}
     * flatten({a: 1, b: [{c: 2, d: {e: [true, false, {f: 1}]}}]})
     * // return {a: 1}
     * flatten({a: 1, b: [], c: {}})
     *
     * @param obj item to be flattened
     * @param {Array.string} [prefix=[]] chain of prefix joined with a dot and prepended to key
     * @param {Object} [current={}] result of flatten during the recursion
     *
     * @see https://docs.mongodb.com/manual/core/document/#dot-notation
     */
    List.prototype.flatten = function (obj, prefix, current) {
        var _this = this;
        prefix = prefix || [];
        current = current || {};
        // Remember kids, null is also an object!
        if (typeof (obj) === 'object' && obj !== null) {
            Object.keys(obj).forEach(function (key) {
                _this.flatten(obj[key], prefix.concat(key), current);
            });
        }
        else {
            current[prefix.join('.')] = obj;
        }
        return current;
    };
    return List;
}(React.Component));
exports.default = react_router_1.withRouter(List);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=List.js.map