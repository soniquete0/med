"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactCookieConsent = _interopRequireDefault(require("react-cookie-consent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var CookiePopup = function CookiePopup(_ref) {
  var lang = _ref.lang;

  function renderBanner() {
    return React.createElement("div", {
      className: "cookiePopup"
    }, React.createElement("img", {
      src: "/assets/medicon/images/cookie.svg",
      alt: "cookies"
    }), React.createElement("p", null, lang === 'cs' ? 'Tento web používá soubory cookie k analýze návštěvnosti a měření reklam.' : 'This website uses cookies to ensure you get the best experience on our website.', ' ', React.createElement("a", {
      href: 'https://cookiesandyou.com/',
      target: '_blank'
    }, lang === 'cs' ? 'Další informace o tom, jak používáme soubory cookie' : 'Learn more')));
  }

  return React.createElement(_reactCookieConsent["default"], {
    expires: 365,
    location: 'bottom',
    cookieName: 'MediconCookies',
    acceptOnScroll: false,
    buttonText: lang === 'cs' ? 'OK' : 'Got it!',
    acceptOnScrollPercentage: 100,
    style: {
      background: '#efefef',
      color: '#3c3c3b'
    },
    buttonStyle: {
      background: '#2473ba',
      color: '#ffffff',
      fontSize: '13px'
    }
  }, renderBanner());
};

var _default = CookiePopup;
exports["default"] = _default;