/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Form */ \"./src/modules/Form.js\");\n/* harmony import */ var _modules_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Loading */ \"./src/modules/Loading.js\");\n/* harmony import */ var _modules_Display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Display */ \"./src/modules/Display.js\");\n\r\n\r\n\r\n\r\nconst contentDiv = document.querySelector('#content');\r\n\r\ncontentDiv.appendChild(_modules_Form__WEBPACK_IMPORTED_MODULE_0__.default.getForm());\r\ncontentDiv.appendChild(_modules_Loading__WEBPACK_IMPORTED_MODULE_1__.default.getLoading());\r\n\r\nconst formDiv = document.querySelector('#form');\r\nformDiv.addEventListener('submit', _modules_Display__WEBPACK_IMPORTED_MODULE_2__.default.displayData);\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/Data.js":
/*!*****************************!*\
  !*** ./src/modules/Data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apidata = (() => {\r\n  const getData = async (city) => {\r\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7252148aacbeb1a9bc88991a6e17694d`,\r\n      { mode: 'cors' });\r\n    const data = await response.json();\r\n    return data;\r\n  };\r\n\r\n  return { getData };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apidata);\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/Data.js?");

/***/ }),

/***/ "./src/modules/Display.js":
/*!********************************!*\
  !*** ./src/modules/Display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ \"./src/modules/Form.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ \"./src/modules/Loading.js\");\n/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Data */ \"./src/modules/Data.js\");\n\r\n\r\n\r\n\r\nconst displaypanel = (() => {\r\n// send the value to data.js\r\n\r\n  const displayData = async (e) => {\r\n    e.preventDefault();\r\n    const cityname = _Form__WEBPACK_IMPORTED_MODULE_0__.default.getInputValue();\r\n    if (!cityname) {\r\n      console.log('nothing');\r\n    } else {\r\n      _Loading__WEBPACK_IMPORTED_MODULE_1__.default.showPanel();\r\n      _Form__WEBPACK_IMPORTED_MODULE_0__.default.setInputValue('');\r\n      const info = await _Data__WEBPACK_IMPORTED_MODULE_2__.default.getData(cityname);\r\n      const { description } = info.weather[0];\r\n      const { temp } = info.main;\r\n      const text = document.createElement('div');\r\n      text.innerText = `${description} ${temp}`;\r\n      _Loading__WEBPACK_IMPORTED_MODULE_1__.default.hidePanel();\r\n\r\n      document.querySelector('#content').appendChild(text);\r\n    }\r\n  };\r\n\r\n  return { displayData };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displaypanel);\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/Display.js?");

/***/ }),

/***/ "./src/modules/Form.js":
/*!*****************************!*\
  !*** ./src/modules/Form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formpanel = (() => {\r\n  const formDiv = document.createElement('form');\r\n  const initialisePanel = () => {\r\n    formDiv.setAttribute('id', 'form');\r\n    const input = document.createElement('input');\r\n    input.placeholder = 'Enter City...';\r\n    input.setAttribute('id', 'form-input');\r\n    formDiv.appendChild(input);\r\n    const btn = document.createElement('button');\r\n    btn.type = 'submit';\r\n    btn.setAttribute('id', 'form-button');\r\n    btn.innerText = 'get';\r\n    formDiv.appendChild(btn);\r\n  };\r\n  const getForm = () => formDiv;\r\n  const getInputValue = () => {\r\n    const div = document.querySelector('#form-input');\r\n    return div.value;\r\n  };\r\n  const setInputValue = (value) => {\r\n    const div = document.querySelector('#form-input');\r\n    div.value = value;\r\n  };\r\n  return {\r\n    initialisePanel, getForm, getInputValue, setInputValue,\r\n  };\r\n})();\r\n\r\nformpanel.initialisePanel();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formpanel);\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/Form.js?");

/***/ }),

/***/ "./src/modules/Loading.js":
/*!********************************!*\
  !*** ./src/modules/Loading.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadingpanel = (() => {\r\n  const loading = document.createElement('div');\r\n  const initialisePanel = () => {\r\n    loading.innerText = 'Loading...';\r\n    loading.setAttribute('id', 'loading-text');\r\n    loading.style.display = 'none';\r\n  };\r\n  const getLoading = () => loading;\r\n  const showPanel = () => {\r\n    const panel = document.querySelector('#loading-text');\r\n    panel.style.display = 'block';\r\n  };\r\n  const hidePanel = () => {\r\n    const panel = document.querySelector('#loading-text');\r\n    panel.style.display = 'none';\r\n  };\r\n  return {\r\n    initialisePanel, getLoading, showPanel, hidePanel,\r\n  };\r\n})();\r\n\r\nloadingpanel.initialisePanel();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadingpanel);\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/Loading.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;