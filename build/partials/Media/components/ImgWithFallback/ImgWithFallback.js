"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _getImageUrl = _interopRequireDefault(require("../../../../helpers/getImageUrl"));

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

var ImgWithFallback = function (_React$Component) {
  _inherits(ImgWithFallback, _React$Component);

  function ImgWithFallback(_props) {
    var _this;

    _classCallCheck(this, ImgWithFallback);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImgWithFallback).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "createVariantIfDoesNotExist", function () {
      if (_this.props.recommendedSizes) {
        fetch("".concat(process.env.REACT_APP_MEDIA_LIBRARY_SERVER, "/createDimension"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: _this.props.originalData.id,
            width: parseInt(_this.props.recommendedSizes.width, 10),
            height: parseInt(_this.props.recommendedSizes.height, 10)
          })
        }).then(function (response) {})["catch"](function () {
          console.log('There was an error creating variant');
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getSizedUrl", function (props) {
      var sizedUrl = null;
      var sizes = props.recommendedSizes;
      var sizedFile = null;

      _this.setState({
        loading: true
      });

      if (sizes && sizes.width && sizes.height) {
        var filename = props.originalData.filename.split('.');
        filename[0] = filename[0] + '_' + sizes.width + '_' + sizes.height;
        filename = filename.join('.');
        sizedUrl = props.baseUrl + props.originalData.category + props.hash + '_' + filename;

        _this.setState({
          src: sizedUrl
        });
      } else {
        _this.setState({
          src: props.originalSrc
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleError", function () {
      _this.createVariantIfDoesNotExist();

      _this.setState({
        loading: true,
        src: _this.props.originalSrc
      });
    });

    _this.state = {
      src: null,
      loading: true
    };
    return _this;
  }

  _createClass(ImgWithFallback, [{
    key: "loadImg",
    value: function loadImg(src) {
      var _this2 = this;

      if (src) {
        var img = new Image();
        img.src = src;

        img.onload = function () {
          _this2.setState({
            loading: false
          });
        };

        img.onerror = function (err) {
          _this2.handleError();
        };
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getSizedUrl(this.props);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.state.src !== nextState.src) {
        this.loadImg(nextState.src);
      }

      if (nextProps.originalSrc !== this.props.originalSrc) {
        this.getSizedUrl(nextProps);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var alt = this.props.alt;
      return React.createElement("div", {
        className: "mediaRatio ".concat(this.props.classes),
        style: {
          paddingTop: "".concat(parseInt(this.props.recommendedSizes ? this.props.recommendedSizes.height : 1, 10) / parseInt(this.props.recommendedSizes ? this.props.recommendedSizes.width : 1, 10) * 100, "%")
        }
      }, React.createElement("img", {
        alt: alt,
        className: 'mediaImage inner',
        src: this.state.src ? this.state.src : (0, _getImageUrl["default"])(this.props.originalData)
      }));
    }
  }]);

  return ImgWithFallback;
}(React.Component);

var _default = ImgWithFallback;
exports["default"] = _default;