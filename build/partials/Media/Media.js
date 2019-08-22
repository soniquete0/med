"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _ImgWithFallback = _interopRequireDefault(require("./components/ImgWithFallback"));

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

var Media = function (_React$Component) {
  _inherits(Media, _React$Component);

  function Media(props) {
    var _this;

    _classCallCheck(this, Media);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Media).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setDimensions", function () {
      if (!(_this.props.width || _this.props.height)) {
        return;
      }

      var result = null;
      result = {
        width: _this.props.width && _this.props.width,
        height: _this.props.height && _this.props.height
      };
      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "renderAsImage", function (data) {
      var baseUrl = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';

      if (data && data.filename) {
        var recommendedSizes = data && data.recommendedSizes || null;
        var originalUrl = baseUrl + data.category + data.hash + '_' + data.filename;
        recommendedSizes = _this.setDimensions();
        return React.createElement(_ImgWithFallback["default"], {
          originalSrc: originalUrl,
          alt: data.alt || '',
          baseUrl: baseUrl,
          recommendedSizes: recommendedSizes,
          originalData: data,
          hash: data.hash,
          classes: _this.props.classes
        });
      } else {
        return null;
      }
    });

    return _this;
  }

  _createClass(Media, [{
    key: "renderAsVideoEmbed",
    value: function renderAsVideoEmbed(data) {
      var embedUrl = data.url;
      return React.createElement("div", {
        className: 'mediaRatio',
        style: {
          paddingTop: "".concat(parseInt(data.recommendedSizes ? data.recommendedSizes.height : 9, 10) / parseInt(data.recommendedSizes ? data.recommendedSizes.width : 16, 10) * 100, "%")
        }
      }, React.createElement("iframe", {
        className: "mediaEmbeddedVideo inner",
        src: embedUrl,
        allowFullScreen: true,
        frameBorder: "0"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;

      switch (data && data.type) {
        case 'image':
          return this.renderAsImage(data);

        case 'embeddedVideo':
          return this.renderAsVideoEmbed(data);

        default:
          return this.renderAsImage(data);
      }
    }
  }]);

  return Media;
}(React.Component);

var _default = Media;
exports["default"] = _default;