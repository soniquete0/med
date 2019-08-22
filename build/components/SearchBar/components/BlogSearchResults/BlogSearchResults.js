"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BlogSearchResults;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../../../List"));

var _Link = _interopRequireDefault(require("../../../../partials/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function BlogSearchResults(_ref) {
  var searchResults = _ref.searchResults,
      query = _ref.query,
      searchKeys = _ref.searchKeys,
      checkBlogResults = _ref.checkBlogResults;
  return React.createElement(_List["default"], {
    data: searchResults,
    searchedText: query,
    searchKeys: searchKeys
  }, function (_ref2) {
    var data = _ref2.data;

    if (data.length > 0) {
      checkBlogResults(true);
      return React.createElement("ul", {
        className: 'searchBarResults__blog'
      }, data.map(function (blogItem, i) {
        return React.createElement("li", {
          key: i
        }, React.createElement(_Link["default"], blogItem.link, React.createElement("div", null, React.createElement("h4", null, blogItem.name || blogItem.title))));
      }));
    } else {
      checkBlogResults(false);
      return React.createElement(React.Fragment, null);
    }
  });
}