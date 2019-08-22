"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _components = require("../../components");

var resources = _interopRequireWildcard(require("./resources"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ComponentsService = function () {
  function ComponentsService() {
    _classCallCheck(this, ComponentsService);

    _defineProperty(this, "Types", {
      DIVIDER: 'Divider',
      HERO: 'Hero',
      HEADER: 'Header',
      CROSSROADS: 'CrossRoads',
      BENEFITS: 'Benefits',
      HIGHLIGHT: 'Highlight',
      FOOTER: 'Footer',
      REVIEWS: 'Reviews',
      TEXTBLOCK: 'TextBlock',
      INFOBOXES: 'InfoBoxes',
      MAP: 'Map',
      DOCTORLIST: 'DoctorList',
      POLYCLINICSLIST: 'PolyclinicsList',
      EXPERTISELIST: 'ExpertiseList',
      INFORECTANGLES: 'InfoRectangles',
      POLYCLINICINFO: 'PolyclinicInfo',
      BLOG: 'Blog',
      POLYCLINICBOXES: 'PolyclinicBoxes',
      DOCTORCARD: 'DoctorCard',
      ODBORNOST: 'Odbornost',
      MYPROBLEM: 'MyProblem',
      JOBPOSITIONS: 'JobPositions',
      JOBOFFERS: 'JobOffers',
      CAREERFORM: 'CareerForm',
      EXPERTISEDESCRIPTION: 'ExpertiseDescription',
      MEDICALGROUP: 'MedicalGroup',
      TIMELINE: 'Timeline',
      VIEWSABOUTUS: 'ViewsAboutUs',
      CONTACTINFO: 'ContactInfo',
      CONTACTFORM: 'ContactForm',
      DOWNLOADS: 'Downloads',
      CONTACTSBLOCK: 'ContactsBlock',
      FAQ: 'Faq',
      BLOGARTICLE: 'BlogArticle',
      DOCTORSCHEDULE: 'DoctorSchedule',
      WORKINGHOURS: 'WorkingHours',
      REGISTRATIONBLOCK: 'RegistrationBlock',
      PARAGRAPH: 'Paragraph',
      UNIONSTRUCTURE: 'UnionStructure'
    });
  }

  _createClass(ComponentsService, [{
    key: "getAllowedTypes",
    value: function getAllowedTypes() {
      var _this = this;

      var res = Object.keys(this.Types).map(function (key) {
        return _this.Types[key];
      });
      return res;
    }
  }, {
    key: "getComponent",
    value: function getComponent(type) {
      switch (type) {
        case this.Types.DIVIDER:
          return _components.Divider;

        case this.Types.HEADER:
          return _components.Header;

        case this.Types.HERO:
          return _components.Hero;

        case this.Types.CROSSROADS:
          return _components.CrossRoads;

        case this.Types.BENEFITS:
          return _components.Benefits;

        case this.Types.HIGHLIGHT:
          return _components.Highlight;

        case this.Types.FOOTER:
          return _components.Footer;

        case this.Types.REVIEWS:
          return _components.Reviews;

        case this.Types.TEXTBLOCK:
          return _components.TextBlock;

        case this.Types.MAP:
          return _components.Map;

        case this.Types.INFOBOXES:
          return _components.InfoBoxes;

        case this.Types.DOCTORLIST:
          return _components.DoctorList;

        case this.Types.POLYCLINICSLIST:
          return _components.PolyclinicsList;

        case this.Types.EXPERTISELIST:
          return _components.ExpertiseList;

        case this.Types.INFORECTANGLES:
          return _components.InfoRectangles;

        case this.Types.POLYCLINICINFO:
          return _components.PolyclinicInfo;

        case this.Types.BLOG:
          return _components.Blog;

        case this.Types.POLYCLINICBOXES:
          return _components.PolyclinicBoxes;

        case this.Types.DOCTORCARD:
          return _components.DoctorCard;

        case this.Types.ODBORNOST:
          return _components.Odbornost;

        case this.Types.MYPROBLEM:
          return _components.MyProblem;

        case this.Types.JOBPOSITIONS:
          return _components.JobPositions;

        case this.Types.JOBOFFERS:
          return _components.JobOffers;

        case this.Types.CAREERFORM:
          return _components.CareerForm;

        case this.Types.EXPERTISEDESCRIPTION:
          return _components.ExpertiseDescription;

        case this.Types.MEDICALGROUP:
          return _components.MedicalGroup;

        case this.Types.TIMELINE:
          return _components.Timeline;

        case this.Types.VIEWSABOUTUS:
          return _components.ViewsAboutUs;

        case this.Types.CONTACTINFO:
          return _components.ContactInfo;

        case this.Types.CONTACTFORM:
          return _components.ContactForm;

        case this.Types.DOWNLOADS:
          return _components.Downloads;

        case this.Types.CONTACTSBLOCK:
          return _components.ContactsBlock;

        case this.Types.FAQ:
          return _components.Faq;

        case this.Types.BLOGARTICLE:
          return _components.BlogArticle;

        case this.Types.DOCTORSCHEDULE:
          return _components.DoctorSchedule;

        case this.Types.WORKINGHOURS:
          return _components.WorkingHours;

        case this.Types.REGISTRATIONBLOCK:
          return _components.RegistrationBlock;

        case this.Types.PARAGRAPH:
          return _components.Paragraph;

        case this.Types.UNIONSTRUCTURE:
          return _components.UnionStructure;

        default:
          return function () {
            return React.createElement(_components.AlertNotFound, {
              type: "component"
            });
          };
      }
    }
  }, {
    key: "getComponentResource",
    value: function getComponentResource(type) {
      var res = resources["default"];
      var typedRes = resources[type.toLowerCase()];

      if ((0, _lodash.isObjectLike)(typedRes)) {
        res = _objectSpread({}, res, {}, typedRes);
      }

      return res;
    }
  }, {
    key: "getForm",
    value: function getForm(type) {
      switch (type) {
        default:
          return function () {
            return React.createElement(_components.AlertNotFound, {
              type: "form"
            });
          };
      }
    }
  }]);

  return ComponentsService;
}();

var _default = ComponentsService;
exports["default"] = _default;