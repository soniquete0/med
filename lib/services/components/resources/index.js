"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
<<<<<<< HEAD
exports.benefits = exports.hero = exports.header = exports.dummy = exports.default = void 0;
=======
exports.hero = exports.header = exports.dummy = exports.default = void 0;
>>>>>>> sandbox

var def = _interopRequireWildcard(require("./default.json"));

exports.default = def;

var dummy = _interopRequireWildcard(require("./dummy.json"));

exports.dummy = dummy;

var header = _interopRequireWildcard(require("./header.json"));
<<<<<<< HEAD

exports.header = header;

var hero = _interopRequireWildcard(require("./hero.json"));

exports.hero = hero;

var benefits = _interopRequireWildcard(require("./benefits.json"));
=======
>>>>>>> sandbox

exports.header = header;

var hero = _interopRequireWildcard(require("./hero.json"));

exports.hero = hero;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }