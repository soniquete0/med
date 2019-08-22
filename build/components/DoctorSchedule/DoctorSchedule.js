"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var moment = _interopRequireWildcard(require("moment"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _urlize = require("urlize");

var _reactApollo = require("react-apollo");

var _Link = _interopRequireDefault(require("../../partials/Link"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GET_CONTEXT = (0, _graphqlTag["default"])(_templateObject());

var getDayOfWeek = function getDayOfWeek(day) {
  switch (day) {
    case 'mo':
      return 'pondělí';

    case 'tu':
      return 'úterý';

    case 'we':
      return 'středa';

    case 'th':
      return 'čtvrtek';

    case 'fr':
      return 'pátek';

    case 'st':
      return 'sobota';

    case 'su':
      return 'neděle';

    default:
      return 'neděle';
  }
};

var getWeekStructure = function getWeekStructure(week) {
  var structuredWeek = [];
  var weekDays = Object.keys(week.days);
  weekDays.forEach(function (day) {
    var weekDay = {};
    weekDay.day = getDayOfWeek(day);

    if (week.days[day] && week.days[day].length > 0) {
      for (var i = 0; i < week.days[day].length; i++) {
        week.days[day].map(function (time, index) {
          weekDay[index] = {
            note: time.note || '',
            time: "".concat(time.from, " - ").concat(time.to)
          };
        });
      }
    }

    structuredWeek.push(weekDay);
  });
  return structuredWeek;
};

var getScheduleTitle = function getScheduleTitle(regularity, oddWeekTitle, evenWeekTitle, regularWeekTitle) {
  if (regularity === 'regular' && regularWeekTitle) {
    return regularWeekTitle;
  }

  if (regularity === 'odd' && oddWeekTitle) {
    return oddWeekTitle;
  }

  if (regularity === 'even' && evenWeekTitle) {
    return evenWeekTitle;
  }

  return null;
};

var getAbsenceLink = function getAbsenceLink(data, alternate) {
  if (alternate && data) {
    var firstName = alternate.firstName,
        lastName = alternate.lastName,
        id = alternate.id;
    var doctorSlug = (0, _urlize.urlize)("".concat(firstName, "-").concat(lastName, "-").concat(id));
    var link = "/".concat(data.websiteData && data.websiteData.title.toLowerCase(), "/").concat(data.languageData && data.languageData.code, "/").concat(doctorSlug);
    return link;
  }

  return null;
};

var DoctorSchedule = function DoctorSchedule(props) {
  var _props$data = props.data,
      schedule = _props$data.schedule,
      oddWeekTitle = _props$data.oddWeekTitle,
      evenWeekTitle = _props$data.evenWeekTitle,
      regularWeekTitle = _props$data.regularWeekTitle,
      absences = _props$data.absences;
  return React.createElement("section", {
    className: 'container doctorScheduleSection'
  }, schedule && schedule.weeks && schedule.weeks.map(function (week, i) {
    return React.createElement("div", {
      className: "doctorSchedule",
      key: i
    }, React.createElement("div", {
      className: 'doctorSchedule__title'
    }, React.createElement("h4", null, getScheduleTitle(week.regularity, oddWeekTitle, evenWeekTitle, regularWeekTitle))), React.createElement("table", null, React.createElement("tbody", null, week && getWeekStructure(week).map(function (item, j) {
      if (item.day === 'sobota' || item.day === 'neděle') {
        return '';
      }

      return React.createElement(React.Fragment, {
        key: j
      }, React.createElement("tr", {
        key: j,
        className: 'mobileHeading'
      }, React.createElement("td", {
        colSpan: 7
      }, item.day)), React.createElement("tr", {
        className: 'normalRow'
      }, React.createElement("td", null, item.day), React.createElement("td", null, React.createElement("p", null, item['0'] && item['0'].time || ' - '), item['0'] && item['0'].note && React.createElement("p", null, item['0'].note)), React.createElement("td", {
        className: 'circleCell'
      }, React.createElement(_DividerCircles["default"], null)), React.createElement("td", null, React.createElement("p", null, item['1'] && item['1'].time || ' - '), item['1'] && item['1'].note && React.createElement("p", null, item['1'].note)), React.createElement("td", {
        className: 'circleCell'
      }, React.createElement(_DividerCircles["default"], null)), React.createElement("td", null, React.createElement("p", null, item['2'] && item['2'].time || ' - '), item['2'] && item['2'].note && React.createElement("p", null, item['2'].note)), React.createElement("td", {
        className: 'circleCell'
      }, React.createElement(_DividerCircles["default"], null)), React.createElement("td", null, React.createElement("p", null, item['3'] && item['3'].time || ' - '), item['3'] && item['3'].note && React.createElement("p", null, item['3'].note))));
    }))));
  }), React.createElement(_reactApollo.Query, {
    query: GET_CONTEXT
  }, function (_ref) {
    var data = _ref.data;
    return React.createElement(React.Fragment, null, absences && Array.isArray(absences) && absences.length > 0 && React.createElement("div", {
      className: 'absences'
    }, React.createElement("h4", null, "Nep\u0159\xEDtomnost"), React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("td", null, "Od"), React.createElement("td", null, "Do"), React.createElement("td", null, "Zastupuje"))), React.createElement("tbody", null, absences.map(function (absence, i) {
      if (absence) {
        return React.createElement("tr", {
          key: i
        }, React.createElement("td", null, absence.fromDate && moment(absence.fromDate.date).format('DD-MM-YYYY') || ''), React.createElement("td", null, absence.toDate.date && moment(absence.toDate.date).format('DD-MM-YYYY') || ''), React.createElement("td", null, React.createElement(_Link["default"], {
          dynamic: true,
          url: getAbsenceLink(data, absence.alternate)
        }, "".concat(absence.alternate && absence.alternate.firstName || '', " \n                                ").concat(absence.alternate && absence.alternate.lastName || ''))));
      }
    })))));
  }));
};

var _default = DoctorSchedule;
exports["default"] = _default;