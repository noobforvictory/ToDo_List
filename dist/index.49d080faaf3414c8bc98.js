"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody.dark{\n    --top:#27272A;\n    --side:#3F3F46;\n    --hover:#27272A;\n    --back:#1C1917;\n    --color:white;\n}\n\nbody{\n    --top:coral;\n    --side:#CBD5E1;\n    --hover:#94A3B8;\n    --back:white;\n    --color:black;\n    margin: -.01%;\n    \n    \n    font-family: 'Ubuntu', sans-serif;\n    background-color: var(--back);\n    color: var(--color);\n    transition: 1s;\n    position: relative;\n}\n.header{\n   position: fixed;\n   top:0;\n   width: 100vw;\n   height: 10vh;\n   background-color: var(--top);\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n   \n   font-size: 2.5rem;\n}\n.header>*{\n    padding: 2%;\n}\n.material-symbols-rounded{\n    cursor: pointer;\n    font-size: 2.5rem;\n}\n.material-symbols-rounded:hover{\n    font-weight: 900;\n}\n\n.sidebar{\n    position: fixed;\n    background-color: var(--side); \n    display: flex;\n    bottom: 0;\n    padding: 1%;\n    width: 100vw;\n    font-size: .7rem;\n    min-height: 8vh;  \n    justify-content: space-around;\n}\n.projects{\n    display: none;\n    position: fixed;\n    top:10vh;\n    width: 100vw;\n    height: 9vh;\n    background-color: var(--side);\n}\n.proj_list{\n    display: none;\n}\n\n.material-symbols-rounded{\n    font-size: 1.7rem;\n}\n.sidebar>div{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n\n\n.btn1{\n    display: flex;\n    justify-content: flex-start;\n    border: none;\n    padding: 1%;\n    font-size: larger;\n    cursor: pointer;\n    background-color: rgba(0,0,0,.01) ;\n    color: var(--color);\n}\n.sidebar>div{\n    border-radius: 5px;\n    \n}\n\n.active{\n    background-color: var(--side);\n}\n\n\n\n\n.content{\n    padding-top: 21vh;\n    display: flex;\n    flex-direction: column;\n    \n   padding-left: 7%;\n    background-color: var(--back);\n}\n\n.mode{\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   \n   position: fixed;\n   right: 2%;\n   cursor: pointer;\n   background-color: var(--side);\n   color: var(--color);\n   border-radius: 5px;\n   transform: scale(1);\n   transition: 1s;\n}\n.mode:hover{\n  transform: scale(1.1);\n}\n.popUpContainer{\n    position: fixed;\n    display: none;\n    inset: 0;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .5);\n    width: 100%;\n    height: 100%;\n    \n}\n.popUp{\n    width: 70%;\n    height: 60%;\n    display: flex;\n    padding: 5%;\n    justify-content: center;\n    overflow: hidden;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    position: relative;\n    background-color: var(--back);\n    color: var(--color);\n}\n.popUp>div{\n    display: flex;\n    flex-direction: column-reverse;\n}\n.popUp>button{\n    padding: 2%;\n    margin: 2%;\n    width: 100%;\n    font-size: 1rem;\n}\ninput{\n    padding: 2%;\n    margin: 2%;\n    width: 95%;\n    font-size: 1rem;\n}\ntextarea{\n    padding: 2%;\n    margin: 2%;\n    width: 95%;\n    font-size: 1rem;\n}\n#cancel{\n    color: coral;\n    cursor: pointer;\n    transition: 1s;\n    transform: scale(1);\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n.cancel:hover{\n    transform: scale(1.03);\n    \n}\n.btn{\n    \n    display: none;\n    \n}\n/* --------------------------------------------content page--------------------------------------------------------------- */\n.home_header,.today_header,.week_header{\n    display: flex;\n    width: 90%;\n    height: 3%;\n    justify-content: space-between;\n    font-size: 1.3rem;\n    margin-bottom: 3%;\n    padding-bottom: 2.5%;\n    border-bottom: 1px solid var(--top);\n}\n\n.add_today,.add_week{\n    width: 90%;\n    height: 20%;\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: center;\n    \n}\n.todo{\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: 1fr 10fr  3fr 1fr 1fr;\n    border-bottom: 1px outset rgba(170, 166, 166,.2);\n    margin-bottom: 2%;\n    width: 90%;\n    position: relative;\n}\n.todo>.material-symbols-rounded{\n    font-size: 1.3rem;\n}\n.due_date{\n    color: red;\n    \n    \n}\n.checked::after{\n    position: absolute;\n    content: '';\n    background-color: red;\n    height: 1px;\n    width: 100%;\n}\n.checked{\n    opacity: .4;\n}\n\n\n\n@media(min-width: 600px){\n   html,body{\n    height: 100%;\n   }\n    body{\n        display: grid;\n        grid-template-rows: 1fr 8fr;\n        grid-template-columns: 1fr 3fr;\n        \n        position:initial;\n    }\n    .header>*{\n        padding: 1%;\n    }\n  .proj_list{\n     display: flex;\n    }\n  .header{\n    font-size: 2.5rem;\n    font-weight: 900;\n    position: initial;\n    grid-row: 1/2;\n    grid-column: 1/3;\n    width: 100%;\n    height: 100%;\n    \n  }\n  .btn{\n    display: flex;\n    height: 10%;\n    justify-content: flex-start;\n    padding-left: 2%;\n    font-size: 1.7rem;\n    background-color: var(--side);\n    border-style: none ;\n  }\n .popUp{\n    width: 40%;\n    height: 50%;\n    \n }\n.projects{\n    display: none;\n}\n\n.sidebar{\n    padding-top: 4%;\n    padding-left: 6%;\n    position: relative;\n    flex-direction: column;\n    font-size: 1.2rem;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    width: 100%;\n    min-height: 100%;\n    justify-content: flex-start;\n    \n}\n.sidebar>div{\n    width: 80%;\n    \n    margin-bottom: 4%;\n    flex-wrap:nowrap;\n    justify-content: flex-start;\n    \n}\n.sidebar>div:hover{\n    background-color: var(--hover);\n    \n}\n\n\n.sidebar .material-symbols-rounded{\n    font-size: 2rem;\n    padding-top: .5%;\n}\n\n\n.active{\n    background-color: var(--hover);\n   \n}\n.content{\n    padding: 5%;\n    position: initial;\n    background-color: var(--back);\n    grid-row: 2/3;\n    grid-column: 2/3;\n   \n   \n   justify-content: flex-start;\n   align-items: flex-start;\n    \n}\n.mode .material-symbols-rounded{\n    font-size: 1.7rem;\n    \n}\n.mode{\n    padding: 0.5%;\n}\n.home_header,.today_header,.week_header{\n  width: 67vw;\n  padding-bottom: 1%;\n  \n}\n.add_today,.add_week{\n    width: 67vw;\n    padding-top: 3px;  \n}\n.todo{\n    width: 99.8%;\n}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,cAAc;IACd,eAAe;IACf,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,eAAe;IACf,YAAY;IACZ,aAAa;IACb,aAAa;;;IAGb,iCAAiC;IACjC,6BAA6B;IAC7B,mBAAmB;IACnB,cAAc;IACd,kBAAkB;AACtB;AACA;GACG,eAAe;GACf,KAAK;GACL,YAAY;GACZ,YAAY;GACZ,4BAA4B;GAC5B,aAAa;GACb,8BAA8B;GAC9B,mBAAmB;;GAEnB,iBAAiB;AACpB;AACA;IACI,WAAW;AACf;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,aAAa;IACb,SAAS;IACT,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,eAAe;IACf,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,6BAA6B;AACjC;AACA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;;AAEvB;;;;AAIA;IACI,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,kCAAkC;IAClC,mBAAmB;AACvB;AACA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,6BAA6B;AACjC;;;;;AAKA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;;GAEvB,gBAAgB;IACf,6BAA6B;AACjC;;AAEA;GACG,aAAa;GACb,uBAAuB;GACvB,mBAAmB;;GAEnB,eAAe;GACf,SAAS;GACT,eAAe;GACf,6BAA6B;GAC7B,mBAAmB;GACnB,kBAAkB;GAClB,mBAAmB;GACnB,cAAc;AACjB;AACA;EACE,qBAAqB;AACvB;AACA;IACI,eAAe;IACf,aAAa;IACb,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;IACnB,mCAAmC;IACnC,WAAW;IACX,YAAY;;AAEhB;AACA;IACI,UAAU;IACV,WAAW;IACX,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,gBAAgB;IAChB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,WAAW;IACX,UAAU;IACV,WAAW;IACX,eAAe;AACnB;AACA;IACI,WAAW;IACX,UAAU;IACV,UAAU;IACV,eAAe;AACnB;AACA;IACI,WAAW;IACX,UAAU;IACV,UAAU;IACV,eAAe;AACnB;AACA;IACI,YAAY;IACZ,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,UAAU;AACd;AACA;IACI,sBAAsB;;AAE1B;AACA;;IAEI,aAAa;;AAEjB;AACA,4HAA4H;AAC5H;IACI,aAAa;IACb,UAAU;IACV,UAAU;IACV,8BAA8B;IAC9B,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;IACpB,mCAAmC;AACvC;;AAEA;IACI,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,uBAAuB;;AAE3B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4CAA4C;IAC5C,gDAAgD;IAChD,iBAAiB;IACjB,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,UAAU;;;AAGd;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,qBAAqB;IACrB,WAAW;IACX,WAAW;AACf;AACA;IACI,WAAW;AACf;;;;AAIA;GACG;IACC,YAAY;GACb;IACC;QACI,aAAa;QACb,2BAA2B;QAC3B,8BAA8B;;QAE9B,gBAAgB;IACpB;IACA;QACI,WAAW;IACf;EACF;KACG,aAAa;IACd;EACF;IACE,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,YAAY;;EAEd;EACA;IACE,aAAa;IACb,WAAW;IACX,2BAA2B;IAC3B,gBAAgB;IAChB,iBAAiB;IACjB,6BAA6B;IAC7B,mBAAmB;EACrB;CACD;IACG,UAAU;IACV,WAAW;;CAEd;AACD;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,2BAA2B;;AAE/B;AACA;IACI,UAAU;;IAEV,iBAAiB;IACjB,gBAAgB;IAChB,2BAA2B;;AAE/B;AACA;IACI,8BAA8B;;AAElC;;;AAGA;IACI,eAAe;IACf,gBAAgB;AACpB;;;AAGA;IACI,8BAA8B;;AAElC;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,6BAA6B;IAC7B,aAAa;IACb,gBAAgB;;;GAGjB,2BAA2B;GAC3B,uBAAuB;;AAE1B;AACA;IACI,iBAAiB;;AAErB;AACA;IACI,aAAa;AACjB;AACA;EACE,WAAW;EACX,kBAAkB;;AAEpB;AACA;IACI,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,YAAY;AAChB;AACA","sourcesContent":["\nbody.dark{\n    --top:#27272A;\n    --side:#3F3F46;\n    --hover:#27272A;\n    --back:#1C1917;\n    --color:white;\n}\n\nbody{\n    --top:coral;\n    --side:#CBD5E1;\n    --hover:#94A3B8;\n    --back:white;\n    --color:black;\n    margin: -.01%;\n    \n    \n    font-family: 'Ubuntu', sans-serif;\n    background-color: var(--back);\n    color: var(--color);\n    transition: 1s;\n    position: relative;\n}\n.header{\n   position: fixed;\n   top:0;\n   width: 100vw;\n   height: 10vh;\n   background-color: var(--top);\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n   \n   font-size: 2.5rem;\n}\n.header>*{\n    padding: 2%;\n}\n.material-symbols-rounded{\n    cursor: pointer;\n    font-size: 2.5rem;\n}\n.material-symbols-rounded:hover{\n    font-weight: 900;\n}\n\n.sidebar{\n    position: fixed;\n    background-color: var(--side); \n    display: flex;\n    bottom: 0;\n    padding: 1%;\n    width: 100vw;\n    font-size: .7rem;\n    min-height: 8vh;  \n    justify-content: space-around;\n}\n.projects{\n    display: none;\n    position: fixed;\n    top:10vh;\n    width: 100vw;\n    height: 9vh;\n    background-color: var(--side);\n}\n.proj_list{\n    display: none;\n}\n\n.material-symbols-rounded{\n    font-size: 1.7rem;\n}\n.sidebar>div{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n\n\n.btn1{\n    display: flex;\n    justify-content: flex-start;\n    border: none;\n    padding: 1%;\n    font-size: larger;\n    cursor: pointer;\n    background-color: rgba(0,0,0,.01) ;\n    color: var(--color);\n}\n.sidebar>div{\n    border-radius: 5px;\n    \n}\n\n.active{\n    background-color: var(--side);\n}\n\n\n\n\n.content{\n    padding-top: 21vh;\n    display: flex;\n    flex-direction: column;\n    \n   padding-left: 7%;\n    background-color: var(--back);\n}\n\n.mode{\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   \n   position: fixed;\n   right: 2%;\n   cursor: pointer;\n   background-color: var(--side);\n   color: var(--color);\n   border-radius: 5px;\n   transform: scale(1);\n   transition: 1s;\n}\n.mode:hover{\n  transform: scale(1.1);\n}\n.popUpContainer{\n    position: fixed;\n    display: none;\n    inset: 0;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .5);\n    width: 100%;\n    height: 100%;\n    \n}\n.popUp{\n    width: 70%;\n    height: 60%;\n    display: flex;\n    padding: 5%;\n    justify-content: center;\n    overflow: hidden;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    position: relative;\n    background-color: var(--back);\n    color: var(--color);\n}\n.popUp>div{\n    display: flex;\n    flex-direction: column-reverse;\n}\n.popUp>button{\n    padding: 2%;\n    margin: 2%;\n    width: 100%;\n    font-size: 1rem;\n}\ninput{\n    padding: 2%;\n    margin: 2%;\n    width: 95%;\n    font-size: 1rem;\n}\ntextarea{\n    padding: 2%;\n    margin: 2%;\n    width: 95%;\n    font-size: 1rem;\n}\n#cancel{\n    color: coral;\n    cursor: pointer;\n    transition: 1s;\n    transform: scale(1);\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n.cancel:hover{\n    transform: scale(1.03);\n    \n}\n.btn{\n    \n    display: none;\n    \n}\n/* --------------------------------------------content page--------------------------------------------------------------- */\n.home_header,.today_header,.week_header{\n    display: flex;\n    width: 90%;\n    height: 3%;\n    justify-content: space-between;\n    font-size: 1.3rem;\n    margin-bottom: 3%;\n    padding-bottom: 2.5%;\n    border-bottom: 1px solid var(--top);\n}\n\n.add_today,.add_week{\n    width: 90%;\n    height: 20%;\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: center;\n    \n}\n.todo{\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: 1fr 10fr  3fr 1fr 1fr;\n    border-bottom: 1px outset rgba(170, 166, 166,.2);\n    margin-bottom: 2%;\n    width: 90%;\n    position: relative;\n}\n.todo>.material-symbols-rounded{\n    font-size: 1.3rem;\n}\n.due_date{\n    color: red;\n    \n    \n}\n.checked::after{\n    position: absolute;\n    content: '';\n    background-color: red;\n    height: 1px;\n    width: 100%;\n}\n.checked{\n    opacity: .4;\n}\n\n\n\n@media(min-width: 600px){\n   html,body{\n    height: 100%;\n   }\n    body{\n        display: grid;\n        grid-template-rows: 1fr 8fr;\n        grid-template-columns: 1fr 3fr;\n        \n        position:initial;\n    }\n    .header>*{\n        padding: 1%;\n    }\n  .proj_list{\n     display: flex;\n    }\n  .header{\n    font-size: 2.5rem;\n    font-weight: 900;\n    position: initial;\n    grid-row: 1/2;\n    grid-column: 1/3;\n    width: 100%;\n    height: 100%;\n    \n  }\n  .btn{\n    display: flex;\n    height: 10%;\n    justify-content: flex-start;\n    padding-left: 2%;\n    font-size: 1.7rem;\n    background-color: var(--side);\n    border-style: none ;\n  }\n .popUp{\n    width: 40%;\n    height: 50%;\n    \n }\n.projects{\n    display: none;\n}\n\n.sidebar{\n    padding-top: 4%;\n    padding-left: 6%;\n    position: relative;\n    flex-direction: column;\n    font-size: 1.2rem;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    width: 100%;\n    min-height: 100%;\n    justify-content: flex-start;\n    \n}\n.sidebar>div{\n    width: 80%;\n    \n    margin-bottom: 4%;\n    flex-wrap:nowrap;\n    justify-content: flex-start;\n    \n}\n.sidebar>div:hover{\n    background-color: var(--hover);\n    \n}\n\n\n.sidebar .material-symbols-rounded{\n    font-size: 2rem;\n    padding-top: .5%;\n}\n\n\n.active{\n    background-color: var(--hover);\n   \n}\n.content{\n    padding: 5%;\n    position: initial;\n    background-color: var(--back);\n    grid-row: 2/3;\n    grid-column: 2/3;\n   \n   \n   justify-content: flex-start;\n   align-items: flex-start;\n    \n}\n.mode .material-symbols-rounded{\n    font-size: 1.7rem;\n    \n}\n.mode{\n    padding: 0.5%;\n}\n.home_header,.today_header,.week_header{\n  width: 67vw;\n  padding-bottom: 1%;\n  \n}\n.add_today,.add_week{\n    width: 67vw;\n    padding-top: 3px;  \n}\n.todo{\n    width: 99.8%;\n}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/file.js":
/*!*********************!*\
  !*** ./src/file.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancel": () => (/* binding */ cancel),
