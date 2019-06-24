"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isBackoffice() {
    return window && document.querySelector('.ant-layout') ? true : false;
}
exports.default = isBackoffice;
//# sourceMappingURL=isBackoffice.js.map