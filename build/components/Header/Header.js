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
            React.createElement("nav", null,
                React.createElement("li", null,
                    React.createElement("a", null, "link"),
                    React.createElement("a", null, "link"),
                    React.createElement("a", null, "link")))));
    };
    return Header;
}(React.Component));
export default Header;
//# sourceMappingURL=Header.js.map