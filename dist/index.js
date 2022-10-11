'use strict';

function copy(options) {
    var textCopy = '';
    if (options === null || options === void 0 ? void 0 : options.text) {
        textCopy = options === null || options === void 0 ? void 0 : options.text;
    }
    else if (options === null || options === void 0 ? void 0 : options.id) {
        var el = document.getElementById(options === null || options === void 0 ? void 0 : options.id);
        var nodeName = el === null || el === void 0 ? void 0 : el.nodeName;
        switch (nodeName) {
            case "INPUT":
                textCopy = el === null || el === void 0 ? void 0 : el.value;
                break;
            case "TEXTAREA":
                textCopy = el === null || el === void 0 ? void 0 : el.value;
                break;
            default:
                textCopy = el === null || el === void 0 ? void 0 : el.innerText;
        }
    }
    if (options === null || options === void 0 ? void 0 : options.onCopy) {
        options === null || options === void 0 ? void 0 : options.onCopy(textCopy);
    }
    window.navigator.clipboard.writeText(textCopy);
}

module.exports = copy;
