"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isBackoffice;

function isBackoffice() {
  return window && document.querySelector('.ant-layout') ? true : false;
}