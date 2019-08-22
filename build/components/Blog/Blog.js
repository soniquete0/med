"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMasonryCss = _interopRequireDefault(require("react-masonry-css"));

var ReactMarkdown = _interopRequireWildcard(require("react-markdown"));

var _List = _interopRequireDefault(require("../List"));

var _searchBar = _interopRequireDefault(require("./components/searchBar"));

var _blogCard = require("./components/blogCard");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Blog = function (_React$Component) {
  _inherits(Blog, _React$Component);

  function Blog(props) {
    var _this;

    _classCallCheck(this, Blog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Blog).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onSearchChange", function (e) {
      _this.setState({
        searchQuery: e.target.value
      });
    });

    _this.state = {
      numberOfPage: 1,
      searchQuery: ''
    };
    return _this;
  }

  _createClass(Blog, [{
    key: "renderBlogCards",
    value: function renderBlogCards(items) {
      if (!items) {
        return [];
      }

      var _this$props$data = this.props.data,
          specialText = _this$props$data.specialText,
          specialTitle = _this$props$data.specialTitle;
      var resultBlogCards = [];

      for (var i = 0; i < items.length; i++) {
        if (i === 1 && specialText && specialTitle) {
          resultBlogCards.push(React.createElement("div", {
            key: 'special',
            className: 'blogCard blogCard--special'
          }, React.createElement("h3", null, specialTitle), React.createElement(ReactMarkdown, {
            source: specialText,
            renderers: {
              paragraph: function paragraph(rProps) {
                return React.createElement("p", null, rProps.children);
              }
            }
          })));
        }

        resultBlogCards.push(React.createElement(_blogCard.BlogCard, {
          key: i,
          url: items[i].url,
          text: items[i].text,
          img: items[i].image,
          title: items[i].title,
          color: items[i].color && items[i].color.trim().length > 0 ? items[i].color : '#386fa2'
        }));
      }

      return resultBlogCards;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$data2 = this.props.data,
          title = _this$props$data2.title,
          articles = _this$props$data2.articles,
          displaySearch = _this$props$data2.displaySearch;
      return React.createElement("section", {
        className: 'blog'
      }, React.createElement("div", {
        className: "container"
      }, title && React.createElement("h1", {
        style: displaySearch ? {
          paddingBottom: 0
        } : {}
      }, title), displaySearch && React.createElement(_searchBar["default"], {
        barColor: 'gray',
        placeholder: 'Search',
        value: this.state.searchQuery,
        onChange: this.onSearchChange
      }), React.createElement(_List["default"], {
        data: articles,
        searchedText: this.state.searchQuery
      }, function (_ref) {
        var getPage = _ref.getPage;

        var _getPage = getPage(_this2.state.numberOfPage, 'infinite', 6),
            items = _getPage.items,
            lastPage = _getPage.lastPage;

        if (items && items.length <= 0) {
          return React.createElement("div", {
            className: 'searchBarResults__noResults'
          }, "Bohu\u017Eel nebyl nalezen \u017E\xE1dn\xFD \u010Dl\xE1nek.");
        }

        return React.createElement(React.Fragment, null, React.createElement(_reactMasonryCss["default"], {
          breakpointCols: {
            "default": 3,
            4000: 3,
            800: 2,
            500: 1
          },
          className: "my-masonry-grid",
          columnClassName: "my-masonry-grid_column"
        }, _this2.renderBlogCards(items)), _this2.state.numberOfPage < lastPage && React.createElement("button", {
          style: {
            margin: '0 auto'
          },
          className: 'btn btn--blueBkg btn--fullWidth',
          onClick: function onClick() {
            return _this2.setState({
              numberOfPage: _this2.state.numberOfPage + 1
            });
          }
        }, "Na\u010D\xEDst dal\u0161\xED"));
      })));
    }
  }]);

  return Blog;
}(React.Component);

exports["default"] = Blog;