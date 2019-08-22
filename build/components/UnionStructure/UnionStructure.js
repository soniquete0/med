"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMasonryCss = _interopRequireDefault(require("react-masonry-css"));

var ReactMarkdown = _interopRequireWildcard(require("react-markdown"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function UnionStructure(props) {
  var _props$data = props.data,
      title = _props$data.title,
      items = _props$data.items;
  return React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "unionStructure"
  }, title && React.createElement("h3", null, title), React.createElement(_List["default"], {
    data: items
  }, function (_ref) {
    var data = _ref.data;
    return React.createElement(_reactMasonryCss["default"], {
      className: "my-masonry-grid",
      columnClassName: "my-masonry-grid_column",
      breakpointCols: {
        "default": 3,
        4000: 3,
        993: 2,
        769: 1
      }
    }, data && data.map(function (item, i) {
      return React.createElement("div", {
        key: i,
        className: "unionStructure__item"
      }, React.createElement("h5", null, item.title), React.createElement(ReactMarkdown, {
        skipHtml: false,
        escapeHtml: false,
        source: item.text,
        className: 'unionStructure__item__container'
      }));
    }));
  })));
}

var _default = UnionStructure;
exports["default"] = _default;