"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var moment = require("moment");
var List_1 = require("../../../List");
var Link_1 = require("../../../../partials/Link");
function isDoctorActive(workingHours) {
    var weekDayKey = getWeekDayKey();
    if (workingHours &&
        workingHours.weeks &&
        workingHours.weeks[0] &&
        workingHours.weeks[0].days &&
        workingHours.weeks[0].days[weekDayKey] &&
        workingHours.weeks[0].days[weekDayKey] &&
        workingHours.weeks[0].days[weekDayKey] &&
        workingHours.weeks[0].days[weekDayKey].length > 0 &&
        workingHours.weeks[0].days[weekDayKey].length > 0) {
        return workingHours.weeks[0].days[weekDayKey].some(function (doctorWorkingHours) {
            var regex = /^\s*([0-9]{2}):([0-9]{2})\s*$/;
            var from = regex.exec(doctorWorkingHours.from);
            var to = regex.exec(doctorWorkingHours.to);
            if (from && from[1] && from[2] && to && to[1] && to[2]) {
                var startOfShift = moment()
                    .startOf('day')
                    .add(from[1], 'hours')
                    .add(from[2], 'minutes');
                var endOfShift = moment()
                    .startOf('day')
                    .add(to[1], 'hours')
                    .add(to[2], 'minutes');
                var now = moment();
                if (now.isSameOrBefore(endOfShift) && now.isSameOrAfter(startOfShift)) {
                    return true;
                }
            }
            return false;
        });
    }
    return null;
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
    var searchResults = props.searchResults, query = props.query, searchKeys = props.searchKeys, clearData = props.clearData, checkDoctorResults = props.checkDoctorResults;
    return (React.createElement(List_1.default, { data: searchResults, searchedText: query, searchKeys: searchKeys }, function (_a) {
        var data = _a.data;
        if (data.length > 0) {
            checkDoctorResults(data.length);
            return (React.createElement("ul", { className: 'searchBarResults__doctors' }, data
                .map(function (item) {
                var workingHours = null;
                try {
                    workingHours = JSON.parse(item.workingHours);
                }
                catch (e) {
                    console.log('error', e);
                }
                return __assign({}, item, { isDoctorActive: isDoctorActive(workingHours) });
            })
                .sort(function (a, b) { return (a.isDoctorActive === true ? -1 : 1); })
                .map(function (doctor, i) {
                return (React.createElement("li", { key: i, className: (doctor.isDoctorActive === true || doctor.isDoctorActive === null)
                        ? 'active' : '', onClick: function () { return clearData(); } },
                    React.createElement(Link_1.default, __assign({}, doctor.link),
                        React.createElement("span", null,
                            React.createElement("p", null,
                                React.createElement("span", { className: doctor.isDoctorActive === null ? 'noTimetable' : '' }, doctor.name),
                                doctor.isDoctorActive !== null &&
                                    React.createElement(React.Fragment, null,
                                        React.createElement("span", { style: doctor.isDoctorActive ?
                                                { color: '#31a031' } :
                                                { color: '#c23636' } }, doctor.isDoctorActive ? 'ordinuje' : 'dnes již neordinuje'))),
                            React.createElement("p", null, doctor.speciality)),
                        React.createElement("span", null, doctor.clinic))));
            })));
        }
        else {
            checkDoctorResults(null);
            return (React.createElement(React.Fragment, null));
        }
    }));
}
exports.default = DoctorSearchResults;
//# sourceMappingURL=DoctorSearchResults.js.map