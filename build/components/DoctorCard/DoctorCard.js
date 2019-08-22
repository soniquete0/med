"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _TextBlock = _interopRequireDefault(require("../TextBlock"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var DoctorCard = function DoctorCard(props) {
  var _props$data = props.data,
      name = _props$data.name,
      specialization = _props$data.specialization,
      phone = _props$data.phone,
      nurse = _props$data.nurse,
      doctorImage = _props$data.doctorImage,
      clinicName = _props$data.clinicName,
      clinicExtraInfo = _props$data.clinicExtraInfo,
      clinicAddress = _props$data.clinicAddress,
      additionalInfo = _props$data.additionalInfo,
      clinicColor = _props$data.clinicColor;
  return React.createElement("section", {
    className: 'doctorCard'
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: 'doctorCard__main'
  }, doctorImage && doctorImage.filename && React.createElement(_Media["default"], {
    data: doctorImage,
    type: "image"
  }) || React.createElement("img", {
    src: "/assets/medicon/images/doctorIcon.svg"
  }), name && React.createElement("h3", {
    className: 'gradientHeading'
  }, name), specialization && React.createElement("p", {
    className: 'doctorCard__main__spe'
  }, specialization), nurse && nurse.length > 1 && React.createElement("p", {
    className: 'doctorCard__main__sis'
  }, "Sestra: ", React.createElement("strong", null, nurse)))), React.createElement("div", {
    className: 'fullwidthContainer'
  }, React.createElement("div", {
    className: "doctorCard__info"
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: "doctorCard__info__wrapper"
  }, React.createElement("div", {
    className: 'doctorCard__info__item'
  }, React.createElement("div", {
    className: 'doctorCard__info__item__wrap'
  }, React.createElement("img", {
    src: "/assets/medicon/images/stethoscopeIcon.svg"
  }), React.createElement("p", null, specialization))), React.createElement("div", {
    className: 'doctorCard__info__item'
  }, React.createElement("div", {
    className: 'doctorCard__info__item__wrap'
  }, React.createElement("img", {
    src: "/assets/medicon/images/phoneIcon.svg"
  }), React.createElement("a", {
    href: "callto:".concat(phone)
  }, phone))), React.createElement("div", {
    className: 'doctorCard__info__item doctorCard__info__item--location '
  }, React.createElement("img", {
    src: "/assets/medicon/images/geoIcon.svg"
  }), React.createElement("div", null, React.createElement("p", null, React.createElement("strong", null, clinicName), clinicExtraInfo && React.createElement("span", {
    style: clinicColor && {
      color: "".concat(clinicColor)
    }
  }, '  - ' + clinicExtraInfo)), React.createElement("p", null, clinicAddress))))))), React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'doctorCard__divider'
  }, React.createElement("div", {
    className: "dividerCircles"
  }, React.createElement("div", null)))), React.createElement(_List["default"], {
    data: additionalInfo
  }, function (_ref) {
    var data = _ref.data;
    return data && data.map(function (item, i) {
      return React.createElement(_TextBlock["default"], {
        key: i,
        data: {
          title: item.title,
          text: item.text
        }
      });
    });
  }));
};

var _default = DoctorCard;
exports["default"] = _default;