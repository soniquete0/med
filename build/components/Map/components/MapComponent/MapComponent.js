"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GoogleMapsApiKey = void 0;

var React = _interopRequireWildcard(require("react"));

var _googleMapReact = _interopRequireDefault(require("google-map-react"));

var _reactGeolocated = require("react-geolocated");

var _Marker = _interopRequireDefault(require("../Marker"));

var _MapBox = _interopRequireDefault(require("../MapBox"));

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

var GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
exports.GoogleMapsApiKey = GoogleMapsApiKey;

var MapComponent = function (_React$Component) {
  _inherits(MapComponent, _React$Component);

  function MapComponent(props) {
    var _this;

    _classCallCheck(this, MapComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MapComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleMarkerClick", function (e, key, clinic) {
      _this.setState({
        activeMarker: key,
        activeMarkerCenter: {
          lat: clinic.lat,
          lng: clinic.lng
        },
        boxData: clinic
      });

      e.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMarkerClose", function () {
      _this.setState({
        activeMarker: null,
        activeMarkerCenter: null,
        boxData: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "displayBox", function (clinicData) {
      _this.setState({
        boxData: clinicData
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getMapBounds", function (map, maps, locations) {
      var bounds = new maps.LatLngBounds();
      locations.forEach(function (location) {
        bounds.extend(new maps.LatLng(location.lat, location.lng));
      });

      if (_this.props.coords) {
        bounds.extend(new maps.LatLng(_this.props.coords.latitude, _this.props.coords.longitude));
      }

      return bounds;
    });

    _defineProperty(_assertThisInitialized(_this), "apiIsLoaded", function (map, maps, locations) {
      if (map && locations && locations.length > 0) {
        var bounds = _this.getMapBounds(map, maps, locations);

        map.fitBounds(bounds);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "deg2Rad", function (deg) {
      return deg * Math.PI / 180;
    });

    _defineProperty(_assertThisInitialized(_this), "pythagorasEquirectangular", function (lat1, lon1, lat2, lon2) {
      lat1 = _this.deg2Rad(lat1);
      lat2 = _this.deg2Rad(lat2);
      lon1 = _this.deg2Rad(lon1);
      lon2 = _this.deg2Rad(lon2);
      var R = 6371;
      var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
      var y = lat2 - lat1;
      var d = Math.sqrt(x * x + y * y) * R;
      return d;
    });

    _defineProperty(_assertThisInitialized(_this), "nearestClinic", function (latitude, longitude, clinics) {
      var mindif = 99999;
      var closest;

      for (var index = 0; index < clinics.length; ++index) {
        var dif = _this.pythagorasEquirectangular(latitude, longitude, clinics[index].lat, clinics[index].lng);

        if (dif < mindif) {
          closest = index;
          mindif = dif;
        }
      }

      return clinics[closest];
    });

    _this.state = {
      boxData: null,
      activeMarker: null,
      activeMarkerCenter: null
    };
    _this.handleMarkerClose = _this.handleMarkerClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MapComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var defaultCenter = {
        lat: 50.08804,
        lng: 14.42076
      };
      var defaultZoom = 7;
      return React.createElement("div", {
        className: "fullWidthContainer"
      }, React.createElement("section", {
        className: 'map'
      }, this.props.clinics && React.createElement(_googleMapReact["default"], {
        bootstrapURLKeys: {
          key: GoogleMapsApiKey
        },
        defaultCenter: defaultCenter,
        center: defaultCenter,
        defaultZoom: defaultZoom,
        options: {
          scrollwheel: false
        },
        yesIWantToUseGoogleMapApiInternals: true,
        onGoogleApiLoaded: function onGoogleApiLoaded(_ref) {
          var map = _ref.map,
              maps = _ref.maps;
          return _this2.apiIsLoaded(map, maps, _this2.props.clinics);
        }
      }, this.props.clinics.length > 0 && this.props.clinics.map(function (clinic, index) {
        if (clinic.lat && clinic.lng && clinic.lat.trim().length > 0 && clinic.lng.trim().length > 0) {
          return React.createElement(_Marker["default"], {
            type: 'small',
            lat: Number(clinic.lat),
            lng: Number(clinic.lng),
            handleMarkerClick: function handleMarkerClick(e, key) {
              return _this2.handleMarkerClick(e, key, clinic);
            },
            handleClose: _this2.handleMarkerClose,
            active: _this2.state.activeMarker === index || clinic.title === _this2.nearestClinic(_this2.props.coords ? _this2.props.coords.latitude : defaultCenter.lat, _this2.props.coords ? _this2.props.coords.longitude : defaultCenter.lng, _this2.props.clinics).title && _this2.state.activeMarker === null,
            key: index,
            index: index,
            handleMarkerClose: _this2.handleMarkerClose
          });
        }
      }), React.createElement(_Marker["default"], {
        type: 'geoLocation',
        lat: this.props.coords ? this.props.coords.latitude : defaultCenter.lat,
        lng: this.props.coords ? this.props.coords.longitude : defaultCenter.lng,
        key: this.props.clinics.length + 1,
        index: this.props.clinics.length + 1
      })), this.state.boxData && React.createElement(_MapBox["default"], {
        clinicData: this.state.boxData,
        close: this.handleMarkerClose
      })));
    }
  }]);

  return MapComponent;
}(React.Component);

var _default = (0, _reactGeolocated.geolocated)()(MapComponent);

exports["default"] = _default;