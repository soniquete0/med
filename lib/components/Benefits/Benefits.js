"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// const listItems = this.props.data.map((item) => 
//   <li><p>{item}</p></li>
// );
var Benefits = function Benefits(props) {
  return React.createElement("div", {
    className: 'benefity'
  }, React.createElement("ul", null, React.createElement("li", null, React.createElement("p", null, "P\u0159\xEDv\u011Btiv\xFD person\xE1l")), React.createElement("li", null, React.createElement("p", null, "P\u0159\xEDv\u011Btiv\xFD person\xE1l")), React.createElement("li", null, React.createElement("p", null, "P\u0159\xEDv\u011Btiv\xFD person\xE1l")), React.createElement("li", null, React.createElement("p", null, "P\u0159\xEDv\u011Btiv\xFD person\xE1l"))));
};

var _default = Benefits;
exports.default = _default;