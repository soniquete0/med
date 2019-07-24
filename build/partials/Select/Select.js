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
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isItemsAlreadyChanged: false,
            items: []
        };
        return _this;
    }
    Select.prototype.componentDidMount = function () {
        var _this = this;
        // will be executed only once
        if (!this.state.isItemsAlreadyChanged) {
            setTimeout(function () { return _this.setState({
                items: _this.props.items,
                isItemsAlreadyChanged: true
            }); }, 1000);
        }
    };
    Select.prototype.render = function () {
        var items = this.state.items;
        var _a = this.props, onChange = _a.onChange, className = _a.className, value = _a.value, defaultValue = _a.defaultValue;
        return (React.createElement("div", { className: "selectBtn " + className },
            React.createElement("select", { value: value, onChange: onChange },
                React.createElement("option", { value: '' }, defaultValue),
                items && items.map(function (item, idx) { return React.createElement("option", { key: idx, value: item }, item); })),
            React.createElement("span", { className: "arrow" })));
    };
    return Select;
}(React.Component));
exports.default = Select;
//# sourceMappingURL=Select.js.map