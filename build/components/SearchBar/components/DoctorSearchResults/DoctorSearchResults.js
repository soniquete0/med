"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DoctorSearchResults;

var React = _interopRequireWildcard(require("react"));

var moment = _interopRequireWildcard(require("moment"));

var _List = _interopRequireDefault(require("../../../List"));

var _Link = _interopRequireDefault(require("../../../../partials/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isDoctorActive(workingHours) {
  var weekDayKey = getWeekDayKey();

  if (workingHours && workingHours.weeks && workingHours.weeks[0] && workingHours.weeks[0].days) {
    if (!workingHours.weeks[0].days[weekDayKey] && workingHours.weeks[0].days[weekDayKey].length > 0) {
      return -1;
    }

    return workingHours.weeks[0].days[weekDayKey].some(function (doctorWorkingHours) {
      var regex = /^\s*([0-9]{2}):([0-9]{2})\s*$/;
      var from = regex.exec(doctorWorkingHours.from);
      var to = regex.exec(doctorWorkingHours.to);

      if (from && from[1] && from[2] && to && to[1] && to[2]) {
        var startOfShift = moment().startOf('day').add(from[1], 'hours').add(from[2], 'minutes');
        var endOfShift = moment().startOf('day').add(to[1], 'hours').add(to[2], 'minutes');
        var now = moment();

        if (now.isSameOrBefore(endOfShift) && now.isSameOrAfter(startOfShift)) {
          return true;
        }
      }

      return false;
    }) ? 1 : 0;
  }

  return -1;
}

function getWeekDayKey() {
  var day;

  switch (moment().isoWeekday()) {
    case 1:
      day = 'mo';
      break;

    case 2:
      day = 'tu';
      break;

    case 3:
      day = 'we';
      break;

    case 4:
      day = 'th';
      break;

    case 5:
      day = 'fr';
      break;

    case 6:
      day = 'st';
      break;

    case 7:
      day = 'su';
      break;

    default:
      day = 'mo';
      break;
  }

  return day;
}

function DoctorSearchResults(props) {
  var searchResults = props.searchResults,
      query = props.query,
      searchKeys = props.searchKeys,
      clearData = props.clearData,
      checkDoctorResults = props.checkDoctorResults;
  return React.createElement(_List["default"], {
    data: searchResults,
    searchedText: query,
    searchKeys: searchKeys
  }, function (_ref) {
    var data = _ref.data;

    if (data.length > 0) {
      checkDoctorResults(true);
      return React.createElement("ul", {
        className: 'searchBarResults__doctors'
      }, data.map(function (item) {
        var workingHours = null;

        try {
          workingHours = JSON.parse(item.workingHours);
        } catch (e) {
          console.log('error', e);
        }

        return _objectSpread({}, item, {
          isDoctorActive: isDoctorActive(workingHours)
        });
      }).sort(function (a, b) {
        if (a.isDoctorActive === b.isDoctorActive) {
          if (a.name < b.name) {
            return -1;
          }

          if (a.name > b.name) {
            return 1;
          }

          return 0;
        }

        return b.isDoctorActive - a.isDoctorActive;
      }).map(function (doctor, i) {
        return React.createElement("li", {
          key: i,
          className: [-1, 1].includes(doctor.isDoctorActive) ? 'active' : '',
          onClick: function onClick() {
            return clearData();
          }
        }, React.createElement(_Link["default"], doctor.link, React.createElement("span", null, React.createElement("p", null, React.createElement("span", {
          className: doctor.isDoctorActive === -1 ? 'noTimetable' : ''
        }, doctor.name), doctor.isDoctorActive > -1 && React.createElement(React.Fragment, null, React.createElement("span", {
          style: doctor.isDoctorActive === 1 ? {
            color: '#31a031'
          } : {
            color: '#c23636'
          }
        }, doctor.isDoctorActive === 1 ? 'ordinuje' : 'v tuto chvíli neordinuje'))), React.createElement("p", null, doctor.speciality)), React.createElement("span", null, doctor.clinic)));
      }));
    } else {
      checkDoctorResults(false);
      return React.createElement(React.Fragment, null);
    }
  });
}