"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SearchBar_1 = require("../SearchBar/SearchBar");
var getImageUrl_1 = require("../../helpers/getImageUrl");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.render = function () {
        var _a = this.props.data, title = _a.title, text = _a.text, displaySearch = _a.displaySearch, image = _a.image, placeholder = _a.placeholder, displayOverlay = _a.displayOverlay, titleColor = _a.titleColor, textColor = _a.textColor;
        return (React.createElement("div", { className: "fullWidthContainer" },
            React.createElement("section", { className: 'hero', style: { backgroundImage: image && "url(" + getImageUrl_1.default(image) + ")" } },
                displayOverlay && React.createElement("div", { className: 'hero__overlay' }),
                React.createElement("div", { className: 'container' },
                    React.createElement("div", { className: 'hero__holder' },
                        title && React.createElement("h1", { className: "hero__title hero__title--" + titleColor }, title),
                        text && React.createElement("div", { className: "hero__text hero__text--" + textColor + " " }, text),
                        displaySearch && (React.createElement(SearchBar_1.default, { barColor: 'lightBlue', placeholder: placeholder ? placeholder : 'Hledat ...', blogSearchResults: this.props.data.blogSearchResults, doctorsLink: this.props.data.doctorsLink })))))));
    };
    return Hero;
}(React.Component));
exports.default = Hero;
//# sourceMappingURL=Hero.js.map