"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactMarkdown = _interopRequireWildcard(require("react-markdown"));

var _List = _interopRequireDefault(require("../List"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var ContactsBlock = function ContactsBlock(props) {
  var _props$data = props.data,
      title = _props$data.title,
      managementTitle = _props$data.managementTitle,
      nextTitle = _props$data.nextTitle,
      managementContacts = _props$data.managementContacts,
      nextContacts = _props$data.nextContacts,
      otherContacts = _props$data.otherContacts;
  return React.createElement("div", {
    className: 'contacts-block'
  }, React.createElement("div", {
    className: 'container'
  }, title && React.createElement("h3", null, title), React.createElement("div", null, managementTitle && React.createElement("h4", null, managementTitle), React.createElement("div", {
    className: 'contacts-block__main row'
  }, React.createElement(_List["default"], {
    data: managementContacts
  }, function (_ref) {
    var data = _ref.data;
    return data && data.map(function (mContact, i) {
      return React.createElement("div", {
        className: 'contacts-block__main__element col-sm-12 col-md-6 col-lg-3',
        key: i
      }, mContact.name && React.createElement("p", {
        className: 'contacts-block__name'
      }, mContact.name), mContact.positions && React.createElement("p", {
        className: 'contacts-block__position'
      }, mContact.positions), mContact.emails && React.createElement(ReactMarkdown, {
        className: 'contacts-block__email',
        source: mContact.emails
      }), mContact.phones && React.createElement(ReactMarkdown, {
        source: mContact.phones
      }));
    });
  }))), React.createElement("div", null, nextTitle && React.createElement("h4", null, nextTitle), React.createElement("div", {
    className: 'contacts-block__main row'
  }, React.createElement(_List["default"], {
    data: nextContacts
  }, function (_ref2) {
    var data = _ref2.data;
    return data && data.map(function (nContact, i) {
      return React.createElement("div", {
        className: 'contacts-block__main__element col-sm-12 col-md-6 col-lg-3',
        key: i
      }, nContact.name && React.createElement("p", {
        className: 'contacts-block__name'
      }, nContact.name), nContact.positions && React.createElement("p", {
        className: 'contacts-block__position'
      }, nContact.positions), nContact.emails && React.createElement(ReactMarkdown, {
        className: 'contacts-block__email',
        source: nContact.emails
      }), nContact.phones && React.createElement(ReactMarkdown, {
        source: nContact.phones
      }));
    });
  }))), React.createElement(_DividerCircles["default"], null), React.createElement("div", {
    className: 'contacts-block__main row'
  }, React.createElement(_List["default"], {
    data: otherContacts
  }, function (_ref3) {
    var data = _ref3.data;
    return data && data.map(function (oContact, i) {
      return React.createElement("div", {
        className: 'contacts-block__main__element col-sm-12 col-md-6 col-lg-3',
        key: i
      }, oContact.name && React.createElement("p", {
        className: 'contacts-block__name'
      }, oContact.name), oContact.positions && React.createElement("p", {
        className: 'contacts-block__position'
      }, oContact.positions), oContact.emails && React.createElement(ReactMarkdown, {
        className: 'contacts-block__email',
        source: oContact.emails
      }), oContact.phones && React.createElement(ReactMarkdown, {
        source: oContact.phones
      }));
    });
  }))));
};

var _default = ContactsBlock;
exports["default"] = _default;