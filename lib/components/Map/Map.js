"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GoogleMapsApiKey = void 0;

var React = _interopRequireWildcard(require("react"));

var _googleMapReact = _interopRequireDefault(require("google-map-react"));

var _MapBox = _interopRequireDefault(require("./components/MapBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
exports.GoogleMapsApiKey = GoogleMapsApiKey;

var Map =
/** @class */
function (_super) {
  __extends(Map, _super);

  function Map() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Map.prototype.render = function () {
    var defaultCenter = {
      lat: 49.743825,
      lng: 15.13865
    };
    var center = defaultCenter;
    var defaultZoom = 7;
    var zoom = 7;
    return React.createElement("div", {
      className: "fullWidthContainer"
    }, React.createElement("section", {
      className: 'map'
    }, React.createElement("div", {
      className: 'map__container'
    }, React.createElement("button", null, "Zobrazit v\u0161echny polikliniky")), React.createElement(_MapBox.default, null), React.createElement(_googleMapReact.default, {
      bootstrapURLKeys: {
        key: GoogleMapsApiKey
      },
      defaultCenter: defaultCenter,
      defaultZoom: defaultZoom,
      center: center,
      zoom: zoom,
      options: {
        scrollwheel: false
      }
    })));
  };

  return Map;
}(React.Component);

var _default = Map;
exports.default = _default;