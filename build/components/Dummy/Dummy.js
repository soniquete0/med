"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function Dummy(props) {
    var _a = props.data, marginTop = _a.marginTop, marginBottom = _a.marginBottom;
    console.log(props.data);
    return (React.createElement("div", { className: "dividerCircles", style: {
            marginTop: parseInt(marginTop, 10) > 0 ? parseInt(marginTop, 10) : 0,
            marginBottom: parseInt(marginBottom, 10) > 0 ? parseInt(marginBottom, 10) : 0
        } },
        React.createElement("div", null)));
}
exports.default = Dummy;
//# sourceMappingURL=Dummy.js.map