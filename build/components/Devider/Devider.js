"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var isBackoffice_1 = require("../../helpers/isBackoffice");
function Devider(props) {
    var _a = props.data, marginTop = _a.marginTop, marginBottom = _a.marginBottom, displayDots = _a.displayDots;
    return (isBackoffice_1.default() || displayDots) ? (React.createElement("div", { className: "dividerCircles", style: {
            marginTop: parseInt(marginTop, 10) > 0 ? parseInt(marginTop, 10) : 0,
            marginBottom: parseInt(marginBottom, 10) > 0 ? parseInt(marginBottom, 10) : 0
        } },
        React.createElement("div", null))) : React.createElement(React.Fragment, null);
}
exports.default = Devider;
//# sourceMappingURL=Devider.js.map