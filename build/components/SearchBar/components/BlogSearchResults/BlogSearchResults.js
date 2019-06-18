"use strict";
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
var List_1 = require("../../../List");
var Link_1 = require("../../../../partials/Link");
// tslint:disable-next-line:max-line-length
function BlogSearchResults(_a) {
    var searchResults = _a.searchResults, query = _a.query, searchKeys = _a.searchKeys, checkBlogResults = _a.checkBlogResults;
    return (React.createElement(List_1.default, { data: searchResults, searchedText: query, searchKeys: searchKeys }, function (_a) {
        var data = _a.data;
        if (data.length > 0) {
            checkBlogResults(data.length);
            return (React.createElement("ul", { className: 'searchBarResults__blog' }, data.map(function (blogItem, i) { return (React.createElement("li", { key: i },
                React.createElement(Link_1.default, __assign({}, blogItem.link),
                    React.createElement("div", null,
                        React.createElement("h4", null, blogItem.name || blogItem.title),
                        React.createElement("p", null, blogItem.perex))))); })));
        }
        else {
            checkBlogResults(null);
            return (React.createElement(React.Fragment, null));
        }
    }));
}
exports.default = BlogSearchResults;
//# sourceMappingURL=BlogSearchResults.js.map