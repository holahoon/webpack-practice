/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/forms.ts
const formData = (form) => {
    const inputs = form.querySelectorAll('input');
    let values = {};
    inputs.forEach((input) => {
        values[input.id] = input.value;
    });
    return values;
};

;// CONCATENATED MODULE: ./src/index.ts

const src_form = document.querySelector('form');
src_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = formData(src_form);
    console.log(data);
});

/******/ })()
;
//# sourceMappingURL=main.20a28006a64a451960a1.bundle.js.map