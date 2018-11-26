var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import GoogleMapReact from 'google-map-react';
export var GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
import MapBox from './components/MapBox';
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Map.prototype.render = function () {
        var defaultCenter = { lat: 49.743825, lng: 15.13865 };
        var center = defaultCenter;
        var defaultZoom = 7;
        var zoom = 7;
        return (React.createElement("div", { className: "fullWidthContainer" },
            React.createElement("section", { className: 'map' },
                React.createElement("div", { className: 'map__container' },
                    React.createElement("button", null, "Zobrazit v\u0161echny polikliniky")),
                React.createElement(MapBox, null),
                React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: GoogleMapsApiKey }, defaultCenter: defaultCenter, defaultZoom: defaultZoom, center: center, zoom: zoom, options: {
                        scrollwheel: false,
                    } }))));
    };
    return Map;
}(React.Component));
export default Map;
//# sourceMappingURL=Map.js.map