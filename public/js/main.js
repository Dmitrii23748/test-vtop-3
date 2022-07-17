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

eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst yearSelect = document.getElementById(\"year\");\r\nconst monthSelect = document.getElementById(\"month\");\r\nconst daySelect = document.getElementById(\"day\");\r\n\r\n// Реализация выбора даты рождения\r\nconst months = [\r\n\t\"January\",\r\n\t\"February\",\r\n\t\"March\",\r\n\t\"April\",\r\n\t\"May\",\r\n\t\"June\",\r\n\t\"July\",\r\n\t\"August\",\r\n\t\"September\",\r\n\t\"October\",\r\n\t\"November\",\r\n\t\"December\",\r\n];\r\n\r\n// Months are always the same\r\n(function populateMonths() {\r\n\tfor (let i = 0; i < months.length; i++) {\r\n\t\tconst option = document.createElement(\"option\");\r\n\t\toption.textContent = months[i];\r\n\t\tmonthSelect.appendChild(option);\r\n\t}\r\n\tmonthSelect.value = \"January\";\r\n})();\r\n\r\nlet previousDay;\r\n\r\nfunction populateDays(month) {\r\n\t//Delete all of the children of the day dropdown\r\n\t//if they do exist\r\n\twhile (daySelect.firstChild) {\r\n\t\tdaySelect.removeChild(daySelect.firstChild);\r\n\t}\r\n\t//Holds the number of days in the month\r\n\tlet dayNum;\r\n\t//Get the current year\r\n\tlet year = yearSelect.value;\r\n\r\n\tif (\r\n\t\tmonth === \"January\" ||\r\n\t\tmonth === \"March\" ||\r\n\t\tmonth === \"May\" ||\r\n\t\tmonth === \"July\" ||\r\n\t\tmonth === \"August\" ||\r\n\t\tmonth === \"October\" ||\r\n\t\tmonth === \"December\"\r\n\t) {\r\n\t\tdayNum = 31;\r\n\t} else if (\r\n\t\tmonth === \"April\" ||\r\n\t\tmonth === \"June\" ||\r\n\t\tmonth === \"September\" ||\r\n\t\tmonth === \"November\"\r\n\t) {\r\n\t\tdayNum = 30;\r\n\t} else {\r\n\t\t//Check for a leap year\r\n\t\tif (new Date(year, 1, 29).getMonth() === 1) {\r\n\t\t\tdayNum = 29;\r\n\t\t} else {\r\n\t\t\tdayNum = 28;\r\n\t\t}\r\n\t}\r\n\t//Insert the correct days into the day <select>\r\n\tfor (let i = 1; i <= dayNum; i++) {\r\n\t\tconst option = document.createElement(\"option\");\r\n\t\toption.textContent = i;\r\n\t\tdaySelect.appendChild(option);\r\n\t}\r\n\tif (previousDay) {\r\n\t\tdaySelect.value = previousDay;\r\n\t\tif (daySelect.value === \"\") {\r\n\t\t\tdaySelect.value = previousDay - 1;\r\n\t\t}\r\n\t\tif (daySelect.value === \"\") {\r\n\t\t\tdaySelect.value = previousDay - 2;\r\n\t\t}\r\n\t\tif (daySelect.value === \"\") {\r\n\t\t\tdaySelect.value = previousDay - 3;\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction populateYears() {\r\n\t//Get the current year as a number\r\n\tlet year = new Date().getFullYear();\r\n\t//Make the previous 100 years be an option\r\n\tfor (let i = 0; i < 101; i++) {\r\n\t\tconst option = document.createElement(\"option\");\r\n\t\toption.textContent = year - i;\r\n\t\tyearSelect.appendChild(option);\r\n\t}\r\n}\r\n\r\npopulateDays(monthSelect.value);\r\npopulateYears();\r\n\r\nyearSelect.onchange = function () {\r\n\tpopulateDays(monthSelect.value);\r\n};\r\nmonthSelect.onchange = function () {\r\n\tpopulateDays(monthSelect.value);\r\n};\r\ndaySelect.onchange = function () {\r\n\tpreviousDay = daySelect.value;\r\n};\r\n// конец реализации даты рождения\r\n\n\n//# sourceURL=webpack://test-vtop-3/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;