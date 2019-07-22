"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var Media_1 = require("../../partials/Media");
var Select_1 = require("../../partials/Select");
var Button_1 = require("../../partials/Button");
var DoctorList = /** @class */ (function (_super) {
    __extends(DoctorList, _super);
    function DoctorList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            numberOfPage: 1,
            filter: ''
        };
        _this.handleChangeSelect = _this.handleChangeSelect.bind(_this);
        return _this;
    }
    DoctorList.prototype.componentDidMount = function () {
        // ?clinic=Vysocany
        var search = this.props.location.search;
        if (search.length > 0) {
            this.setFilterBySerchParam(search.split('=')[1]);
        }
    };
    DoctorList.prototype.handleChangeSelect = function (event) {
        var history = this.props.history;
        this.setState({ filter: event.target.value });
        history.push({
            search: "?clinic=" + this.transformSearchParamToClinicName(event.target.value)
        });
    };
    DoctorList.prototype.getUniquePolyclinicNames = function (items) {
        return __spread(new Set(items.map(function (item) { return item.clinicName.replace(/Poliklinika/, '').trim(); })));
    };
    DoctorList.prototype.transformSearchParamToClinicName = function (param) {
        switch (param) {
            case 'Vysočany': return 'Vysocany';
            case 'Budějovická': return 'Budejovicka';
            case 'Zelený pruh': return 'ZelenyPruh';
            case 'Holešovice': return 'Holesovice';
            default: return '';
        }
    };
    DoctorList.prototype.setFilterBySerchParam = function (param) {
        switch (param) {
            case 'Vysocany':
                this.setState({ filter: 'Vysočany' });
                break;
            case 'Budejovicka':
                this.setState({ filter: 'Budějovická' });
                break;
            case 'ZelenyPruh':
                this.setState({ filter: 'Zelený pruh' });
                break;
            case 'Holesovice':
                this.setState({ filter: 'Holešovice' });
                break;
            default:
                this.setState({ filter: '' });
                break;
        }
    };
    DoctorList.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, doctors = _a.doctors, title = _a.title, excludedDoctor = _a.excludedDoctor;
        return (React.createElement(List_1.default, { data: doctors, searchedText: this.state.filter, exclude: { key: 'name', value: excludedDoctor }, searchKeys: ['content.doctorPersonalInformation.polyclinic.name'] }, function (_a) {
            var getPage = _a.getPage;
            var _b = getPage(_this.state.numberOfPage, 'infinite', 6), items = _b.items, lastPage = _b.lastPage;
            return items && items.length > 0 ? (React.createElement("section", { className: 'doctorList' },
                React.createElement("div", { className: 'container' },
                    title && React.createElement("h3", null, title),
                    React.createElement(Select_1.default, { value: _this.state.filter, className: 'hCenterBlock', onChange: _this.handleChangeSelect, defaultValue: 'Všechny polikliniky', items: _this.getUniquePolyclinicNames(items) }),
                    React.createElement("div", { className: "doctorList__wrapper" }, items &&
                        items.map(function (doctor, index) {
                            return (React.createElement("div", { className: 'doctorList__item', key: index },
                                React.createElement("div", { className: 'doctorList__item__img' }, (doctor.image && doctor.image.filename && React.createElement(Media_1.default, { data: doctor.image, type: "image" })) || (React.createElement("img", { className: "avatarImg", src: '../../../assets/medicon/images/doctorIcon.svg', alt: "Medicon Doctor Icon" }))),
                                React.createElement("div", { className: 'doctorList__item__info' },
                                    React.createElement("h3", null, doctor.name),
                                    doctor.field && React.createElement("div", { className: 'doctorList__item__info__description' },
                                        React.createElement("div", { className: 'doctorList__item__info__description--container' },
                                            React.createElement("p", null, doctor.field))),
                                    React.createElement("p", { className: 'doctorList__item__info--mobileField' }, doctor.field),
                                    React.createElement(Link_1.default, __assign({}, doctor.clinicUrl, { className: 'doctorList__item__info__link' }), doctor.clinicName),
                                    React.createElement(Button_1.default, { classes: "btn--blueBorder btn--small", url: doctor.doctorUrl }, "v\u00EDce informac\u00ED"))));
                        })),
                    _this.state.numberOfPage < lastPage && React.createElement("div", { className: "doctorList__btnHolder" },
                        React.createElement("button", { className: 'btn btn--blueBkg', onClick: function () { return _this.setState({ numberOfPage: lastPage }); } }, "zobrazit v\u00EDce"))))) : React.createElement(React.Fragment, null);
        }));
    };
    return DoctorList;
}(React.Component));
exports.default = react_router_dom_1.withRouter(DoctorList);
//# sourceMappingURL=DoctorList.js.map