/* harmony export */   "checkEmptyToday": () => (/* binding */ checkEmptyToday),
/* harmony export */   "checkEmptyWeek": () => (/* binding */ checkEmptyWeek),
/* harmony export */   "editTaskToday": () => (/* binding */ editTaskToday),
/* harmony export */   "editTaskWeek": () => (/* binding */ editTaskWeek),
/* harmony export */   "editTodayForm": () => (/* binding */ editTodayForm),
/* harmony export */   "editWeekForm": () => (/* binding */ editWeekForm)
/* harmony export */ });
function checkEmptyWeek(){
    let title = document.getElementById('week_title').value;
        let details = document.getElementById('week_details').value;
        let due_date = document.getElementById('due_date').value;
        let project_name = document.getElementById('project_name').value;
        if(!title || !details || !due_date || !project_name){
            return false;
        }else{
            return true;
        }
}
function checkEmptyToday(){
    let title = document.getElementById('today_title').value;
        let details = document.getElementById('today_details').value;
        let due_date = document.getElementById('due_date').value;
        let project_name = document.getElementById('project_name').value;
        if(!title || !details || !due_date || !project_name){
            return false;
        }else{
            return true;
        }
}

function cancel(){
   
        document.querySelector('.popUpContainer').style.display = 'none';
    
}

