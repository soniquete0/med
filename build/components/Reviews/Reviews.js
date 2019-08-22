"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _ReviewElement = _interopRequireDefault(require("./components/ReviewElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var Reviews = function Reviews(props) {
  var _props$data = props.data,
      title = _props$data.title,
      reviews = _props$data.reviews;
  return React.createElement(_List["default"], {
    data: reviews
  }, function (_ref) {
    var data = _ref.data;
    return React.createElement("section", {
      className: 'reviews'
    }, React.createElement("div", {
      className: 'container'
    }, title && React.createElement("h3", null, title), React.createElement("div", {
      className: 'reviews__list row'
    }, data && data.map(function (review, i) {
      return React.createElement(_ReviewElement["default"], {
        key: i,
        image: review.image,
        cite: review.cite,
        starCount: review.starCount
      });
    }))));
  });
};

var _default = Reviews;
exports["default"] = _default;