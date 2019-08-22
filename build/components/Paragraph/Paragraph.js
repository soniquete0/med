"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactResponsive = _interopRequireDefault(require("react-responsive"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _ParagraphText = _interopRequireDefault(require("./components/ParagraphText"));

var _ParagraphMedia = _interopRequireDefault(require("./components/ParagraphMedia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var LEFT_TEXT_RIGHT_TEXT = 'ltrt';
var LEFT_IMAGE_RIGHT_IMAGE = 'liri';
var LEFT_TEXT_RIGHT_IMAGE = 'ltri';
var LEFT_IMAGE_RIGHT_TEXT = 'lirt';
var FULL_IMAGE = 'fi';
var FULL_TEXT = 'ft';
var FULL = 'f';

var Paragraph = function Paragraph(props) {
  var _props$data = props.data,
      leftMedia = _props$data.leftMedia,
      rightMedia = _props$data.rightMedia,
      leftText = _props$data.leftText,
      rightText = _props$data.rightText;
  var layout;
  var LEFT_MEDIA = leftMedia && (leftMedia.filename || leftMedia.type === 'embeddedVideo');
  var LEFT_TEXT = leftText && leftText.length > 0;
  var RIGHT_MEDIA = rightMedia && rightMedia.filename;
  var RIGHT_TEXT = rightText && rightText.length > 0;

  if (LEFT_TEXT && RIGHT_TEXT && !LEFT_MEDIA && !RIGHT_MEDIA) {
    layout = LEFT_TEXT_RIGHT_TEXT;
  }

  if (LEFT_MEDIA && RIGHT_MEDIA && !LEFT_TEXT && !RIGHT_TEXT) {
    layout = LEFT_IMAGE_RIGHT_IMAGE;
  }

  if (LEFT_MEDIA && RIGHT_TEXT && !LEFT_TEXT && !RIGHT_MEDIA) {
    layout = LEFT_IMAGE_RIGHT_TEXT;
  }

  if (LEFT_TEXT && RIGHT_MEDIA && !LEFT_MEDIA && !RIGHT_TEXT) {
    layout = LEFT_TEXT_RIGHT_IMAGE;
  }

  if (LEFT_MEDIA && !RIGHT_MEDIA && !RIGHT_TEXT && !LEFT_TEXT) {
    layout = FULL_IMAGE;
  }

  if (LEFT_TEXT && !RIGHT_MEDIA && !RIGHT_TEXT && !LEFT_MEDIA) {
    layout = FULL_TEXT;
  }

  if (LEFT_TEXT && RIGHT_TEXT && LEFT_MEDIA && RIGHT_MEDIA) {
    layout = FULL;
  }

  var renderLayout = function renderLayout(value) {
    switch (value) {
      case LEFT_IMAGE_RIGHT_IMAGE:
        return React.createElement("div", {
          className: 'row'
        }, React.createElement("div", {
          className: "col-12 col-md-6"
        }, React.createElement(_ParagraphMedia["default"], {
          source: leftMedia,
          width: '438'
        })), React.createElement("div", {
          className: "col-12 col-md-6 imgWithMarginTop"
        }, React.createElement(_ParagraphMedia["default"], {
          source: rightMedia,
          width: '438'
        })));

      case LEFT_TEXT_RIGHT_TEXT:
        return React.createElement("div", {
          className: 'row'
        }, React.createElement("div", {
          className: "col-12 col-md-6"
        }, React.createElement(_ParagraphText["default"], {
          source: leftText
        })), React.createElement("div", {
          className: "col-12 col-md-6"
        }, React.createElement(_ParagraphText["default"], {
          source: rightText
        })));

      case LEFT_TEXT_RIGHT_IMAGE:
        return React.createElement(React.Fragment, null, React.createElement("div", {
          className: "row"
        }, React.createElement(_reactResponsive["default"], {
          minDeviceWidth: 992
        }, React.createElement("div", {
          className: 'col-12 col-lg-6'
        }, React.createElement(_ParagraphText["default"], {
          source: leftText,
          "class": 'textWithImg'
        })), React.createElement("div", {
          className: "col-12 col-lg-6"
        }, React.createElement(_ParagraphMedia["default"], {
          source: rightMedia,
          width: '438'
        }))), React.createElement(_reactResponsive["default"], {
          maxDeviceWidth: 991
        }, React.createElement("div", {
          className: "col-12 col-lg-6"
        }, React.createElement(_ParagraphMedia["default"], {
          source: rightMedia,
          width: '438'
        })), React.createElement("div", {
          className: 'col-12 col-lg-6'
        }, React.createElement(_ParagraphText["default"], {
          source: leftText,
          "class": 'textWithImg'
        })))));

      case LEFT_IMAGE_RIGHT_TEXT:
        return React.createElement("div", {
          className: 'row'
        }, React.createElement("div", {
          className: "col-12 col-lg-6"
        }, React.createElement(_ParagraphMedia["default"], {
          source: leftMedia,
          width: '438'
        })), React.createElement("div", {
          className: 'col-12 col-lg-6'
        }, React.createElement(_ParagraphText["default"], {
          source: rightText,
          "class": 'textWithImg'
        })));

      case FULL_IMAGE:
        return React.createElement("div", {
          className: "row"
        }, React.createElement("div", {
          className: "col"
        }, React.createElement(_ParagraphMedia["default"], {
          source: leftMedia,
          width: '876'
        })));

      case FULL_TEXT:
        return React.createElement("div", {
          className: "row"
        }, React.createElement("div", {
          className: "col"
        }, React.createElement(_ParagraphText["default"], {
          source: leftText
        })));

      case FULL:
        return React.createElement(React.Fragment, null, React.createElement("div", {
          className: "row"
        }, React.createElement("div", {
          className: "col-12 col-lg-6"
        }, React.createElement(_ParagraphMedia["default"], {
          source: leftMedia,
          width: '438'
        })), React.createElement("div", {
          className: 'col-12 col-lg-6'
        }, React.createElement(_ParagraphText["default"], {
          source: rightText,
          "class": 'textWithImg'
        }))), React.createElement("div", {
          className: "row"
        }, React.createElement(_reactResponsive["default"], {
          minDeviceWidth: 992
        }, React.createElement("div", {
          className: 'col-12 col-lg-6'
        }, React.createElement(_ParagraphText["default"], {
          source: leftText
        })), React.createElement("div", {
          className: "col-12 col-lg-6"
        }, React.createElement(_ParagraphMedia["default"], {
          source: rightMedia,
          width: '438'
        }))), React.createElement(_reactResponsive["default"], {
          maxDeviceWidth: 991
        }, React.createElement("div", {
          className: "col-12 col-lg-6"
        }, React.createElement(_ParagraphMedia["default"], {
          source: rightMedia,
          width: '438'
        })), React.createElement("div", {
          className: 'col-12 col-lg-6'
        }, React.createElement(_ParagraphText["default"], {
          source: leftText,
          "class": 'textAllContent'
        })))));

      default:
        return React.createElement("div", {
          style: {
            padding: '3rem 0'
          }
        }, React.createElement("p", {
          style: {
            fontSize: 24
          }
        }, React.createElement("b", null, "Left text:"), ' ', React.createElement("span", {
          style: {
            color: '#2473ba'
          }
        }, "can be used only with right text or right image")), React.createElement("p", {
          style: {
            fontSize: 24
          }
        }, React.createElement("b", null, "Left image:"), ' ', React.createElement("span", {
          style: {
            color: '#2473ba'
          }
        }, "can be used only with right text or right image")), React.createElement("p", {
          style: {
            fontSize: 24
          }
        }, React.createElement("b", null, "Right text:"), ' ', React.createElement("span", {
          style: {
            color: '#2473ba'
          }
        }, "can be used only with left text and left image")), React.createElement("p", {
          style: {
            fontSize: 24
          }
        }, React.createElement("b", null, "Right Image:"), ' ', React.createElement("span", {
          style: {
            color: '#2473ba'
          }
        }, "can be used only with left text or left image")));
    }
  };

  var _props$data2 = props.data,
      buttonUrl = _props$data2.buttonUrl,
      buttonText = _props$data2.buttonText,
      paddingTop = _props$data2.paddingTop,
      paddingBottom = _props$data2.paddingBottom;
  return React.createElement("div", {
    className: "paragraph ".concat(paddingTop ? 'paragraph--paddingTop' : '', " ").concat(paddingBottom ? 'paragraph--paddingBottom' : '')
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "paragraph__content"
  }, renderLayout(layout), buttonText && buttonUrl && React.createElement(_Button["default"], {
    url: buttonUrl,
    classes: 'btn--blueBorder'
  }, buttonText))));
};

var _default = Paragraph;
exports["default"] = _default;