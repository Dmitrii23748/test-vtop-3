/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/form.js */ \"./src/js/module/form.js\");\n\r\n\r\nconst body = document.querySelector(\"body\");\r\nconst form = document.querySelector(\".form\");\r\nconst formRegistr = document.querySelector(\".form-registr\");\r\nconst formBtn = document.querySelector(\".form-btn\");\r\nconst formNone = document.querySelector(\".form-none\");\r\nconst shapeImg = document.querySelectorAll(\".shape-img\");\r\n\r\nconst firstName = document.getElementById(\"input-name\");\r\nconst lastName = document.getElementById(\"input-lastname\");\r\nconst nationality = document.getElementById(\"nationality\");\r\nconst email = document.getElementById(\"input-email\");\r\n\r\nconst yearSelect = document.getElementById(\"year\");\r\nconst monthSelect = document.getElementById(\"month\");\r\nconst daySelect = document.getElementById(\"day\");\r\n\r\nconst password = document.getElementById(\"input-pass\");\r\nconst passwordConf = document.getElementById(\"input-passwordconf\");\r\n\r\nconst state = {\r\n\tfirstName: \"\",\r\n\tlastName: \"\",\r\n\tnationality: \"\",\r\n\temail: \"\",\r\n\tdayBirth: \"\",\r\n\tmounthBirth: \"\",\r\n\tyearBirth: \"\",\r\n\tgender: \"\",\r\n\tpassword: \"\",\r\n\tconfirmPassword: \"\",\r\n};\r\n\r\n// Реализация выбора даты рождения\r\nconst months = [\r\n\t\"January\",\r\n\t\"February\",\r\n\t\"March\",\r\n\t\"April\",\r\n\t\"May\",\r\n\t\"June\",\r\n\t\"July\",\r\n\t\"August\",\r\n\t\"September\",\r\n\t\"October\",\r\n\t\"November\",\r\n\t\"December\",\r\n];\r\n// Months are always the same\r\n(function populateMonths() {\r\n\tfor (let i = 0; i < months.length; i++) {\r\n\t\tconst option = document.createElement(\"option\");\r\n\t\toption.textContent = months[i];\r\n\t\tmonthSelect.appendChild(option);\r\n\t}\r\n\tmonthSelect.value = \"January\";\r\n})();\r\nlet previousDay;\r\nfunction populateDays(month) {\r\n\t//Delete all of the children of the day dropdown\r\n\t//if they do exist\r\n\twhile (daySelect.firstChild) {\r\n\t\tdaySelect.removeChild(daySelect.firstChild);\r\n\t}\r\n\t//Holds the number of days in the month\r\n\tlet dayNum;\r\n\t//Get the current year\r\n\tlet year = yearSelect.value;\r\n\tif (\r\n\t\tmonth === \"January\" ||\r\n\t\tmonth === \"March\" ||\r\n\t\tmonth === \"May\" ||\r\n\t\tmonth === \"July\" ||\r\n\t\tmonth === \"August\" ||\r\n\t\tmonth === \"October\" ||\r\n\t\tmonth === \"December\"\r\n\t) {\r\n\t\tdayNum = 31;\r\n\t} else if (\r\n\t\tmonth === \"April\" ||\r\n\t\tmonth === \"June\" ||\r\n\t\tmonth === \"September\" ||\r\n\t\tmonth === \"November\"\r\n\t) {\r\n\t\tdayNum = 30;\r\n\t} else {\r\n\t\t//Check for a leap year\r\n\t\tif (new Date(year, 1, 29).getMonth() === 1) {\r\n\t\t\tdayNum = 29;\r\n\t\t} else {\r\n\t\t\tdayNum = 28;\r\n\t\t}\r\n\t}\r\n\t//Insert the correct days into the day <select>\r\n\tfor (let i = 1; i <= dayNum; i++) {\r\n\t\tconst option = document.createElement(\"option\");\r\n\t\toption.textContent = i;\r\n\t\tdaySelect.appendChild(option);\r\n\t}\r\n\tif (previousDay) {\r\n\t\tdaySelect.value = previousDay;\r\n\t\tif (daySelect.value === \"\") {\r\n\t\t\tdaySelect.value = previousDay - 1;\r\n\t\t}\r\n\t\tif (daySelect.value === \"\") {\r\n\t\t\tdaySelect.value = previousDay - 2;\r\n\t\t}\r\n\t\tif (daySelect.value === \"\") {\r\n\t\t\tdaySelect.value = previousDay - 3;\r\n\t\t}\r\n\t}\r\n}\r\nfunction populateYears() {\r\n\t//Get the current year as a number\r\n\tlet year = new Date().getFullYear();\r\n\t//Make the previous 100 years be an option\r\n\tfor (let i = 0; i < 101; i++) {\r\n\t\tconst option = document.createElement(\"option\");\r\n\t\toption.textContent = year - i;\r\n\t\tyearSelect.appendChild(option);\r\n\t}\r\n}\r\npopulateDays(monthSelect.value);\r\npopulateYears();\r\n\r\nyearSelect.onchange = function () {\r\n\tpopulateDays(monthSelect.value);\r\n};\r\nmonthSelect.onchange = function () {\r\n\tpopulateDays(monthSelect.value);\r\n};\r\ndaySelect.onchange = function () {\r\n\tpreviousDay = daySelect.value;\r\n};\r\n// конец реализации даты рождения\r\n\r\nformBtn.addEventListener(\"click\", () => {\r\n\tsetTimeout(() => {\r\n\t\t(0,_module_form_js__WEBPACK_IMPORTED_MODULE_0__.deleteCrash)(formBtn);\r\n\t}, 100);\r\n});\r\n\r\nfor (let elem of form.elements) {\r\n\tlet dataAtr = elem.dataset.element;\r\n\tif (\r\n\t\t!elem.classList.contains(\"select-item\") &&\r\n\t\t!elem.classList.contains(\"input-radio\") &&\r\n\t\t!elem.classList.contains(\"form-btn\")\r\n\t) {\r\n\t\telem.addEventListener(\"blur\", () => {\r\n\t\t\t(0,_module_form_js__WEBPACK_IMPORTED_MODULE_0__.validateElem)(elem, shapeImg, dataAtr);\r\n\t\t\tif (password.value !== passwordConf.value && passwordConf.value !== \"\") {\r\n\t\t\t\telem.nextElementSibling.textContent = \"Пароли не равны\";\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n}\r\n\r\nbody.addEventListener(\"input\", (e) => {\r\n\tif (e.target.name === \"firstName\") {\r\n\t\tstate.firstName = firstName.value;\r\n\t}\r\n\tif (e.target.name === \"lastname\") {\r\n\t\tstate.lastName = lastName.value;\r\n\t}\r\n\tif (e.target.name === \"select-nationality\") {\r\n\t\tstate.nationality = nationality.value;\r\n\t}\r\n\tif (e.target.name === \"day\") {\r\n\t\tstate.dayBirth = daySelect.value;\r\n\t}\r\n\tif (e.target.name === \"month\") {\r\n\t\tstate.mounthBirth = monthSelect.value;\r\n\t}\r\n\tif (e.target.name === \"year\") {\r\n\t\tstate.yearBirth = yearSelect.value;\r\n\t}\r\n\tif (e.target.name === \"email\") {\r\n\t\tstate.email = email.value;\r\n\t}\r\n\tif (e.target.name === \"password\") {\r\n\t\tstate.password = password.value;\r\n\t}\r\n\tif (e.target.name === \"passconf\") {\r\n\t\tstate.confirmPassword = passwordConf.value;\r\n\t}\r\n});\r\n\r\ndocument.addEventListener(\"change\", (e) => (state.gender = e.target.value));\r\n\r\nform.addEventListener(\"submit\", (e) => {\r\n\te.preventDefault();\r\n\r\n\tfor (let elem of form.elements) {\r\n\t\tlet dataAtr = elem.dataset.element;\r\n\t\tif (\r\n\t\t\t!elem.classList.contains(\"select-item\") &&\r\n\t\t\t!elem.classList.contains(\"input-radio\") &&\r\n\t\t\t!elem.classList.contains(\"form-btn\")\r\n\t\t) {\r\n\t\t\tif (elem.value === \"\") {\r\n\t\t\t\telem.nextElementSibling.textContent = \"Заполните поле\";\r\n\t\t\t\tformBtn.classList.add(\"form-btn-crash\");\r\n\t\t\t\tshapeImg.forEach((shape) => {\r\n\t\t\t\t\tif (shape.dataset.element === dataAtr) {\r\n\t\t\t\t\t\tshape.classList.add(\"shape-img-none\");\r\n\t\t\t\t\t\telem.classList.add(\"error-span-border\");\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t} else if (\r\n\t\t\t\tpassword.value !== passwordConf.value &&\r\n\t\t\t\tpasswordConf.value !== \"\"\r\n\t\t\t) {\r\n\t\t\t\tif (dataAtr === \"input-pass\" || dataAtr === \"input-passconf\") {\r\n\t\t\t\t\telem.nextElementSibling.textContent = \"Пароли не равны\";\r\n\t\t\t\t}\r\n\t\t\t} else if (elem.value !== \"\") {\r\n\t\t\t\t(0,_module_form_js__WEBPACK_IMPORTED_MODULE_0__.validateElem)(elem, shapeImg, dataAtr);\r\n\t\t\t} else {\r\n\t\t\t\telem.nextElementSibling.textContent = \"\";\r\n\t\t\t\telem.classList.remove(\"error-span-border\");\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tif (\r\n\t\tstate.firstName !== \"\" &&\r\n\t\tstate.lastName !== \"\" &&\r\n\t\tstate.nationality !== \"\" &&\r\n\t\tstate.email !== \"\" &&\r\n\t\tstate.dayBirth !== \"\" &&\r\n\t\tstate.mounthBirth !== \"\" &&\r\n\t\tstate.yearBirth !== \"\" &&\r\n\t\tstate.gender !== \"\" &&\r\n\t\tstate.password !== \"\" &&\r\n\t\tstate.confirmPassword !== \"\"\r\n\t\t&& (state.password === state.confirmPassword)\r\n\t) {\r\n\t\tconsole.log(state);\r\n\t\tform.classList.add(\"form-class\");\r\n\t\tformRegistr.classList.add(\"form-registr-class\");\r\n\t\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://test-vtop-3/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/form.js":
/*!*******************************!*\
  !*** ./src/js/module/form.js ***!
  \*******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteCrash\": function() { return /* binding */ deleteCrash; },\n/* harmony export */   \"validateElem\": function() { return /* binding */ validateElem; }\n/* harmony export */ });\nconst re =\r\n\t/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n\r\nconst rePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$/;\r\n\r\n// удаление анимация crash\r\nconst deleteCrash = (btn) => {\r\n\tbtn.classList.remove(\"form-btn-crash\");\r\n};\r\n\r\nconst validateInput = (elemInput, arrShape, dataAtr) => {\r\n\tif (elemInput.value.trim() === \"\") {\r\n\t\telemInput.nextElementSibling.textContent = \"Заполните поле\";\r\n\t\tarrShape.forEach((shape) => {\r\n\t\t\tif (shape.dataset.element === dataAtr) {\r\n\t\t\t\tshape.classList.add(\"shape-img-none\");\r\n\t\t\t\telemInput.classList.add(\"error-span-border\");\r\n\t\t\t}\r\n\t\t});\r\n\t} else {\r\n\t\telemInput.nextElementSibling.textContent = \"\";\r\n\t\tarrShape.forEach((shape) => {\r\n\t\t\tif (shape.dataset.element === dataAtr) {\r\n\t\t\t\tshape.classList.remove(\"shape-img-none\");\r\n\t\t\t\telemInput.classList.remove(\"error-span-border\");\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n};\r\n\r\nconst validateElentsShapeAdd = (shapeImgElem, elemInput, dataAtr) => {\r\n\tshapeImgElem.forEach((shape) => {\r\n\t\tif (shape.dataset.element === dataAtr) {\r\n\t\t\tshape.classList.add(\"shape-img-none\");\r\n\t\t\telemInput.classList.add(\"error-span-border\");\r\n\t\t}\r\n\t});\r\n};\r\nconst validateElentsShapeRemove = (shapeImgElem, elemInput, dataAtr) => {\r\n\tshapeImgElem.forEach((shape) => {\r\n\t\tif (shape.dataset.element === dataAtr) {\r\n\t\t\tshape.classList.remove(\"shape-img-none\");\r\n\t\t\telemInput.classList.remove(\"error-span-border\");\r\n\t\t}\r\n\t});\r\n};\r\n\r\nconst validateElem = (elem, shapeImg, dataAtr) => {\r\n\tif (\r\n\t\telem.dataset.element === \"input-pass\" ||\r\n\t\telem.dataset.element === \"input-passconf\"\r\n\t) {\r\n\t\tif (!rePassword.test(elem.value)) {\r\n\t\t\telem.nextElementSibling.textContent =\r\n\t\t\t\t\"Пароль содержит 8 символов, заглавные,строчные буквы, цифры и только латинские символы\";\r\n\t\t\tvalidateElentsShapeAdd(shapeImg, elem, dataAtr);\r\n\t\t} else {\r\n\t\t\telem.nextElementSibling.textContent = \"\";\r\n\t\t\tvalidateElentsShapeRemove(shapeImg, elem, dataAtr);\r\n\t\t}\r\n\t}\r\n\tif (\r\n\t\telem.dataset.element === \"input-name\" ||\r\n\t\telem.dataset.element === \"input-lastname\"\r\n\t) {\r\n\t\tvalidateInput(elem, shapeImg, dataAtr);\r\n\t}\r\n\tif (elem.dataset.element === \"input-email\") {\r\n\t\tif (!re.test(elem.value)) {\r\n\t\t\telem.nextElementSibling.textContent = \"Не корректный email\";\r\n\t\t\tvalidateElentsShapeAdd(shapeImg, elem, dataAtr);\r\n\t\t} else {\r\n\t\t\telem.nextElementSibling.textContent = \"\";\r\n\t\t\tvalidateElentsShapeRemove(shapeImg, elem, dataAtr);\r\n\t\t}\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://test-vtop-3/./src/js/module/form.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;