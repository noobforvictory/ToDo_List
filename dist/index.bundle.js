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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody.dark{\n    --top:#27272A;\n    --side:#3F3F46;\n    --hover:#27272A;\n    --back:#1C1917;\n    --color:white;\n}\n\nbody{\n    --top:coral;\n    --side:#CBD5E1;\n    --hover:#94A3B8;\n    --back:white;\n    --color:black;\n    margin: -.01%;\n    \n    \n    font-family: 'Ubuntu', sans-serif;\n    background-color: var(--back);\n    color: var(--color);\n    transition: 1s;\n    position: relative;\n}\n.header{\n   position: fixed;\n   top:0;\n   width: 100vw;\n   height: 10vh;\n   background-color: var(--top);\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n   \n   font-size: 2.5rem;\n}\n.header>*{\n    padding: 2%;\n}\n.material-symbols-rounded{\n    cursor: pointer;\n    font-size: 2.5rem;\n}\n.material-symbols-rounded:hover{\n    font-weight: 900;\n}\n\n.sidebar{\n    position: fixed;\n    background-color: var(--side); \n    display: flex;\n    bottom: 0;\n    padding: 1%;\n    width: 100vw;\n    font-size: .7rem;\n    min-height: 8vh;  \n    justify-content: space-around;\n}\n.projects{\n    display: flex;\n    position: fixed;\n    top:10vh;\n    width: 100vw;\n    height: 9vh;\n    background-color: var(--side);\n}\n\n.material-symbols-rounded{\n    font-size: 1.7rem ;\n}\n.sidebar>div{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n\n\n.btn1{\n    display: flex;\n    justify-content: flex-start;\n    border: none;\n    padding: 1%;\n    font-size: larger;\n    cursor: pointer;\n    background-color: rgba(0,0,0,.01) ;\n    color: var(--color);\n}\n.sidebar>div{\n    border-radius: 5px;\n    \n}\n\n.active{\n    background-color: var(--side);\n}\n\n\n\n\n.content{\n    padding-top: 21vh;\n    display: flex;\n    flex-direction: column;\n    \n   padding-left: 7%;\n    background-color: var(--back);\n}\n\n.mode{\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   \n   position: fixed;\n   right: 2%;\n   cursor: pointer;\n   background-color: var(--side);\n   color: var(--color);\n   border-radius: 5px;\n   transform: scale(1);\n   transition: 1s;\n}\n.mode:hover{\n  transform: scale(1.1);\n}\n.popUpContainer{\n    position: fixed;\n    display: none;\n    inset: 0;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .5);\n    width: 100%;\n    height: 100%;\n    \n}\n.popUp{\n    width: 70%;\n    height: 60%;\n    display: flex;\n    padding: 5%;\n    justify-content: center;\n    overflow: hidden;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    position: relative;\n    background-color: var(--back);\n    color: var(--color);\n}\n.popUp>div{\n    display: flex;\n    flex-direction: column-reverse;\n}\n.popUp>button{\n    padding: 2%;\n    margin: 2%;\n    width: 100%;\n    font-size: 1rem;\n}\ninput{\n    padding: 2%;\n    margin: 2%;\n    width: 95%;\n    font-size: 1rem;\n}\ntextarea{\n    padding: 2%;\n    margin: 2%;\n    width: 95%;\n    font-size: 1rem;\n}\n#cancel{\n    color: coral;\n    cursor: pointer;\n    transition: 1s;\n    transform: scale(1);\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n.cancel:hover{\n    transform: scale(1.03);\n    \n}\n.btn{\n    \n    display: none;\n    \n}\n/* --------------------------------------------content page--------------------------------------------------------------- */\n.home_header,.today_header,.week_header{\n    display: flex;\n    width: 90%;\n    height: 3%;\n    justify-content: space-between;\n    font-size: 1.3rem;\n    margin-bottom: 3%;\n    padding-bottom: 2.5%;\n    border-bottom: 1px solid var(--top);\n}\n\n.add_today,.add_week{\n    width: 90%;\n    height: 20%;\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: center;\n    \n}\n.todo{\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: 1fr 10fr  3fr 1fr 1fr;\n    border-bottom: 1px outset rgba(170, 166, 166,.2);\n    margin-bottom: 2%;\n    width: 90%;\n    position: relative;\n}\n.todo>.material-symbols-rounded{\n    font-size: 1.3rem;\n}\n.due_date{\n    color: red;\n    \n    \n}\n.checked::after{\n    position: absolute;\n    content: '';\n    background-color: red;\n    height: 1px;\n    width: 100%;\n}\n.checked{\n    opacity: .4;\n}\n\n\n\n@media(min-width: 600px){\n   html,body{\n    height: 100%;\n   }\n    body{\n        display: grid;\n        grid-template-rows: 1fr 8fr;\n        grid-template-columns: 1fr 3fr;\n        \n        position:initial;\n    }\n    .header>*{\n        padding: 1%;\n    }\n  .proj_list{\n     display: flex;\n    }\n  .header{\n    font-size: 2.5rem;\n    font-weight: 900;\n    position: initial;\n    grid-row: 1/2;\n    grid-column: 1/3;\n    width: 100%;\n    height: 100%;\n    \n  }\n  .btn{\n    display: flex;\n    height: 10%;\n    justify-content: flex-start;\n    padding-left: 2%;\n    font-size: 1.7rem;\n    background-color: var(--side);\n    border-style: none ;\n  }\n .popUp{\n    width: 40%;\n    height: 50%;\n    \n }\n.projects{\n    display: none;\n}\n\n.sidebar{\n    padding-top: 4%;\n    padding-left: 6%;\n    position: relative;\n    flex-direction: column;\n    font-size: 1.2rem;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    width: 100%;\n    min-height: 100%;\n    justify-content: flex-start;\n    \n}\n.sidebar>div{\n    width: 80%;\n    \n    margin-bottom: 4%;\n    flex-wrap:nowrap;\n    justify-content: flex-start;\n    \n}\n.sidebar>div:hover{\n    background-color: var(--hover);\n    \n}\n\n\n.sidebar .material-symbols-rounded{\n    font-size: 2rem;\n    padding-top: .5%;\n}\n\n\n.active{\n    background-color: var(--hover);\n   \n}\n.content{\n    padding: 5%;\n    position: initial;\n    background-color: var(--back);\n    grid-row: 2/3;\n    grid-column: 2/3;\n   \n   \n   justify-content: flex-start;\n   align-items: flex-start;\n    \n}\n.mode .material-symbols-rounded{\n    font-size: 1.7rem;\n    \n}\n.mode{\n    padding: 0.5%;\n}\n.home_header,.today_header,.week_header{\n  width: 67vw;\n  padding-bottom: 1%;\n  \n}\n.add_today,.add_week{\n    width: 67vw;\n    padding-top: 3px;  \n}\n.todo{\n    width: 99.8%;\n}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\nbody.dark{\n    --top:#27272A;\n    --side:#3F3F46;\n    --hover:#27272A;\n    --back:#1C1917;\n    --color:white;\n}\n\nbody{\n    --top:coral;\n    --side:#CBD5E1;\n    --hover:#94A3B8;\n    --back:white;\n    --color:black;\n    margin: -.01%;\n    \n    \n    font-family: 'Ubuntu', sans-serif;\n    background-color: var(--back);\n    color: var(--color);\n    transition: 1s;\n    position: relative;\n}\n.header{\n   position: fixed;\n   top:0;\n   width: 100vw;\n   height: 10vh;\n   background-color: var(--top);\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n   \n   font-size: 2.5rem;\n}\n.header>*{\n    padding: 2%;\n}\n.material-symbols-rounded{\n    cursor: pointer;\n    font-size: 2.5rem;\n}\n.material-symbols-rounded:hover{\n    font-weight: 900;\n}\n\n.sidebar{\n    position: fixed;\n    background-color: var(--side); \n    display: flex;\n    bottom: 0;\n    padding: 1%;\n    width: 100vw;\n    font-size: .7rem;\n    min-height: 8vh;  \n    justify-content: space-around;\n}\n.projects{\n    display: flex;\n    position: fixed;\n    top:10vh;\n    width: 100vw;\n    height: 9vh;\n    background-color: var(--side);\n}\n\n.material-symbols-rounded{\n    font-size: 1.7rem ;\n}\n.sidebar>div{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n\n\n.btn1{\n    display: flex;\n    justify-content: flex-start;\n    border: none;\n    padding: 1%;\n    font-size: larger;\n    cursor: pointer;\n    background-color: rgba(0,0,0,.01) ;\n    color: var(--color);\n}\n.sidebar>div{\n    border-radius: 5px;\n    \n}\n\n.active{\n    background-color: var(--side);\n}\n\n\n\n\n.content{\n    padding-top: 21vh;\n    display: flex;\n    flex-direction: column;\n    \n   padding-left: 7%;\n    background-color: var(--back);\n}\n\n.mode{\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   \n   position: fixed;\n   right: 2%;\n   cursor: pointer;\n   background-color: var(--side);\n   color: var(--color);\n   border-radius: 5px;\n   transform: scale(1);\n   transition: 1s;\n}\n.mode:hover{\n  transform: scale(1.1);\n}\n.popUpContainer{\n    position: fixed;\n    display: none;\n    inset: 0;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .5);\n    width: 100%;\n    height: 100%;\n    \n}\n.popUp{\n    width: 70%;\n    height: 60%;\n    display: flex;\n    padding: 5%;\n    justify-content: center;\n    overflow: hidden;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    position: relative;\n    background-color: var(--back);\n    color: var(--color);\n}\n.popUp>div{\n    display: flex;\n    flex-direction: column-reverse;\n}\n.popUp>button{\n    padding: 2%;\n    margin: 2%;\n    width: 100%;\n    font-size: 1rem;\n}\ninput{\n    padding: 2%;\n    margin: 2%;\n    width: 95%;\n    font-size: 1rem;\n}\ntextarea{\n    padding: 2%;\n    margin: 2%;\n    width: 95%;\n    font-size: 1rem;\n}\n#cancel{\n    color: coral;\n    cursor: pointer;\n    transition: 1s;\n    transform: scale(1);\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n.cancel:hover{\n    transform: scale(1.03);\n    \n}\n.btn{\n    \n    display: none;\n    \n}\n/* --------------------------------------------content page--------------------------------------------------------------- */\n.home_header,.today_header,.week_header{\n    display: flex;\n    width: 90%;\n    height: 3%;\n    justify-content: space-between;\n    font-size: 1.3rem;\n    margin-bottom: 3%;\n    padding-bottom: 2.5%;\n    border-bottom: 1px solid var(--top);\n}\n\n.add_today,.add_week{\n    width: 90%;\n    height: 20%;\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: center;\n    \n}\n.todo{\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: 1fr 10fr  3fr 1fr 1fr;\n    border-bottom: 1px outset rgba(170, 166, 166,.2);\n    margin-bottom: 2%;\n    width: 90%;\n    position: relative;\n}\n.todo>.material-symbols-rounded{\n    font-size: 1.3rem;\n}\n.due_date{\n    color: red;\n    \n    \n}\n.checked::after{\n    position: absolute;\n    content: '';\n    background-color: red;\n    height: 1px;\n    width: 100%;\n}\n.checked{\n    opacity: .4;\n}\n\n\n\n@media(min-width: 600px){\n   html,body{\n    height: 100%;\n   }\n    body{\n        display: grid;\n        grid-template-rows: 1fr 8fr;\n        grid-template-columns: 1fr 3fr;\n        \n        position:initial;\n    }\n    .header>*{\n        padding: 1%;\n    }\n  .proj_list{\n     display: flex;\n    }\n  .header{\n    font-size: 2.5rem;\n    font-weight: 900;\n    position: initial;\n    grid-row: 1/2;\n    grid-column: 1/3;\n    width: 100%;\n    height: 100%;\n    \n  }\n  .btn{\n    display: flex;\n    height: 10%;\n    justify-content: flex-start;\n    padding-left: 2%;\n    font-size: 1.7rem;\n    background-color: var(--side);\n    border-style: none ;\n  }\n .popUp{\n    width: 40%;\n    height: 50%;\n    \n }\n.projects{\n    display: none;\n}\n\n.sidebar{\n    padding-top: 4%;\n    padding-left: 6%;\n    position: relative;\n    flex-direction: column;\n    font-size: 1.2rem;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    width: 100%;\n    min-height: 100%;\n    justify-content: flex-start;\n    \n}\n.sidebar>div{\n    width: 80%;\n    \n    margin-bottom: 4%;\n    flex-wrap:nowrap;\n    justify-content: flex-start;\n    \n}\n.sidebar>div:hover{\n    background-color: var(--hover);\n    \n}\n\n\n.sidebar .material-symbols-rounded{\n    font-size: 2rem;\n    padding-top: .5%;\n}\n\n\n.active{\n    background-color: var(--hover);\n   \n}\n.content{\n    padding: 5%;\n    position: initial;\n    background-color: var(--back);\n    grid-row: 2/3;\n    grid-column: 2/3;\n   \n   \n   justify-content: flex-start;\n   align-items: flex-start;\n    \n}\n.mode .material-symbols-rounded{\n    font-size: 1.7rem;\n    \n}\n.mode{\n    padding: 0.5%;\n}\n.home_header,.today_header,.week_header{\n  width: 67vw;\n  padding-bottom: 1%;\n  \n}\n.add_today,.add_week{\n    width: 67vw;\n    padding-top: 3px;  \n}\n.todo{\n    width: 99.8%;\n}\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "checkEmpty": () => (/* binding */ checkEmpty)
/* harmony export */ });
function checkEmpty(){
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

function cancel(){
   
        document.querySelector('.popUpContainer').style.display = 'none';
    
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
    todo.setAttribute('id',obj.title);
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
    if(e.target.getAttribute('id') === 'add_project' ){
        document.querySelector('.popUpContainer').style.display = 'flex';
    }
    if(e.target.getAttribute('id')=== 'cancel'){
        (0,_file_js__WEBPACK_IMPORTED_MODULE_4__.cancel)();
        
  
    }
    
    if(e.target.getAttribute('id') === 'week_submit'){
        if((0,_file_js__WEBPACK_IMPORTED_MODULE_4__.checkEmpty)()){
        (0,_week_js__WEBPACK_IMPORTED_MODULE_3__.createWeek)();
        (0,_file_js__WEBPACK_IMPORTED_MODULE_4__.cancel)();
        }
    }
    if(e.target.getAttribute('id') === 'today_submit'){
        if((0,_file_js__WEBPACK_IMPORTED_MODULE_4__.checkEmpty)()){
            (0,_today_js__WEBPACK_IMPORTED_MODULE_2__.createToday)();
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
document.querySelectorAll('.checkbox').forEach(box=>box.addEventListener('click',(e)=>{
       e.target.parentElement.classList.toggle('checked');
      let key = e.target.getAttribute('id');
      changeTask(key);
}));

document.querySelectorAll('.delete').forEach(edit=>edit.addEventListener('click',(e)=>{
    let key = e.target.parentElement.getAttribute('id');
  localStorage.removeItem(key);
  e.target.parentElement.remove();
}));

function changeTask(k){
    let obj = JSON.parse(localStorage.getItem(localStorage.key(k)));
    localStorage.removeItem(k);
    if(obj.task === 'ND'){
        obj.task = 'done';
    }else{
        obj.task = 'ND';
    }
    localStorage.setItem(obj.project_name,JSON.stringify(obj));
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
   todo.setAttribute('id',obj.title);
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
    todo.setAttribute('id',obj.title);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLGFBQWEsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFFBQVEsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksY0FBYyxNQUFNLEtBQUssV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGNBQWMsYUFBYSxjQUFjLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0s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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9maWxlLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3dlZWsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5ib2R5LmRhcmt7XFxuICAgIC0tdG9wOiMyNzI3MkE7XFxuICAgIC0tc2lkZTojM0YzRjQ2O1xcbiAgICAtLWhvdmVyOiMyNzI3MkE7XFxuICAgIC0tYmFjazojMUMxOTE3O1xcbiAgICAtLWNvbG9yOndoaXRlO1xcbn1cXG5cXG5ib2R5e1xcbiAgICAtLXRvcDpjb3JhbDtcXG4gICAgLS1zaWRlOiNDQkQ1RTE7XFxuICAgIC0taG92ZXI6Izk0QTNCODtcXG4gICAgLS1iYWNrOndoaXRlO1xcbiAgICAtLWNvbG9yOmJsYWNrO1xcbiAgICBtYXJnaW46IC0uMDElO1xcbiAgICBcXG4gICAgXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjayk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZWFkZXJ7XFxuICAgcG9zaXRpb246IGZpeGVkO1xcbiAgIHRvcDowO1xcbiAgIHdpZHRoOiAxMDB2dztcXG4gICBoZWlnaHQ6IDEwdmg7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9wKTtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIFxcbiAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG4uaGVhZGVyPip7XFxuICAgIHBhZGRpbmc6IDIlO1xcbn1cXG4ubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVke1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG4ubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkOmhvdmVye1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlKTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgbWluLWhlaWdodDogOHZoOyAgXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOjEwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiA5dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVke1xcbiAgICBmb250LXNpemU6IDEuN3JlbSA7XFxufVxcbi5zaWRlYmFyPmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcblxcblxcbi5idG4xe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAxKSA7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxufVxcbi5zaWRlYmFyPmRpdntcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBcXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZSk7XFxufVxcblxcblxcblxcblxcbi5jb250ZW50e1xcbiAgICBwYWRkaW5nLXRvcDogMjF2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgcGFkZGluZy1sZWZ0OiA3JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjayk7XFxufVxcblxcbi5tb2Rle1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBcXG4gICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgcmlnaHQ6IDIlO1xcbiAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlKTtcXG4gICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgIHRyYW5zaXRpb246IDFzO1xcbn1cXG4ubW9kZTpob3ZlcntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLnBvcFVwQ29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIFxcbn1cXG4ucG9wVXB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjayk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxufVxcbi5wb3BVcD5kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuLnBvcFVwPmJ1dHRvbntcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbmlucHV0e1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgbWFyZ2luOiAyJTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG50ZXh0YXJlYXtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI2NhbmNlbHtcXG4gICAgY29sb3I6IGNvcmFsO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogNXB4O1xcbn1cXG4uY2FuY2VsOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICBcXG59XFxuLmJ0bntcXG4gICAgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNvbnRlbnQgcGFnZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5ob21lX2hlYWRlciwudG9kYXlfaGVhZGVyLC53ZWVrX2hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAzJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyLjUlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdG9wKTtcXG59XFxuXFxuLmFkZF90b2RheSwuYWRkX3dlZWt7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgIDNmciAxZnIgMWZyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggb3V0c2V0IHJnYmEoMTcwLCAxNjYsIDE2NiwuMik7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50b2RvPi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWR7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4uZHVlX2RhdGV7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIFxcbiAgICBcXG59XFxuLmNoZWNrZWQ6OmFmdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmNoZWNrZWR7XFxuICAgIG9wYWNpdHk6IC40O1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEobWluLXdpZHRoOiA2MDBweCl7XFxuICAgaHRtbCxib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgfVxcbiAgICBib2R5e1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgICAgIFxcbiAgICAgICAgcG9zaXRpb246aW5pdGlhbDtcXG4gICAgfVxcbiAgICAuaGVhZGVyPip7XFxuICAgICAgICBwYWRkaW5nOiAxJTtcXG4gICAgfVxcbiAgLnByb2pfbGlzdHtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gIC5oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgXFxuICB9XFxuICAuYnRue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZSk7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZSA7XFxuICB9XFxuIC5wb3BVcHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIFxcbiB9XFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgcGFkZGluZy10b3A6IDQlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBcXG59XFxuLnNpZGViYXI+ZGl2e1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBcXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XFxuICAgIGZsZXgtd3JhcDpub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgXFxufVxcbi5zaWRlYmFyPmRpdjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBcXG59XFxuXFxuXFxuLnNpZGViYXIgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLXRvcDogLjUlO1xcbn1cXG5cXG5cXG4uYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgXFxufVxcbi5jb250ZW50e1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgcG9zaXRpb246IGluaXRpYWw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2spO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgIFxcbiAgIFxcbiAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgXFxufVxcbi5tb2RlIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWR7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBcXG59XFxuLm1vZGV7XFxuICAgIHBhZGRpbmc6IDAuNSU7XFxufVxcbi5ob21lX2hlYWRlciwudG9kYXlfaGVhZGVyLC53ZWVrX2hlYWRlcntcXG4gIHdpZHRoOiA2N3Z3O1xcbiAgcGFkZGluZy1ib3R0b206IDElO1xcbiAgXFxufVxcbi5hZGRfdG9kYXksLmFkZF93ZWVre1xcbiAgICB3aWR0aDogNjd2dztcXG4gICAgcGFkZGluZy10b3A6IDNweDsgIFxcbn1cXG4udG9kb3tcXG4gICAgd2lkdGg6IDk5LjglO1xcbn1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTs7O0lBR2IsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0dBQ0csZUFBZTtHQUNmLEtBQUs7R0FDTCxZQUFZO0dBQ1osWUFBWTtHQUNaLDRCQUE0QjtHQUM1QixhQUFhO0dBQ2IsOEJBQThCO0dBQzlCLG1CQUFtQjs7R0FFbkIsaUJBQWlCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2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a0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsMkJBQTJCOztBQUUvQjtBQUNBO0lBQ0ksVUFBVTs7SUFFVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjs7QUFFL0I7QUFDQTtJQUNJLDhCQUE4Qjs7QUFFbEM7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSw4QkFBOEI7O0FBRWxDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsZ0JBQWdCOzs7R0FHakIsMkJBQTJCO0dBQzNCLHVCQUF1Qjs7QUFFMUI7QUFDQTtJQUNJLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7O0FBRXBCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuYm9keS5kYXJre1xcbiAgICAtLXRvcDojMjcyNzJBO1xcbiAgICAtLXNpZGU6IzNGM0Y0NjtcXG4gICAgLS1ob3ZlcjojMjcyNzJBO1xcbiAgICAtLWJhY2s6IzFDMTkxNztcXG4gICAgLS1jb2xvcjp3aGl0ZTtcXG59XFxuXFxuYm9keXtcXG4gICAgLS10b3A6Y29yYWw7XFxuICAgIC0tc2lkZTojQ0JENUUxO1xcbiAgICAtLWhvdmVyOiM5NEEzQjg7XFxuICAgIC0tYmFjazp3aGl0ZTtcXG4gICAgLS1jb2xvcjpibGFjaztcXG4gICAgbWFyZ2luOiAtLjAxJTtcXG4gICAgXFxuICAgIFxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2spO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiAxcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVhZGVye1xcbiAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICB0b3A6MDtcXG4gICB3aWR0aDogMTAwdnc7XFxuICAgaGVpZ2h0OiAxMHZoO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvcCk7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBcXG4gICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuLmhlYWRlcj4qe1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZDpob3ZlcntcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZSk7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDh2aDsgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDoxMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogOXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlKTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW0gO1xcbn1cXG4uc2lkZWJhcj5kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG4uYnRuMXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMSkgO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbn1cXG4uc2lkZWJhcj5kaXZ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgXFxufVxcblxcbi5hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUpO1xcbn1cXG5cXG5cXG5cXG5cXG4uY29udGVudHtcXG4gICAgcGFkZGluZy10b3A6IDIxdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgIHBhZGRpbmctbGVmdDogNyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2spO1xcbn1cXG5cXG4ubW9kZXtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgXFxuICAgcG9zaXRpb246IGZpeGVkO1xcbiAgIHJpZ2h0OiAyJTtcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZSk7XFxuICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICB0cmFuc2l0aW9uOiAxcztcXG59XFxuLm1vZGU6aG92ZXJ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5wb3BVcENvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBpbnNldDogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBcXG59XFxuLnBvcFVwe1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2spO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbn1cXG4ucG9wVXA+ZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcbi5wb3BVcD5idXR0b257XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBtYXJnaW46IDIlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5pbnB1dHtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxudGV4dGFyZWF7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBtYXJnaW46IDIlO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbiNjYW5jZWx7XFxuICAgIGNvbG9yOiBjb3JhbDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAxcztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDVweDtcXG59XFxuLmNhbmNlbDpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgXFxufVxcbi5idG57XFxuICAgIFxcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jb250ZW50IHBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4uaG9tZV9oZWFkZXIsLnRvZGF5X2hlYWRlciwud2Vla19oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMyU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRvcCk7XFxufVxcblxcbi5hZGRfdG9kYXksLmFkZF93ZWVre1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuLnRvZG97XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyICAzZnIgMWZyIDFmcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IG91dHNldCByZ2JhKDE3MCwgMTY2LCAxNjYsLjIpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udG9kbz4ubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVke1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLmR1ZV9kYXRle1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBcXG4gICAgXFxufVxcbi5jaGVja2VkOjphZnRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jaGVja2Vke1xcbiAgICBvcGFjaXR5OiAuNDtcXG59XFxuXFxuXFxuXFxuQG1lZGlhKG1pbi13aWR0aDogNjAwcHgpe1xcbiAgIGh0bWwsYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgIH1cXG4gICAgYm9keXtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgICAgICBcXG4gICAgICAgIHBvc2l0aW9uOmluaXRpYWw7XFxuICAgIH1cXG4gICAgLmhlYWRlcj4qe1xcbiAgICAgICAgcGFkZGluZzogMSU7XFxuICAgIH1cXG4gIC5wcm9qX2xpc3R7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAuaGVhZGVye1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgcG9zaXRpb246IGluaXRpYWw7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIFxcbiAgfVxcbiAgLmJ0bntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUpO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmUgO1xcbiAgfVxcbiAucG9wVXB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBcXG4gfVxcbi5wcm9qZWN0c3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIHBhZGRpbmctdG9wOiA0JTtcXG4gICAgcGFkZGluZy1sZWZ0OiA2JTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgXFxufVxcbi5zaWRlYmFyPmRpdntcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgXFxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xcbiAgICBmbGV4LXdyYXA6bm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIFxcbn1cXG4uc2lkZWJhcj5kaXY6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgXFxufVxcblxcblxcbi5zaWRlYmFyIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWR7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZy10b3A6IC41JTtcXG59XFxuXFxuXFxuLmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgIFxcbn1cXG4uY29udGVudHtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrKTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICBcXG4gICBcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIFxcbn1cXG4ubW9kZSAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVke1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgXFxufVxcbi5tb2Rle1xcbiAgICBwYWRkaW5nOiAwLjUlO1xcbn1cXG4uaG9tZV9oZWFkZXIsLnRvZGF5X2hlYWRlciwud2Vla19oZWFkZXJ7XFxuICB3aWR0aDogNjd2dztcXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcXG4gIFxcbn1cXG4uYWRkX3RvZGF5LC5hZGRfd2Vla3tcXG4gICAgd2lkdGg6IDY3dnc7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7ICBcXG59XFxuLnRvZG97XFxuICAgIHdpZHRoOiA5OS44JTtcXG59XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRW1wdHkoKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla190aXRsZScpLnZhbHVlO1xuICAgICAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrX2RldGFpbHMnKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZV9kYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZV9kYXRlJykudmFsdWU7XG4gICAgICAgIGxldCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9uYW1lJykudmFsdWU7XG4gICAgICAgIGlmKCF0aXRsZSB8fCAhZGV0YWlscyB8fCAhZHVlX2RhdGUgfHwgIXByb2plY3RfbmFtZSl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbCgpe1xuICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcENvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXG59XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBob21lKCl7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5jb25zdCBob21lX3BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhvbWVfcGFnZS5jbGFzc0xpc3QuYWRkKCdob21lX3BhZ2UnKTtcbmNvbnRlbnQuYXBwZW5kKGhvbWVfcGFnZSk7XG5jb25zdCBob21lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaG9tZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhvbWVfcGFnZS5hcHBlbmQoaG9tZTEsaG9tZTIpO1xuXG5cbiAgICBjb25zdCBob21lX2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVfaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVfaGVhZGVyJyk7XG4gICAgY29uc3QgaGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGgxLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGNvbnN0IGhoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhoMi50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgaG9tZV9oZWFkZXIuYXBwZW5kKGhoMSxoaDIpO1xuICAgIGhvbWUxLmFwcGVuZChob21lX2hlYWRlcik7XG5cbiAgICBkaXNwbGF5SG9tZSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SG9tZSgpe1xuICAgIGZvcihsZXQgaT0wOyBpPGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIFxuICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XG4gICAgIFxuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICB0b2RvLnNldEF0dHJpYnV0ZSgnaWQnLG9iai50aXRsZSk7XG4gICAgY29uc3QgY2hlY2tfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja19ib3guc2V0QXR0cmlidXRlKCd0eXBlJyxcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrX2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVfZGF0ZScpO1xuICAgIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZV9kYXRlO1xuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgIGNvbnN0IGRlbD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgZGVsLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgaWYob2JqLnRhc2sgPT09ICdkb25lJyl7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgIH1cbiAgICB0b2RvLmFwcGVuZChjaGVja19ib3gsdGl0bGUsZHVlX2RhdGUsZWRpdCxkZWwpO1xuICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmQodG9kbyk7XG4gICAgIFxuICAgIH1cbiBcbiB9XG5cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyB0b2RheSwgdG9kYXlfZm9ybSxjcmVhdGVUb2RheSB9IGZyb20gJy4vdG9kYXkuanMnO1xuaW1wb3J0IHsgd2VlayAsd2Vla19mb3JtLCBjcmVhdGVXZWVrfSBmcm9tICcuL3dlZWsuanMnO1xuaW1wb3J0IHsgY2hlY2tFbXB0eSxjYW5jZWx9IGZyb20gJy4vZmlsZS5qcyc7XG5cbmhvbWUoKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG59KTtcblxuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgbWFrZUFjdGl2ZSgnaG9tZScpO1xuICAgIGhvbWUoKTtcbiAgICBcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgbWFrZUFjdGl2ZSgndG9kYXknKTtcbiAgICB0b2RheSgpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VlaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIG1ha2VBY3RpdmUoJ3dlZWsnKTtcbiAgICB3ZWVrKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZF90b2RheScgKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwQ29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgdG9kYXlfZm9ybSgpO1xuICAgIH1cbiAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRfd2VlaycgKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwQ29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgd2Vla19mb3JtKCk7XG4gICAgfVxuICAgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkX3dlZWsnICl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcENvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2FkZF9wcm9qZWN0JyApe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXBDb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cbiAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk9PT0gJ2NhbmNlbCcpe1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgXG4gIFxuICAgIH1cbiAgICBcbiAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICd3ZWVrX3N1Ym1pdCcpe1xuICAgICAgICBpZihjaGVja0VtcHR5KCkpe1xuICAgICAgICBjcmVhdGVXZWVrKCk7XG4gICAgICAgIGNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ3RvZGF5X3N1Ym1pdCcpe1xuICAgICAgICBpZihjaGVja0VtcHR5KCkpe1xuICAgICAgICAgICAgY3JlYXRlVG9kYXkoKTtcbiAgICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBtYWtlQWN0aXZlKHN0cil7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUnKS5mb3JFYWNoKG1lbnU9Pm1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICBpZihzdHIgPT09ICdob21lJyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgIH1lbHNlIGlmKHN0ciA9PT0gJ3RvZGF5Jyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1lbHNlIGlmKHN0ciA9PT0gJ3dlZWsnKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlZWsnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gICBcbn1cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpLmZvckVhY2goYm94PT5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgICAgbGV0IGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgIGNoYW5nZVRhc2soa2V5KTtcbn0pKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpLmZvckVhY2goZWRpdD0+ZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgbGV0IGtleSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xufSkpO1xuXG5mdW5jdGlvbiBjaGFuZ2VUYXNrKGspe1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaykpKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrKTtcbiAgICBpZihvYmoudGFzayA9PT0gJ05EJyl7XG4gICAgICAgIG9iai50YXNrID0gJ2RvbmUnO1xuICAgIH1lbHNle1xuICAgICAgICBvYmoudGFzayA9ICdORCc7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG9iai5wcm9qZWN0X25hbWUsSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZGF5KCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCB0b2RheV9wYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlfcGFnZS5jbGFzc0xpc3QuYWRkKCd0b2RheV9wYWdlJyk7XG4gICAgY29udGVudC5hcHBlbmQodG9kYXlfcGFnZSk7XG4gICAgY29uc3QgdG9kYXkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXkxLmNsYXNzTGlzdC5hZGQoJ3RvZGF5MScpO1xuICAgIGNvbnN0IHRvZGF5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5X3BhZ2UuYXBwZW5kKHRvZGF5MSx0b2RheTIpO1xuICAgIGNvbnN0IGFkZF90b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZF90b2RheS50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrcyc7XG4gICAgYWRkX3RvZGF5LmNsYXNzTGlzdC5hZGQoJ2FkZF90b2RheScpO1xuXG4gICAgdG9kYXkyLmFwcGVuZChhZGRfdG9kYXkpO1xuICAgIGNvbnN0IHRvZGF5X2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5X2hlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RheV9oZWFkZXInKTtcbiAgICBjb25zdCB0aDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aDEudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIGNvbnN0IHRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoMi50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgdG9kYXlfaGVhZGVyLmFwcGVuZCh0aDEsdGgyKTtcblxuICAgIHRvZGF5MS5hcHBlbmQodG9kYXlfaGVhZGVyKTtcbiAgICBkaXNwbGF5VG9kYXkoKTtcbiAgICBcbiAgICBcbiAgICB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RheV9mb3JtKCl7XG4gICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcCcpO1xuICAgcG9wVXAuaW5uZXJIVE1MID0gJyc7XG4gICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwidGV4dFwiKTtcbiAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLFwidG9kYXlfdGl0bGVcIik7XG4gICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUaXRsZTogTGF1bmRyeVwiKTtcbiAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2lkJyxcInRvZGF5X2RldGFpbHNcIik7XG4gICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLFwiRGV0YWlsczogZWcuZm9sZCBsYXVuZHJ5IGF0IDhwbVwiKTtcbiAgIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgZHVlX2RhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJkYXRlXCIpO1xuICAgZHVlX2RhdGUuc2V0QXR0cmlidXRlKCdpZCcsXCJkdWVfZGF0ZVwiKTtcbiAgIFxuICAgY29uc3QgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgIHByb2plY3RfbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwidGV4dFwiKTtcbiAgIHByb2plY3RfbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJyxcInByb2plY3RfbmFtZVwiKTtcbiAgIHByb2plY3RfbmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyxcIlByb2plY3QgbmFtZVwiKTtcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsXCJ0b2RheV9zdWJtaXRcIik7XG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0bjInKTtcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgIGhvbGRlci5hcHBlbmQoZHVlX2RhdGUscHJvamVjdF9uYW1lKTtcbiAgIHBvcFVwLmFwcGVuZCh0aXRsZSxkZXRhaWxzLGhvbGRlcixzdWJtaXQpO1xuICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCdjYW5jZWwnKTtcbiAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdjYW5jZWwnO1xuICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJykuYXBwZW5kKGNhbmNlbCk7XG5cblxufSAgICBcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZGF5KCl7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5X3RpdGxlJykudmFsdWU7XG4gICAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlfZGV0YWlscycpLnZhbHVlO1xuICAgIGxldCBkdWVfZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVfZGF0ZScpLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9uYW1lJykudmFsdWU7XG4gICAgbGV0IGJlbG9uZyA9ICd0b2RheSc7XG4gICAgbGV0IHRhc2sgPSAnTkQnO1xuICAgIGxldCBvYmogPSBjcmVhdGVPYmoodGl0bGUsZGV0YWlscyxkdWVfZGF0ZSxwcm9qZWN0X25hbWUsYmVsb25nLHRhc2spO1xuICAgIFxuICAgIFxuICAgIGxldCBvYmpfc2VyaWFsaXNlZCA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ob2JqLnByb2plY3RfbmFtZSxvYmpfc2VyaWFsaXNlZCk7XG4gICAgdG9kYXkoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JqKHRpdGxlLGRldGFpbHMsZHVlX2RhdGUscHJvamVjdF9uYW1lLGJlbG9uZyx0YXNrKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGV0YWlscyxcbiAgICAgICAgZHVlX2RhdGUsXG4gICAgICAgIHByb2plY3RfbmFtZSxcbiAgICAgICAgYmVsb25nLFxuICAgICAgICB0YXNrXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kYXkoKXtcbiAgIGZvcihsZXQgaT0wOyBpPGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgXG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpO1xuICAgIGlmKG9iai5iZWxvbmcgPT09ICd0b2RheScpe1xuICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICB0b2RvLnNldEF0dHJpYnV0ZSgnaWQnLG9iai50aXRsZSk7XG4gICBjb25zdCBjaGVja19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrX2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tfYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICBjb25zdCBkdWVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgZHVlX2RhdGUuY2xhc3NMaXN0LmFkZCgnZHVlX2RhdGUnKTtcbiAgIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZV9kYXRlO1xuICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICBjb25zdCBkZWw9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgIGRlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgIGRlbC5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgIGRlbC50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICAgaWYob2JqLnRhc2sgPT09ICdkb25lJyl7XG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICB9XG4gICB0b2RvLmFwcGVuZChjaGVja19ib3gsdGl0bGUsZHVlX2RhdGUsZWRpdCxkZWwpO1xuICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5MScpLmFwcGVuZCh0b2RvKTtcbiAgICB9XG4gICB9XG4gICBcbn0iLCJleHBvcnQgZnVuY3Rpb24gd2Vlaygpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3Qgd2Vla19wYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vla19wYWdlLmNsYXNzTGlzdC5hZGQoJ3dlZWtfcGFnZScpO1xuICAgIGNvbnRlbnQuYXBwZW5kKHdlZWtfcGFnZSk7XG4gICAgY29uc3Qgd2VlazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWVrMS5jbGFzc0xpc3QuYWRkKCd3ZWVrMScpO1xuICAgIGNvbnN0IHdlZWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vla19wYWdlLmFwcGVuZCh3ZWVrMSx3ZWVrMik7XG4gICAgY29uc3QgYWRkX3dlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRfd2Vlay50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrcyc7XG4gICAgYWRkX3dlZWsuY2xhc3NMaXN0LmFkZCgnYWRkX3dlZWsnKTtcbiAgICB3ZWVrMi5hcHBlbmQoYWRkX3dlZWspO1xuICAgIGNvbnN0IHdlZWtfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vla19oZWFkZXIuY2xhc3NMaXN0LmFkZCgnd2Vla19oZWFkZXInKTtcbiAgICBjb25zdCB3aDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aDEudGV4dENvbnRlbnQgPSAnV2Vlayc7XG4gICAgY29uc3Qgd2gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2gyLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICB3ZWVrX2hlYWRlci5hcHBlbmQod2gxLHdoMik7XG4gICAgd2VlazEuYXBwZW5kKHdlZWtfaGVhZGVyKTtcbiAgICBkaXNwbGF5V2VlaygpO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtfZm9ybSgpe1xuICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XG4gICAgcG9wVXAuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsXCJ0ZXh0XCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLFwid2Vla190aXRsZVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUaXRsZTogTGF1bmRyeVwiKTtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnaWQnLFwid2Vla19kZXRhaWxzXCIpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsXCJEZXRhaWxzOiBlZy5mb2xkIGxhdW5kcnkgYXQgOHBtXCIpO1xuICAgIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVfZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcImRhdGVcIik7XG4gICAgZHVlX2RhdGUuc2V0QXR0cmlidXRlKCdpZCcsXCJkdWVfZGF0ZVwiKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RfbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwidGV4dFwiKTtcbiAgICBwcm9qZWN0X25hbWUuc2V0QXR0cmlidXRlKCdpZCcsXCJwcm9qZWN0X25hbWVcIik7XG4gICAgcHJvamVjdF9uYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLFwiUHJvamVjdCBuYW1lXCIpO1xuICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0bjInKTtcbiAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLFwid2Vla19zdWJtaXRcIik7XG4gICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGhvbGRlci5hcHBlbmQoZHVlX2RhdGUscHJvamVjdF9uYW1lKTtcbiAgICBwb3BVcC5hcHBlbmQodGl0bGUsZGV0YWlscyxob2xkZXIsc3VibWl0KTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FuY2VsJyk7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ2NhbmNlbCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJykuYXBwZW5kKGNhbmNlbCk7XG4gXG4gXG4gfSAgICBcblxuXG4gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlZWsoKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla190aXRsZScpLnZhbHVlO1xuICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtfZGV0YWlscycpLnZhbHVlO1xuICAgIGxldCBkdWVfZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVfZGF0ZScpLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9uYW1lJykudmFsdWU7XG4gICAgbGV0IGJlbG9uZyA9ICd3ZWVrJztcbiAgICBsZXQgdGFzayA9ICdORCc7XG4gICAgbGV0IG9iaiA9IGNyZWF0ZU9iaih0aXRsZSxkZXRhaWxzLGR1ZV9kYXRlLHByb2plY3RfbmFtZSxiZWxvbmcsdGFzayk7XG4gICAgXG4gICAgXG4gICAgbGV0IG9ial9zZXJpYWxpc2VkID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShvYmoucHJvamVjdF9uYW1lLG9ial9zZXJpYWxpc2VkKTtcbiAgICB3ZWVrKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9iaih0aXRsZSxkZXRhaWxzLGR1ZV9kYXRlLHByb2plY3RfbmFtZSxiZWxvbmcsdGFzayl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRldGFpbHMsXG4gICAgICAgIGR1ZV9kYXRlLFxuICAgICAgICBwcm9qZWN0X25hbWUsXG4gICAgICAgIGJlbG9uZyxcbiAgICAgICAgdGFza1xuICAgIH1cbn1cblxuXG5cbiBmdW5jdGlvbiBkaXNwbGF5V2Vlaygpe1xuICAgIGZvcihsZXQgaT0wOyBpPGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgIFxuICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XG4gICAgIGlmKG9iai5iZWxvbmcgPT09ICd3ZWVrJyl7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgIHRvZG8uc2V0QXR0cmlidXRlKCdpZCcsb2JqLnRpdGxlKTtcbiAgICBjb25zdCBjaGVja19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrX2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tfYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICBjb25zdCBkdWVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZV9kYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZV9kYXRlJyk7XG4gICAgZHVlX2RhdGUudGV4dENvbnRlbnQgPSBvYmouZHVlX2RhdGU7XG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgY29uc3QgZGVsPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGVsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICBkZWwudGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgICBpZihvYmoudGFzayA9PT0gJ2RvbmUnKXtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgICAgfVxuICAgIHRvZG8uYXBwZW5kKGNoZWNrX2JveCx0aXRsZSxkdWVfZGF0ZSxlZGl0LGRlbCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWsxJykuYXBwZW5kKHRvZG8pO1xuICAgICB9XG4gICAgfVxuICAgIFxuIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=