function editTodayForm(k){
    let obj = JSON.parse(localStorage.getItem(k));
    const popUp = document.querySelector('.popUp');
    popUp.innerHTML = '';
    const title = document.createElement('input');
    title.setAttribute('type',"text");
    title.setAttribute('id',"today_title");
    title.value = obj.title;
    const details = document.createElement('textarea');
    details.setAttribute('id',"today_details");
    details.value = obj.details;
    const holder = document.createElement('div');
    const due_date = document.createElement('input');
    due_date.setAttribute('type', "date");
    due_date.setAttribute('id',"due_date");
    due_date.value = obj.due_date;
    
    const project_name = document.createElement('input');
    project_name.setAttribute('type',"text");
    project_name.setAttribute('id',"project_name");
    project_name.value = obj.project_name;
     const submit = document.createElement('button');
     
     submit.classList.add('btn2');
     submit.setAttribute('id',obj.project_name);
     submit.classList.add('edit_submit');
     submit.textContent = 'Submit';
    holder.append(due_date,project_name);
    popUp.append(title,details,holder,submit);
    const cancel = document.createElement('span');
    cancel.classList.add('material-symbols-rounded');
    cancel.setAttribute('id','cancel');
    cancel.textContent = 'cancel';
    document.querySelector('.popUp').append(cancel);
 
}
function editWeekForm(k){
    let obj = JSON.parse(localStorage.getItem(k));
   
    const popUp = document.querySelector('.popUp');
    popUp.innerHTML = '';
    const title = document.createElement('input');
    title.setAttribute('type',"text");
    title.setAttribute('id',"week_title");
    title.value = obj.title;
    const details = document.createElement('textarea');
    details.setAttribute('id',"week_details");
    details.value = obj.details;
    const holder = document.createElement('div');
    const due_date = document.createElement('input');
    due_date.setAttribute('type', "date");
    due_date.setAttribute('id',"due_date");
    due_date.value = obj.due_date;
    const project_name = document.createElement('input');
    project_name.setAttribute('type',"text");
    project_name.setAttribute('id',"project_name");
    project_name.value = obj.project_name;
     const submit = document.createElement('button');
     submit.classList.add('btn2');
     submit.setAttribute('id',obj.project_name);
     submit.classList.add('edit_submit');
     submit.textContent = 'Submit';
    holder.append(due_date,project_name);
    popUp.append(title,details,holder,submit);
    const cancel = document.createElement('span');
    cancel.classList.add('material-symbols-rounded');
    cancel.setAttribute('id','cancel');
    cancel.textContent = 'cancel';
    document.querySelector('.popUp').append(cancel);
 
}

function editTaskToday(k){console.log('in')
    let obj = JSON.parse(localStorage.getItem(k));
    
    obj.title = document.getElementById('today_title').value;
    obj.details = document.getElementById('today_details').value;
    obj.due_date = document.getElementById('due_date').value; 
    obj.project_name = document.getElementById('project_name').value;
    localStorage.removeItem(k);console.log('still in')
    localStorage.setItem(obj.project_name,JSON.stringify(obj));
}

function editTaskWeek(k){
    let obj = JSON.parse(localStorage.getItem(k));
    
    obj.title = document.getElementById('week_title').value;
    obj.details = document.getElementById('week_details').value;
    obj.due_date = document.getElementById('due_date').value; 
    obj.project_name = document.getElementById('project_name').value;
    localStorage.removeItem(k);
    localStorage.setItem(obj.project_name,JSON.stringify(obj));
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
function home(){
const content = document.querySelector('.content');
content.innerHTML = '';
const home_page = document.createElement('div');
home_page.classList.add('home_page');
content.append(home_page);
const home1 = document.createElement('div');
const home2 = document.createElement('div');
home_page.append(home1,home2);


    const home_header = document.createElement('div');
    home_header.classList.add('home_header');
    const hh1 = document.createElement('div');
    hh1.textContent = 'Home';
    const hh2 = document.createElement('div');
    hh2.textContent = 'Due Date';
    home_header.append(hh1,hh2);
    home1.append(home_header);

    displayHome();
}

function displayHome(){
    for(let i=0; i<localStorage.length; i++){
        
     let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
     
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.setAttribute('id',obj.project_name);
    const check_box = document.createElement('input');
    check_box.setAttribute('type',"checkbox");
    check_box.classList.add('checkbox');
    const title = document.createElement('div');
    title.textContent = obj.title;
    const due_date = document.createElement('div');
    due_date.classList.add('due_date');
    due_date.textContent = obj.due_date;
    const edit = document.createElement('span');
    edit.classList.add('material-symbols-rounded');
    edit.classList.add('edit');
    edit.textContent = 'edit';
    const del= document.createElement('span');
    del.classList.add('material-symbols-rounded');
    del.classList.add('delete');
    del.textContent = 'delete';
    if(obj.task === 'done'){
        todo.classList.add('checked');
       }
    todo.append(check_box,title,due_date,edit,del);
   
    document.querySelector('.content').append(todo);
     
    }
 
 }



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today.js */ "./src/today.js");
/* harmony import */ var _week_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./week.js */ "./src/week.js");
/* harmony import */ var _file_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file.js */ "./src/file.js");






