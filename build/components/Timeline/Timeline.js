"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var Swipeable = _interopRequireWildcard(require("react-swipeable"));

var _List = _interopRequireDefault(require("../List"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

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

var Timeline = function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline(props) {
    var _this;

    _classCallCheck(this, Timeline);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Timeline).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "timeline", void 0);

    _defineProperty(_assertThisInitialized(_this), "translateTimeline", function (ammount) {
      _this.setState({
        x: _this.state.x + ammount,
        limitLeft: false,
        limitRight: false
      }, function () {
        var width = _this.timeline.current && _this.timeline.current.getBoundingClientRect().width;

        if (_this.state.x >= 0) {
          _this.setState({
            limitLeft: true
          });
        }

        if (_this.state.x < 0) {
          var offset = _this.state.x * -1;

          if (offset > width / 3) {
            _this.setState({
              limitRight: true
            });
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSwipe", function (e, direction, deltaX, velocity) {
      var ammount = deltaX < 0 ? deltaX * -1 : deltaX;

      if (direction === 'left') {
        ammount = ammount * -1;
      }

      _this.translateTimeline(ammount);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrag", function (e) {
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "arrowClick", function (e, direction) {
      var ammount = 300;

      if (direction === 'right') {
        ammount = ammount * -1;
      }

      _this.translateTimeline(ammount);
    });

    _defineProperty(_assertThisInitialized(_this), "renderPoints", function (items) {
      var point = React.createElement("div", {
        className: 'point'
      });
      var points = [];
      var x = 30;

      if (window && window.innerWidth > 768) {
        x = 60;
      }

      var _loop = function _loop(i) {
        var positionItem = items.find(function (item) {
          return Math.round(item.position * x / 100) === i;
        });

        if (positionItem) {
          points.push(React.createElement("div", {
            key: i,
            className: "point ".concat('point--' + positionItem.color)
          }, React.createElement("div", {
            className: "point__content ".concat(items.indexOf(positionItem) % 2 === 0 ? 'point__content--top' : 'point__content--bottom')
          }, positionItem.image && React.createElement(_Media["default"], {
            data: positionItem.image,
            type: "image"
          }), React.createElement("p", null, positionItem.descriptionA), React.createElement("p", null, positionItem.descriptionB), React.createElement("h5", null, positionItem.name), React.createElement("p", {
            className: 'year'
          }, positionItem.year))));
        } else {
          points.push(point);
        }
      };

      for (var i = 0; i < x; i++) {
        _loop(i);
      }

      return points;
    });

    _this.timeline = React.createRef();
    _this.state = {
      x: 0,
      limitLeft: false,
      limitRight: false
    };
    return _this;
  }

  _createClass(Timeline, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$data = this.props.data,
          title = _this$props$data.title,
          items = _this$props$data.items;
      return React.createElement("div", {
        className: 'container'
      }, React.createElement("section", {
        className: 'timelineSection'
      }, title && React.createElement("h2", {
        className: 'gradientHeading'
      }, title), React.createElement("div", {
        className: 'timeline'
      }, !this.state.limitLeft && React.createElement("div", {
        className: 'timeline__arrow  timeline__arrow--left',
        onClick: function onClick(e) {
          return _this2.arrowClick(e, 'left');
        }
      }), React.createElement("div", {
        className: 'timeline__blur  timeline__blur--left'
      }), React.createElement("div", {
        className: 'timeline__cont',
        onMouseDown: function onMouseDown(e) {
          return _this2.handleDrag(e);
        }
      }, React.createElement(Swipeable, {
        trackMouse: true,
        preventDefaultTouchmoveEvent: true,
        onSwipedLeft: function onSwipedLeft(e, deltaX, velocity) {
          return _this2.handleSwipe(e, 'left', deltaX, velocity);
        },
        onSwipedRight: function onSwipedRight(e, deltaX, velocity) {
          return _this2.handleSwipe(e, 'right', deltaX, velocity);
        }
      }, React.createElement("div", {
        ref: this.timeline,
        className: 'timeline__holder',
        style: {
          transform: "translate3d(".concat(this.state.x + 'px', ",-7px,0)")
        }
      }, React.createElement(_List["default"], {
        data: items
      }, function (_ref) {
        var data = _ref.data;
        return React.createElement(React.Fragment, null, _this2.renderPoints(data));
      })))), !this.state.limitRight && React.createElement("div", {
        className: 'timeline__arrow  timeline__arrow--right',
        onClick: function onClick(e) {
          return _this2.arrowClick(e, 'right');
        }
      }), React.createElement("div", {
        className: 'timeline__blur timeline__blur--right',
        onClick: function onClick(e) {
          return _this2.arrowClick(e, 'right');
        }
      })), React.createElement("div", {
        className: 'timeline timeline__mobile'
      }, React.createElement("div", {
        className: 'timeline__holder',
        ref: this.timeline,
        style: {
          transform: "translate3d(".concat(this.state.x + 'px', ",-7px,0)")
        }
      }, React.createElement(_List["default"], {
        data: items
      }, function (_ref2) {
        var data = _ref2.data;
        return React.createElement(React.Fragment, null, _this2.renderPoints(data));
      })))));
    }
  }]);

  return Timeline;
}(React.Component);

var _default = Timeline;
exports["default"] = _default;