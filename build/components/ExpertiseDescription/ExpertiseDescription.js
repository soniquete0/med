"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

var _ExpertiseDescriptionCare = _interopRequireDefault(require("./components/ExpertiseDescriptionCare"));

var _ExpertiseDescriptionBoxes = _interopRequireDefault(require("./components/ExpertiseDescriptionBoxes"));

var _ExpertiseDescriptionExamination = _interopRequireDefault(require("./components/ExpertiseDescriptionExamination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var Description = function Description(props) {
  var _props$data = props.data,
      titleCare = _props$data.titleCare,
      firstText = _props$data.firstText,
      secondText = _props$data.secondText,
      hideBtn = _props$data.hideBtn,
      showHiddenText = _props$data.showHiddenText,
      titleExamination = _props$data.titleExamination,
      examinations = _props$data.examinations,
      boxes = _props$data.boxes;
  return React.createElement("div", {
    className: 'container'
  }, React.createElement("section", {
    className: 'expertiseDescription'
  }, React.createElement(_ExpertiseDescriptionCare["default"], {
    title: titleCare,
    firstText: firstText,
    secondText: secondText,
    hideBtn: hideBtn,
    showHiddenText: showHiddenText
  }), React.createElement(_List["default"], {
    data: examinations
  }, function (_ref) {
    var data = _ref.data;
    return data && React.createElement(_ExpertiseDescriptionExamination["default"], {
      title: titleExamination,
      examinations: data
    });
  }), boxes && boxes.length > 0 && React.createElement(_DividerCircles["default"], null), React.createElement(_List["default"], {
    data: boxes
  }, function (_ref2) {
    var data = _ref2.data;
    return data && React.createElement(_ExpertiseDescriptionBoxes["default"], {
      boxes: data
    });
  })));
};

var _default = Description;
exports["default"] = _default;