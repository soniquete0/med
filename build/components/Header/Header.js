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
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Header.prototype.render = function () {
        return (React.createElement("header", { className: 'header' },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: 'header__wrapper' },
                    React.createElement("div", { className: 'header__logo' },
                        React.createElement("a", { href: '' },
                            React.createElement("img", { src: "/assets/images/logo.png", alt: "Medicon Logo" }))),
                    React.createElement("nav", null,
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement("a", { href: "" }, "Domu")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "" }, "O nas")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "" }, "kontakty"))),
                        React.createElement("div", { className: 'hamburgerHolder' },
                            React.createElement("div", { className: 'hamburger' },
                                React.createElement("div", null)),
                            React.createElement("span", null, "menu"))))),
            React.createElement("div", { className: 'header__iso' },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "none" },
                    React.createElement("polygon", { fill: "white", points: "0,0 0,50 10,100 100,0" })))));
    };
    return Header;
}(React.Component));
export default Header;
//# sourceMappingURL=Header.js.map