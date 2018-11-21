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
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("section", { className: 'hero' },
                React.createElement("h1", null, "title")),
            React.createElement("div", { className: "heroTest" },
                React.createElement("div", null,
                    React.createElement("h2", null, "Hello"),
                    " ",
                    React.createElement("p", null, "this is some crazy text ")),
                React.createElement("div", null,
                    React.createElement("h2", null, "Hello"),
                    " ",
                    React.createElement("p", null, "this is some crazy text ")),
                React.createElement("div", null,
                    React.createElement("h2", null, "Hello"),
                    " ",
                    React.createElement("p", null, "this is some crazy text ")),
                React.createElement("div", null,
                    React.createElement("h2", null, "Hello"),
                    " ",
                    React.createElement("p", null, "this is some crazy text "))),
            React.createElement("div", { className: 'heroBtn' },
                React.createElement("button", null, "waka"),
                React.createElement("button", null, "waka"),
                React.createElement("button", null, "waka"))));
    };
    return Hero;
}(React.Component));
export default Hero;
//# sourceMappingURL=Hero.js.map