(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();
document.querySelector('.mode').addEventListener('click',()=>{
    document.body.classList.toggle('dark');
});



document.querySelector('#home').addEventListener('click',()=>{
    makeActive('home');
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();
    
});
document.querySelector('#today').addEventListener('click',()=>{
    makeActive('today');
    (0,_today_js__WEBPACK_IMPORTED_MODULE_2__.today)();
});
document.querySelector('#week').addEventListener('click',()=>{
    makeActive('week');
    (0,_week_js__WEBPACK_IMPORTED_MODULE_3__.week)();
});

document.addEventListener('click',(e)=>{
    if(e.target.getAttribute('class') === 'add_today' ){
        document.querySelector('.popUpContainer').style.display = 'flex';
        (0,_today_js__WEBPACK_IMPORTED_MODULE_2__.today_form)();
    }
    if(e.target.getAttribute('class') === 'add_week' ){
        document.querySelector('.popUpContainer').style.display = 'flex';
        (0,_week_js__WEBPACK_IMPORTED_MODULE_3__.week_form)();
    }
   if(e.target.getAttribute('class') === 'add_week' ){
        document.querySelector('.popUpContainer').style.display = 'flex';
    }
    
    if(e.target.getAttribute('id')=== 'cancel'){
        (0,_file_js__WEBPACK_IMPORTED_MODULE_4__.cancel)();
        
  
    }
    
    if(e.target.getAttribute('id') === 'week_submit'){
        if((0,_file_js__WEBPACK_IMPORTED_MODULE_4__.checkEmptyWeek)()){
        (0,_week_js__WEBPACK_IMPORTED_MODULE_3__.createWeek)();
        (0,_file_js__WEBPACK_IMPORTED_MODULE_4__.cancel)();
        }
    }
    if(e.target.getAttribute('id') === 'today_submit'){
        if((0,_file_js__WEBPACK_IMPORTED_MODULE_4__.checkEmptyToday)()){
            (0,_today_js__WEBPACK_IMPORTED_MODULE_2__.createToday)();
            (0,_file_js__WEBPACK_IMPORTED_MODULE_4__.cancel)();
            }
    }

    if(e.target.getAttribute('class') === 'checkbox'){
        
        e.target.parentElement.classList.toggle('checked');
       let key = e.target.parentElement.getAttribute('id');
       changeTask(key);
    }
    if(e.target.getAttribute('class') === 'material-symbols-rounded delete'){
        let key = e.target.parentElement.getAttribute('id');
         localStorage.removeItem(key);
         e.target.parentElement.remove();
    }

    if(e.target.getAttribute('class') === 'material-symbols-rounded edit'){
        document.querySelector('.popUpContainer').style.display = 'flex';
        let key = e.target.parentElement.getAttribute('id');
        
        editObj(key);
        
        
    }
    if(e.target.getAttribute('class') === 'btn2 edit_submit'){console.log('in')
        let key = e.target.getAttribute('id');console.log(e.target.getAttribute('id'))
        let obj = JSON.parse(localStorage.getItem(key));
        if (obj.belong === 'today'){
            (0,_file_js__WEBPACK_IMPORTED_MODULE_4__.editTaskToday)(key);console.log("out")
            ;(0,_today_js__WEBPACK_IMPORTED_MODULE_2__.today)();
            (0,_file_js__WEBPACK_IMPORTED_MODULE_4__.cancel)();
            
        }else{
            (0,_file_js__WEBPACK_IMPORTED_MODULE_4__.editTaskWeek)(key);
            (0,_week_js__WEBPACK_IMPORTED_MODULE_3__.week)();
            (0,_file_js__WEBPACK_IMPORTED_MODULE_4__.cancel)();
    }
    }

});

function makeActive(str){
    document.querySelectorAll('.menu').forEach(menu=>menu.classList.remove('active'));
     if(str === 'home'){
        document.querySelector('#home').classList.add('active');
     }else if(str === 'today'){
        document.querySelector('#today').classList.add('active');
    }else if(str === 'week'){
        document.querySelector('#week').classList.add('active');
    }
   
}




function changeTask(k){
    let obj = JSON.parse(localStorage.getItem(k));
    localStorage.removeItem(k);
    if(obj.task === 'ND'){
        obj.task = 'done';
    }else{
        obj.task = 'ND';
    }
    localStorage.setItem(obj.project_name,JSON.stringify(obj));
}

function editObj(k){
    let obj = JSON.parse(localStorage.getItem(k));
    if (obj.belong === 'today'){
        (0,_file_js__WEBPACK_IMPORTED_MODULE_4__.editTodayForm)(k);
       
        
        
    }else{
        (0,_file_js__WEBPACK_IMPORTED_MODULE_4__.editWeekForm)(k);
       
    }
}



/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToday": () => (/* binding */ createToday),
/* harmony export */   "today": () => (/* binding */ today),
/* harmony export */   "today_form": () => (/* binding */ today_form)
/* harmony export */ });
function today(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    const today_page = document.createElement('div');
    today_page.classList.add('today_page');
    content.append(today_page);
    const today1 = document.createElement('div');
    today1.classList.add('today1');
    const today2 = document.createElement('div');
    today_page.append(today1,today2);
    const add_today = document.createElement('button');
    add_today.textContent = '+ Add Tasks';
    add_today.classList.add('add_today');

    today2.append(add_today);
    const today_header = document.createElement('div');
    today_header.classList.add('today_header');
    const th1 = document.createElement('div');
    th1.textContent = 'Today';
    const th2 = document.createElement('div');
    th2.textContent = 'Due Date';
    today_header.append(th1,th2);

    today1.append(today_header);
    displayToday();
    
    
    }

function today_form(){
   const popUp = document.querySelector('.popUp');
   popUp.innerHTML = '';
   const title = document.createElement('input');
   title.setAttribute('type',"text");
   title.setAttribute('id',"today_title");
   title.setAttribute('placeholder', "Title: Laundry");
   const details = document.createElement('textarea');
   details.setAttribute('id',"today_details");
   details.setAttribute('placeholder',"Details: eg.fold laundry at 8pm");
   const holder = document.createElement('div');
   const due_date = document.createElement('input');
   due_date.setAttribute('type', "date");
   due_date.setAttribute('id',"due_date");
   
   const project_name = document.createElement('input');
   project_name.setAttribute('type',"text");
   project_name.setAttribute('id',"project_name");
   project_name.setAttribute('placeholder',"Project name");
    const submit = document.createElement('button');
    submit.setAttribute('id',"today_submit");
    submit.classList.add('btn2');
    submit.textContent = 'Submit';
   holder.append(due_date,project_name);
   popUp.append(title,details,holder,submit);
   const cancel = document.createElement('span');
   cancel.classList.add('material-symbols-rounded');
   cancel.setAttribute('id','cancel');
   cancel.textContent = 'cancel';
   document.querySelector('.popUp').append(cancel);


}    

function createToday(){
    let title = document.getElementById('today_title').value;
    let details = document.getElementById('today_details').value;
    let due_date = document.getElementById('due_date').value;
    let project_name = document.getElementById('project_name').value;
    let belong = 'today';
    let task = 'ND';
    let obj = createObj(title,details,due_date,project_name,belong,task);
    
    
    let obj_serialised = JSON.stringify(obj);
    localStorage.setItem(obj.project_name,obj_serialised);
    today();
}

function createObj(title,details,due_date,project_name,belong,task){
    return {
        title,
        details,
        due_date,
        project_name,
        belong,
        task
    }
}

function displayToday(){
   for(let i=0; i<localStorage.length; i++){
    
    let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if(obj.belong === 'today'){
   const todo = document.createElement('div');
   todo.classList.add('todo');
   todo.setAttribute('id',obj.project_name);
   const check_box = document.createElement('input');
    check_box.setAttribute('type',"checkbox");
    check_box.classList.add('checkbox');
   const title = document.createElement('div');
   title.textContent = obj.title;
   const due_date = document.createElement('div');
   due_date.classList.add('due_date');
   due_date.textContent = obj.due_date;
   const edit = document.createElement('span');
   edit.classList.add('material-symbols-rounded');
   edit.classList.add('edit');
   edit.textContent = 'edit';
   const del= document.createElement('span');
   del.classList.add('material-symbols-rounded');
   del.classList.add('delete');
   del.textContent = 'delete';
   if(obj.task === 'done'){
    todo.classList.add('checked');
   }
   todo.append(check_box,title,due_date,edit,del);
   document.querySelector('.today1').append(todo);
    }
   }
   
}

/***/ }),

/***/ "./src/week.js":
/*!*********************!*\
  !*** ./src/week.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeek": () => (/* binding */ createWeek),
/* harmony export */   "week": () => (/* binding */ week),
/* harmony export */   "week_form": () => (/* binding */ week_form)
/* harmony export */ });
function week(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    const week_page = document.createElement('div');
    week_page.classList.add('week_page');
    content.append(week_page);
    const week1 = document.createElement('div');
    week1.classList.add('week1');
    const week2 = document.createElement('div');
    week_page.append(week1,week2);
    const add_week = document.createElement('button');
    add_week.textContent = '+ Add Tasks';
    add_week.classList.add('add_week');
    week2.append(add_week);
    const week_header = document.createElement('div');
    week_header.classList.add('week_header');
    const wh1 = document.createElement('div');
    wh1.textContent = 'Week';
    const wh2 = document.createElement('div');
    wh2.textContent = 'Due Date';
    week_header.append(wh1,wh2);
    week1.append(week_header);
    displayWeek();
}



function week_form(){
    const popUp = document.querySelector('.popUp');
    popUp.innerHTML = '';
    const title = document.createElement('input');
    title.setAttribute('type',"text");
    title.setAttribute('id',"week_title");
    title.setAttribute('placeholder', "Title: Laundry");
    const details = document.createElement('textarea');
    details.setAttribute('id',"week_details");
    details.setAttribute('placeholder',"Details: eg.fold laundry at 8pm");
    const holder = document.createElement('div');
    const due_date = document.createElement('input');
    due_date.setAttribute('type', "date");
    due_date.setAttribute('id',"due_date");
    
    const project_name = document.createElement('input');
    project_name.setAttribute('type',"text");
    project_name.setAttribute('id',"project_name");
    project_name.setAttribute('placeholder',"Project name");
     const submit = document.createElement('button');
     submit.classList.add('btn2');
     submit.setAttribute('id',"week_submit");
     submit.textContent = 'Submit';
    holder.append(due_date,project_name);
    popUp.append(title,details,holder,submit);
    const cancel = document.createElement('span');
    cancel.classList.add('material-symbols-rounded');
    cancel.setAttribute('id','cancel');
    cancel.textContent = 'cancel';
    document.querySelector('.popUp').append(cancel);
 
 
 }    


 function createWeek(){
    let title = document.getElementById('week_title').value;
    let details = document.getElementById('week_details').value;
    let due_date = document.getElementById('due_date').value;
    let project_name = document.getElementById('project_name').value;
    let belong = 'week';
    let task = 'ND';
    let obj = createObj(title,details,due_date,project_name,belong,task);
    
    
    let obj_serialised = JSON.stringify(obj);
    localStorage.setItem(obj.project_name,obj_serialised);
    week();
}

function createObj(title,details,due_date,project_name,belong,task){
    return {
        title,
        details,
        due_date,
        project_name,
        belong,
        task
    }
}



 function displayWeek(){
    for(let i=0; i<localStorage.length; i++){
     
     let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
     if(obj.belong === 'week'){
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.setAttribute('id',obj.project_name);
    const check_box = document.createElement('input');
    check_box.setAttribute('type',"checkbox");
    check_box.classList.add('checkbox');
    const title = document.createElement('div');
    title.textContent = obj.title;
    const due_date = document.createElement('div');
    due_date.classList.add('due_date');
    due_date.textContent = obj.due_date;
    const edit = document.createElement('span');
    edit.classList.add('material-symbols-rounded');
    edit.classList.add('edit');
    edit.textContent = 'edit';
    const del= document.createElement('span');
    del.classList.add('material-symbols-rounded');
    del.classList.add('delete');
    del.textContent = 'delete';
    if(obj.task === 'done'){
        todo.classList.add('checked');
       }
    todo.append(check_box,title,due_date,edit,del);
    document.querySelector('.week1').append(todo);
     }
    }
    
 }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxhQUFhLE1BQU0sTUFBTSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxRQUFRLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxLQUFLLFdBQVcsWUFBWSxhQUFhLGNBQWMsTUFBTSxLQUFLLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxjQUFj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USxzREFBWTtBQUNwQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pITztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLENBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZmlsZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy93ZWVrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keS5kYXJre1xcbiAgICAtLXRvcDojMjcyNzJBO1xcbiAgICAtLXNpZGU6IzNGM0Y0NjtcXG4gICAgLS1ob3ZlcjojMjcyNzJBO1xcbiAgICAtLWJhY2s6IzFDMTkxNztcXG4gICAgLS1jb2xvcjp3aGl0ZTtcXG59XFxuXFxuYm9keXtcXG4gICAgLS10b3A6Y29yYWw7XFxuICAgIC0tc2lkZTojQ0JENUUxO1xcbiAgICAtLWhvdmVyOiM5NEEzQjg7XFxuICAgIC0tYmFjazp3aGl0ZTtcXG4gICAgLS1jb2xvcjpibGFjaztcXG4gICAgbWFyZ2luOiAtLjAxJTtcXG4gICAgXFxuICAgIFxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2spO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiAxcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVhZGVye1xcbiAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICB0b3A6MDtcXG4gICB3aWR0aDogMTAwdnc7XFxuICAgaGVpZ2h0OiAxMHZoO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvcCk7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBcXG4gICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuLmhlYWRlcj4qe1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZDpob3ZlcntcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZSk7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDh2aDsgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDoxMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogOXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlKTtcXG59XFxuLnByb2pfbGlzdHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcbi5zaWRlYmFyPmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcblxcblxcbi5idG4xe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAxKSA7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxufVxcbi5zaWRlYmFyPmRpdntcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBcXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZSk7XFxufVxcblxcblxcblxcblxcbi5jb250ZW50e1xcbiAgICBwYWRkaW5nLXRvcDogMjF2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgcGFkZGluZy1sZWZ0OiA3JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjayk7XFxufVxcblxcbi5tb2Rle1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBcXG4gICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgcmlnaHQ6IDIlO1xcbiAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlKTtcXG4gICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgIHRyYW5zaXRpb246IDFzO1xcbn1cXG4ubW9kZTpob3ZlcntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLnBvcFVwQ29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIFxcbn1cXG4ucG9wVXB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjayk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxufVxcbi5wb3BVcD5kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuLnBvcFVwPmJ1dHRvbntcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbmlucHV0e1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgbWFyZ2luOiAyJTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG50ZXh0YXJlYXtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI2NhbmNlbHtcXG4gICAgY29sb3I6IGNvcmFsO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogNXB4O1xcbn1cXG4uY2FuY2VsOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICBcXG59XFxuLmJ0bntcXG4gICAgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNvbnRlbnQgcGFnZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5ob21lX2hlYWRlciwudG9kYXlfaGVhZGVyLC53ZWVrX2hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAzJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyLjUlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdG9wKTtcXG59XFxuXFxuLmFkZF90b2RheSwuYWRkX3dlZWt7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgIDNmciAxZnIgMWZyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggb3V0c2V0IHJnYmEoMTcwLCAxNjYsIDE2NiwuMik7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50b2RvPi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWR7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4uZHVlX2RhdGV7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIFxcbiAgICBcXG59XFxuLmNoZWNrZWQ6OmFmdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmNoZWNrZWR7XFxuICAgIG9wYWNpdHk6IC40O1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEobWluLXdpZHRoOiA2MDBweCl7XFxuICAgaHRtbCxib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgfVxcbiAgICBib2R5e1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgICAgIFxcbiAgICAgICAgcG9zaXRpb246aW5pdGlhbDtcXG4gICAgfVxcbiAgICAuaGVhZGVyPip7XFxuICAgICAgICBwYWRkaW5nOiAxJTtcXG4gICAgfVxcbiAgLnByb2pfbGlzdHtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gIC5oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgXFxuICB9XFxuICAuYnRue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZSk7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZSA7XFxuICB9XFxuIC5wb3BVcHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIFxcbiB9XFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgcGFkZGluZy10b3A6IDQlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBcXG59XFxuLnNpZGViYXI+ZGl2e1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBcXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XFxuICAgIGZsZXgtd3JhcDpub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgXFxufVxcbi5zaWRlYmFyPmRpdjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBcXG59XFxuXFxuXFxuLnNpZGViYXIgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLXRvcDogLjUlO1xcbn1cXG5cXG5cXG4uYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgXFxufVxcbi5jb250ZW50e1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgcG9zaXRpb246IGluaXRpYWw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2spO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgIFxcbiAgIFxcbiAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgXFxufVxcbi5tb2RlIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWR7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBcXG59XFxuLm1vZGV7XFxuICAgIHBhZGRpbmc6IDAuNSU7XFxufVxcbi5ob21lX2hlYWRlciwudG9kYXlfaGVhZGVyLC53ZWVrX2hlYWRlcntcXG4gIHdpZHRoOiA2N3Z3O1xcbiAgcGFkZGluZy1ib3R0b206IDElO1xcbiAgXFxufVxcbi5hZGRfdG9kYXksLmFkZF93ZWVre1xcbiAgICB3aWR0aDogNjd2dztcXG4gICAgcGFkZGluZy10b3A6IDNweDsgIFxcbn1cXG4udG9kb3tcXG4gICAgd2lkdGg6IDk5LjglO1xcbn1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTs7O0lBR2IsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0dBQ0csZUFBZTtHQUNmLEtBQUs7R0FDTCxZQUFZO0dBQ1osWUFBWTtHQUNaLDRCQUE0QjtHQUM1QixhQUFhO0dBQ2IsOEJBQThCO0dBQzlCLG1CQUFtQjs7R0FFbkIsaUJBQWlCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNB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SSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsMkJBQTJCOztBQUUvQjtBQUNBO0lBQ0ksVUFBVTs7SUFFVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjs7QUFFL0I7QUFDQTtJQUNJLDhCQUE4Qjs7QUFFbEM7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSw4QkFBOEI7O0FBRWxDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsZ0JBQWdCOzs7R0FHakIsMkJBQTJCO0dBQzNCLHVCQUF1Qjs7QUFFMUI7QUFDQTtJQUNJLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7O0FBRXBCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuYm9keS5kYXJre1xcbiAgICAtLXRvcDojMjcyNzJBO1xcbiAgICAtLXNpZGU6IzNGM0Y0NjtcXG4gICAgLS1ob3ZlcjojMjcyNzJBO1xcbiAgICAtLWJhY2s6IzFDMTkxNztcXG4gICAgLS1jb2xvcjp3aGl0ZTtcXG59XFxuXFxuYm9keXtcXG4gICAgLS10b3A6Y29yYWw7XFxuICAgIC0tc2lkZTojQ0JENUUxO1xcbiAgICAtLWhvdmVyOiM5NEEzQjg7XFxuICAgIC0tYmFjazp3aGl0ZTtcXG4gICAgLS1jb2xvcjpibGFjaztcXG4gICAgbWFyZ2luOiAtLjAxJTtcXG4gICAgXFxuICAgIFxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2spO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiAxcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVhZGVye1xcbiAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICB0b3A6MDtcXG4gICB3aWR0aDogMTAwdnc7XFxuICAgaGVpZ2h0OiAxMHZoO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvcCk7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBcXG4gICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuLmhlYWRlcj4qe1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZDpob3ZlcntcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZSk7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDh2aDsgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDoxMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogOXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlKTtcXG59XFxuLnByb2pfbGlzdHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcbi5zaWRlYmFyPmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcblxcblxcbi5idG4xe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAxKSA7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxufVxcbi5zaWRlYmFyPmRpdntcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBcXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZSk7XFxufVxcblxcblxcblxcblxcbi5jb250ZW50e1xcbiAgICBwYWRkaW5nLXRvcDogMjF2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgcGFkZGluZy1sZWZ0OiA3JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjayk7XFxufVxcblxcbi5tb2Rle1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBcXG4gICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgcmlnaHQ6IDIlO1xcbiAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlKTtcXG4gICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgIHRyYW5zaXRpb246IDFzO1xcbn1cXG4ubW9kZTpob3ZlcntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLnBvcFVwQ29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIFxcbn1cXG4ucG9wVXB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjayk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxufVxcbi5wb3BVcD5kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuLnBvcFVwPmJ1dHRvbntcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbmlucHV0e1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgbWFyZ2luOiAyJTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG50ZXh0YXJlYXtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI2NhbmNlbHtcXG4gICAgY29sb3I6IGNvcmFsO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogNXB4O1xcbn1cXG4uY2FuY2VsOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICBcXG59XFxuLmJ0bntcXG4gICAgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNvbnRlbnQgcGFnZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5ob21lX2hlYWRlciwudG9kYXlfaGVhZGVyLC53ZWVrX2hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAzJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyLjUlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdG9wKTtcXG59XFxuXFxuLmFkZF90b2RheSwuYWRkX3dlZWt7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgIDNmciAxZnIgMWZyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggb3V0c2V0IHJnYmEoMTcwLCAxNjYsIDE2NiwuMik7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50b2RvPi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWR7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4uZHVlX2RhdGV7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIFxcbiAgICBcXG59XFxuLmNoZWNrZWQ6OmFmdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmNoZWNrZWR7XFxuICAgIG9wYWNpdHk6IC40O1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEobWluLXdpZHRoOiA2MDBweCl7XFxuICAgaHRtbCxib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgfVxcbiAgICBib2R5e1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgICAgIFxcbiAgICAgICAgcG9zaXRpb246aW5pdGlhbDtcXG4gICAgfVxcbiAgICAuaGVhZGVyPip7XFxuICAgICAgICBwYWRkaW5nOiAxJTtcXG4gICAgfVxcbiAgLnByb2pfbGlzdHtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gIC5oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgXFxuICB9XFxuICAuYnRue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZSk7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZSA7XFxuICB9XFxuIC5wb3BVcHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIFxcbiB9XFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgcGFkZGluZy10b3A6IDQlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBcXG59XFxuLnNpZGViYXI+ZGl2e1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBcXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XFxuICAgIGZsZXgtd3JhcDpub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgXFxufVxcbi5zaWRlYmFyPmRpdjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBcXG59XFxuXFxuXFxuLnNpZGViYXIgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLXRvcDogLjUlO1xcbn1cXG5cXG5cXG4uYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgXFxufVxcbi5jb250ZW50e1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgcG9zaXRpb246IGluaXRpYWw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2spO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgIFxcbiAgIFxcbiAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgXFxufVxcbi5tb2RlIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWR7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBcXG59XFxuLm1vZGV7XFxuICAgIHBhZGRpbmc6IDAuNSU7XFxufVxcbi5ob21lX2hlYWRlciwudG9kYXlfaGVhZGVyLC53ZWVrX2hlYWRlcntcXG4gIHdpZHRoOiA2N3Z3O1xcbiAgcGFkZGluZy1ib3R0b206IDElO1xcbiAgXFxufVxcbi5hZGRfdG9kYXksLmFkZF93ZWVre1xcbiAgICB3aWR0aDogNjd2dztcXG4gICAgcGFkZGluZy10b3A6IDNweDsgIFxcbn1cXG4udG9kb3tcXG4gICAgd2lkdGg6IDk5LjglO1xcbn1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gY2hlY2tFbXB0eVdlZWsoKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla190aXRsZScpLnZhbHVlO1xuICAgICAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrX2RldGFpbHMnKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZV9kYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZV9kYXRlJykudmFsdWU7XG4gICAgICAgIGxldCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9uYW1lJykudmFsdWU7XG4gICAgICAgIGlmKCF0aXRsZSB8fCAhZGV0YWlscyB8fCAhZHVlX2RhdGUgfHwgIXByb2plY3RfbmFtZSl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VtcHR5VG9kYXkoKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlfdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlfZGV0YWlscycpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlX2RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlX2RhdGUnKS52YWx1ZTtcbiAgICAgICAgbGV0IHByb2plY3RfbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0X25hbWUnKS52YWx1ZTtcbiAgICAgICAgaWYoIXRpdGxlIHx8ICFkZXRhaWxzIHx8ICFkdWVfZGF0ZSB8fCAhcHJvamVjdF9uYW1lKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsKCl7XG4gICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwQ29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb2RheUZvcm0oayl7XG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaykpO1xuICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XG4gICAgcG9wVXAuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsXCJ0ZXh0XCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLFwidG9kYXlfdGl0bGVcIik7XG4gICAgdGl0bGUudmFsdWUgPSBvYmoudGl0bGU7XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2lkJyxcInRvZGF5X2RldGFpbHNcIik7XG4gICAgZGV0YWlscy52YWx1ZSA9IG9iai5kZXRhaWxzO1xuICAgIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVfZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcImRhdGVcIik7XG4gICAgZHVlX2RhdGUuc2V0QXR0cmlidXRlKCdpZCcsXCJkdWVfZGF0ZVwiKTtcbiAgICBkdWVfZGF0ZS52YWx1ZSA9IG9iai5kdWVfZGF0ZTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RfbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwidGV4dFwiKTtcbiAgICBwcm9qZWN0X25hbWUuc2V0QXR0cmlidXRlKCdpZCcsXCJwcm9qZWN0X25hbWVcIik7XG4gICAgcHJvamVjdF9uYW1lLnZhbHVlID0gb2JqLnByb2plY3RfbmFtZTtcbiAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgIFxuICAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnYnRuMicpO1xuICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsb2JqLnByb2plY3RfbmFtZSk7XG4gICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdlZGl0X3N1Ym1pdCcpO1xuICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBob2xkZXIuYXBwZW5kKGR1ZV9kYXRlLHByb2plY3RfbmFtZSk7XG4gICAgcG9wVXAuYXBwZW5kKHRpdGxlLGRldGFpbHMsaG9sZGVyLHN1Ym1pdCk7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBjYW5jZWwuc2V0QXR0cmlidXRlKCdpZCcsJ2NhbmNlbCcpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdjYW5jZWwnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcCcpLmFwcGVuZChjYW5jZWwpO1xuIFxufVxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRXZWVrRm9ybShrKXtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrKSk7XG4gICBcbiAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcCcpO1xuICAgIHBvcFVwLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwidGV4dFwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJyxcIndlZWtfdGl0bGVcIik7XG4gICAgdGl0bGUudmFsdWUgPSBvYmoudGl0bGU7XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2lkJyxcIndlZWtfZGV0YWlsc1wiKTtcbiAgICBkZXRhaWxzLnZhbHVlID0gb2JqLmRldGFpbHM7XG4gICAgY29uc3QgaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZV9kYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsIFwiZGF0ZVwiKTtcbiAgICBkdWVfZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJyxcImR1ZV9kYXRlXCIpO1xuICAgIGR1ZV9kYXRlLnZhbHVlID0gb2JqLmR1ZV9kYXRlO1xuICAgIGNvbnN0IHByb2plY3RfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdF9uYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsXCJ0ZXh0XCIpO1xuICAgIHByb2plY3RfbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJyxcInByb2plY3RfbmFtZVwiKTtcbiAgICBwcm9qZWN0X25hbWUudmFsdWUgPSBvYmoucHJvamVjdF9uYW1lO1xuICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0bjInKTtcbiAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLG9iai5wcm9qZWN0X25hbWUpO1xuICAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnZWRpdF9zdWJtaXQnKTtcbiAgICAgc3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgaG9sZGVyLmFwcGVuZChkdWVfZGF0ZSxwcm9qZWN0X25hbWUpO1xuICAgIHBvcFVwLmFwcGVuZCh0aXRsZSxkZXRhaWxzLGhvbGRlcixzdWJtaXQpO1xuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCdjYW5jZWwnKTtcbiAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAnKS5hcHBlbmQoY2FuY2VsKTtcbiBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrVG9kYXkoayl7Y29uc29sZS5sb2coJ2luJylcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrKSk7XG4gICAgXG4gICAgb2JqLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5X3RpdGxlJykudmFsdWU7XG4gICAgb2JqLmRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlfZGV0YWlscycpLnZhbHVlO1xuICAgIG9iai5kdWVfZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVfZGF0ZScpLnZhbHVlOyBcbiAgICBvYmoucHJvamVjdF9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfbmFtZScpLnZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGspO2NvbnNvbGUubG9nKCdzdGlsbCBpbicpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ob2JqLnByb2plY3RfbmFtZSxKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrV2VlayhrKXtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrKSk7XG4gICAgXG4gICAgb2JqLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtfdGl0bGUnKS52YWx1ZTtcbiAgICBvYmouZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrX2RldGFpbHMnKS52YWx1ZTtcbiAgICBvYmouZHVlX2RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlX2RhdGUnKS52YWx1ZTsgXG4gICAgb2JqLnByb2plY3RfbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0X25hbWUnKS52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShvYmoucHJvamVjdF9uYW1lLEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhvbWUoKXtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29udGVudC5pbm5lckhUTUwgPSAnJztcbmNvbnN0IGhvbWVfcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG9tZV9wYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWVfcGFnZScpO1xuY29udGVudC5hcHBlbmQoaG9tZV9wYWdlKTtcbmNvbnN0IGhvbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBob21lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG9tZV9wYWdlLmFwcGVuZChob21lMSxob21lMik7XG5cblxuICAgIGNvbnN0IGhvbWVfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZV9oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaG9tZV9oZWFkZXInKTtcbiAgICBjb25zdCBoaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoaDEudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgY29uc3QgaGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGgyLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICBob21lX2hlYWRlci5hcHBlbmQoaGgxLGhoMik7XG4gICAgaG9tZTEuYXBwZW5kKGhvbWVfaGVhZGVyKTtcblxuICAgIGRpc3BsYXlIb21lKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIb21lKCl7XG4gICAgZm9yKGxldCBpPTA7IGk8bG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgXG4gICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICAgXG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgIHRvZG8uc2V0QXR0cmlidXRlKCdpZCcsb2JqLnByb2plY3RfbmFtZSk7XG4gICAgY29uc3QgY2hlY2tfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja19ib3guc2V0QXR0cmlidXRlKCd0eXBlJyxcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrX2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVfZGF0ZScpO1xuICAgIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZV9kYXRlO1xuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgIGNvbnN0IGRlbD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgZGVsLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgaWYob2JqLnRhc2sgPT09ICdkb25lJyl7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgIH1cbiAgICB0b2RvLmFwcGVuZChjaGVja19ib3gsdGl0bGUsZHVlX2RhdGUsZWRpdCxkZWwpO1xuICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmQodG9kbyk7XG4gICAgIFxuICAgIH1cbiBcbiB9XG5cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyB0b2RheSwgdG9kYXlfZm9ybSxjcmVhdGVUb2RheSB9IGZyb20gJy4vdG9kYXkuanMnO1xuaW1wb3J0IHsgd2VlayAsd2Vla19mb3JtLCBjcmVhdGVXZWVrfSBmcm9tICcuL3dlZWsuanMnO1xuaW1wb3J0IHsgY2hlY2tFbXB0eVdlZWssY2hlY2tFbXB0eVRvZGF5LGNhbmNlbCxlZGl0VG9kYXlGb3JtLGVkaXRXZWVrRm9ybSxlZGl0VGFza1RvZGF5LCBlZGl0VGFza1dlZWsgfSBmcm9tICcuL2ZpbGUuanMnO1xuXG5ob21lKCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xufSk7XG5cblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIG1ha2VBY3RpdmUoJ2hvbWUnKTtcbiAgICBob21lKCk7XG4gICAgXG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIG1ha2VBY3RpdmUoJ3RvZGF5Jyk7XG4gICAgdG9kYXkoKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlZWsnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBtYWtlQWN0aXZlKCd3ZWVrJyk7XG4gICAgd2VlaygpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRfdG9kYXknICl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcENvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHRvZGF5X2Zvcm0oKTtcbiAgICB9XG4gICAgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkX3dlZWsnICl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcENvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHdlZWtfZm9ybSgpO1xuICAgIH1cbiAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZF93ZWVrJyApe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXBDb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cbiAgICBcbiAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk9PT0gJ2NhbmNlbCcpe1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgXG4gIFxuICAgIH1cbiAgICBcbiAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICd3ZWVrX3N1Ym1pdCcpe1xuICAgICAgICBpZihjaGVja0VtcHR5V2VlaygpKXtcbiAgICAgICAgY3JlYXRlV2VlaygpO1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICd0b2RheV9zdWJtaXQnKXtcbiAgICAgICAgaWYoY2hlY2tFbXB0eVRvZGF5KCkpe1xuICAgICAgICAgICAgY3JlYXRlVG9kYXkoKTtcbiAgICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2NoZWNrYm94Jyl7XG4gICAgICAgIFxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcbiAgICAgICBsZXQga2V5ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgY2hhbmdlVGFzayhrZXkpO1xuICAgIH1cbiAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQgZGVsZXRlJyl7XG4gICAgICAgIGxldCBrZXkgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCBlZGl0Jyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcENvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGxldCBrZXkgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgXG4gICAgICAgIGVkaXRPYmooa2V5KTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdidG4yIGVkaXRfc3VibWl0Jyl7Y29uc29sZS5sb2coJ2luJylcbiAgICAgICAgbGV0IGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykpXG4gICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgICAgICBpZiAob2JqLmJlbG9uZyA9PT0gJ3RvZGF5Jyl7XG4gICAgICAgICAgICBlZGl0VGFza1RvZGF5KGtleSk7Y29uc29sZS5sb2coXCJvdXRcIilcbiAgICAgICAgICAgIHRvZGF5KCk7XG4gICAgICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGVkaXRUYXNrV2VlayhrZXkpO1xuICAgICAgICAgICAgd2VlaygpO1xuICAgICAgICAgICAgY2FuY2VsKCk7XG4gICAgfVxuICAgIH1cblxufSk7XG5cbmZ1bmN0aW9uIG1ha2VBY3RpdmUoc3RyKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudScpLmZvckVhY2gobWVudT0+bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgIGlmKHN0ciA9PT0gJ2hvbWUnKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgfWVsc2UgaWYoc3RyID09PSAndG9kYXknKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfWVsc2UgaWYoc3RyID09PSAnd2Vlaycpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VlaycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgIFxufVxuXG5cblxuXG5mdW5jdGlvbiBjaGFuZ2VUYXNrKGspe1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGspKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrKTtcbiAgICBpZihvYmoudGFzayA9PT0gJ05EJyl7XG4gICAgICAgIG9iai50YXNrID0gJ2RvbmUnO1xuICAgIH1lbHNle1xuICAgICAgICBvYmoudGFzayA9ICdORCc7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG9iai5wcm9qZWN0X25hbWUsSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRPYmooayl7XG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaykpO1xuICAgIGlmIChvYmouYmVsb25nID09PSAndG9kYXknKXtcbiAgICAgICAgZWRpdFRvZGF5Rm9ybShrKTtcbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1lbHNle1xuICAgICAgICBlZGl0V2Vla0Zvcm0oayk7XG4gICAgICAgXG4gICAgfVxufVxuXG4iLCJleHBvcnQgZnVuY3Rpb24gdG9kYXkoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHRvZGF5X3BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheV9wYWdlLmNsYXNzTGlzdC5hZGQoJ3RvZGF5X3BhZ2UnKTtcbiAgICBjb250ZW50LmFwcGVuZCh0b2RheV9wYWdlKTtcbiAgICBjb25zdCB0b2RheTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheTEuY2xhc3NMaXN0LmFkZCgndG9kYXkxJyk7XG4gICAgY29uc3QgdG9kYXkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlfcGFnZS5hcHBlbmQodG9kYXkxLHRvZGF5Mik7XG4gICAgY29uc3QgYWRkX3RvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkX3RvZGF5LnRleHRDb250ZW50ID0gJysgQWRkIFRhc2tzJztcbiAgICBhZGRfdG9kYXkuY2xhc3NMaXN0LmFkZCgnYWRkX3RvZGF5Jyk7XG5cbiAgICB0b2RheTIuYXBwZW5kKGFkZF90b2RheSk7XG4gICAgY29uc3QgdG9kYXlfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlfaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZGF5X2hlYWRlcicpO1xuICAgIGNvbnN0IHRoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoMS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgY29uc3QgdGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGgyLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICB0b2RheV9oZWFkZXIuYXBwZW5kKHRoMSx0aDIpO1xuXG4gICAgdG9kYXkxLmFwcGVuZCh0b2RheV9oZWFkZXIpO1xuICAgIGRpc3BsYXlUb2RheSgpO1xuICAgIFxuICAgIFxuICAgIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5X2Zvcm0oKXtcbiAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XG4gICBwb3BVcC5pbm5lckhUTUwgPSAnJztcbiAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsXCJ0ZXh0XCIpO1xuICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsXCJ0b2RheV90aXRsZVwiKTtcbiAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIlRpdGxlOiBMYXVuZHJ5XCIpO1xuICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnaWQnLFwidG9kYXlfZGV0YWlsc1wiKTtcbiAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsXCJEZXRhaWxzOiBlZy5mb2xkIGxhdW5kcnkgYXQgOHBtXCIpO1xuICAgY29uc3QgaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBjb25zdCBkdWVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICBkdWVfZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcImRhdGVcIik7XG4gICBkdWVfZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJyxcImR1ZV9kYXRlXCIpO1xuICAgXG4gICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgcHJvamVjdF9uYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsXCJ0ZXh0XCIpO1xuICAgcHJvamVjdF9uYW1lLnNldEF0dHJpYnV0ZSgnaWQnLFwicHJvamVjdF9uYW1lXCIpO1xuICAgcHJvamVjdF9uYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLFwiUHJvamVjdCBuYW1lXCIpO1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJyxcInRvZGF5X3N1Ym1pdFwiKTtcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnYnRuMicpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgaG9sZGVyLmFwcGVuZChkdWVfZGF0ZSxwcm9qZWN0X25hbWUpO1xuICAgcG9wVXAuYXBwZW5kKHRpdGxlLGRldGFpbHMsaG9sZGVyLHN1Ym1pdCk7XG4gICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gICBjYW5jZWwuc2V0QXR0cmlidXRlKCdpZCcsJ2NhbmNlbCcpO1xuICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ2NhbmNlbCc7XG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAnKS5hcHBlbmQoY2FuY2VsKTtcblxuXG59ICAgIFxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kYXkoKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlfdGl0bGUnKS52YWx1ZTtcbiAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheV9kZXRhaWxzJykudmFsdWU7XG4gICAgbGV0IGR1ZV9kYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZV9kYXRlJykudmFsdWU7XG4gICAgbGV0IHByb2plY3RfbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0X25hbWUnKS52YWx1ZTtcbiAgICBsZXQgYmVsb25nID0gJ3RvZGF5JztcbiAgICBsZXQgdGFzayA9ICdORCc7XG4gICAgbGV0IG9iaiA9IGNyZWF0ZU9iaih0aXRsZSxkZXRhaWxzLGR1ZV9kYXRlLHByb2plY3RfbmFtZSxiZWxvbmcsdGFzayk7XG4gICAgXG4gICAgXG4gICAgbGV0IG9ial9zZXJpYWxpc2VkID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShvYmoucHJvamVjdF9uYW1lLG9ial9zZXJpYWxpc2VkKTtcbiAgICB0b2RheSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPYmoodGl0bGUsZGV0YWlscyxkdWVfZGF0ZSxwcm9qZWN0X25hbWUsYmVsb25nLHRhc2spe1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXRhaWxzLFxuICAgICAgICBkdWVfZGF0ZSxcbiAgICAgICAgcHJvamVjdF9uYW1lLFxuICAgICAgICBiZWxvbmcsXG4gICAgICAgIHRhc2tcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RheSgpe1xuICAgZm9yKGxldCBpPTA7IGk8bG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICBcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XG4gICAgaWYob2JqLmJlbG9uZyA9PT0gJ3RvZGF5Jyl7XG4gICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgIHRvZG8uc2V0QXR0cmlidXRlKCdpZCcsb2JqLnByb2plY3RfbmFtZSk7XG4gICBjb25zdCBjaGVja19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrX2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tfYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICBjb25zdCBkdWVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgZHVlX2RhdGUuY2xhc3NMaXN0LmFkZCgnZHVlX2RhdGUnKTtcbiAgIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZV9kYXRlO1xuICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICBjb25zdCBkZWw9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgIGRlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgIGRlbC5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgIGRlbC50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICAgaWYob2JqLnRhc2sgPT09ICdkb25lJyl7XG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICB9XG4gICB0b2RvLmFwcGVuZChjaGVja19ib3gsdGl0bGUsZHVlX2RhdGUsZWRpdCxkZWwpO1xuICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5MScpLmFwcGVuZCh0b2RvKTtcbiAgICB9XG4gICB9XG4gICBcbn0iLCJleHBvcnQgZnVuY3Rpb24gd2Vlaygpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3Qgd2Vla19wYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vla19wYWdlLmNsYXNzTGlzdC5hZGQoJ3dlZWtfcGFnZScpO1xuICAgIGNvbnRlbnQuYXBwZW5kKHdlZWtfcGFnZSk7XG4gICAgY29uc3Qgd2VlazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWVrMS5jbGFzc0xpc3QuYWRkKCd3ZWVrMScpO1xuICAgIGNvbnN0IHdlZWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vla19wYWdlLmFwcGVuZCh3ZWVrMSx3ZWVrMik7XG4gICAgY29uc3QgYWRkX3dlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRfd2Vlay50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrcyc7XG4gICAgYWRkX3dlZWsuY2xhc3NMaXN0LmFkZCgnYWRkX3dlZWsnKTtcbiAgICB3ZWVrMi5hcHBlbmQoYWRkX3dlZWspO1xuICAgIGNvbnN0IHdlZWtfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vla19oZWFkZXIuY2xhc3NMaXN0LmFkZCgnd2Vla19oZWFkZXInKTtcbiAgICBjb25zdCB3aDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aDEudGV4dENvbnRlbnQgPSAnV2Vlayc7XG4gICAgY29uc3Qgd2gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2gyLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICB3ZWVrX2hlYWRlci5hcHBlbmQod2gxLHdoMik7XG4gICAgd2VlazEuYXBwZW5kKHdlZWtfaGVhZGVyKTtcbiAgICBkaXNwbGF5V2VlaygpO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtfZm9ybSgpe1xuICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XG4gICAgcG9wVXAuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsXCJ0ZXh0XCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLFwid2Vla190aXRsZVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUaXRsZTogTGF1bmRyeVwiKTtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnaWQnLFwid2Vla19kZXRhaWxzXCIpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsXCJEZXRhaWxzOiBlZy5mb2xkIGxhdW5kcnkgYXQgOHBtXCIpO1xuICAgIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVfZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcImRhdGVcIik7XG4gICAgZHVlX2RhdGUuc2V0QXR0cmlidXRlKCdpZCcsXCJkdWVfZGF0ZVwiKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RfbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwidGV4dFwiKTtcbiAgICBwcm9qZWN0X25hbWUuc2V0QXR0cmlidXRlKCdpZCcsXCJwcm9qZWN0X25hbWVcIik7XG4gICAgcHJvamVjdF9uYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLFwiUHJvamVjdCBuYW1lXCIpO1xuICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0bjInKTtcbiAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLFwid2Vla19zdWJtaXRcIik7XG4gICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGhvbGRlci5hcHBlbmQoZHVlX2RhdGUscHJvamVjdF9uYW1lKTtcbiAgICBwb3BVcC5hcHBlbmQodGl0bGUsZGV0YWlscyxob2xkZXIsc3VibWl0KTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FuY2VsJyk7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ2NhbmNlbCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJykuYXBwZW5kKGNhbmNlbCk7XG4gXG4gXG4gfSAgICBcblxuXG4gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlZWsoKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla190aXRsZScpLnZhbHVlO1xuICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtfZGV0YWlscycpLnZhbHVlO1xuICAgIGxldCBkdWVfZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVfZGF0ZScpLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9uYW1lJykudmFsdWU7XG4gICAgbGV0IGJlbG9uZyA9ICd3ZWVrJztcbiAgICBsZXQgdGFzayA9ICdORCc7XG4gICAgbGV0IG9iaiA9IGNyZWF0ZU9iaih0aXRsZSxkZXRhaWxzLGR1ZV9kYXRlLHByb2plY3RfbmFtZSxiZWxvbmcsdGFzayk7XG4gICAgXG4gICAgXG4gICAgbGV0IG9ial9zZXJpYWxpc2VkID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShvYmoucHJvamVjdF9uYW1lLG9ial9zZXJpYWxpc2VkKTtcbiAgICB3ZWVrKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9iaih0aXRsZSxkZXRhaWxzLGR1ZV9kYXRlLHByb2plY3RfbmFtZSxiZWxvbmcsdGFzayl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRldGFpbHMsXG4gICAgICAgIGR1ZV9kYXRlLFxuICAgICAgICBwcm9qZWN0X25hbWUsXG4gICAgICAgIGJlbG9uZyxcbiAgICAgICAgdGFza1xuICAgIH1cbn1cblxuXG5cbiBmdW5jdGlvbiBkaXNwbGF5V2Vlaygpe1xuICAgIGZvcihsZXQgaT0wOyBpPGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgIFxuICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XG4gICAgIGlmKG9iai5iZWxvbmcgPT09ICd3ZWVrJyl7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgIHRvZG8uc2V0QXR0cmlidXRlKCdpZCcsb2JqLnByb2plY3RfbmFtZSk7XG4gICAgY29uc3QgY2hlY2tfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja19ib3guc2V0QXR0cmlidXRlKCd0eXBlJyxcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrX2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVfZGF0ZScpO1xuICAgIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZV9kYXRlO1xuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgIGNvbnN0IGRlbD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgZGVsLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgaWYob2JqLnRhc2sgPT09ICdkb25lJyl7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgIH1cbiAgICB0b2RvLmFwcGVuZChjaGVja19ib3gsdGl0bGUsZHVlX2RhdGUsZWRpdCxkZWwpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrMScpLmFwcGVuZCh0b2RvKTtcbiAgICAgfVxuICAgIH1cbiAgICBcbiB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9