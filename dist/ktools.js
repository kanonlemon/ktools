/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Kcommon/Kcommon.ts":
/*!********************************!*\
  !*** ./src/Kcommon/Kcommon.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
* @Author   ： Kanon
* @Email    : wengxuan1992@hotmail.com
* @Description:
*	Some easy-deal tools
*
*/
var Kcommon;
(function (Kcommon) {
    class Kbase {
        constructor() { }
        // repeat
        // input    :1 ,4
        // output   :[1, 1, 1, 1]
        static repeat(t, times) {
            let repeat = [];
            times = Math.floor(times);
            for (let i = 0; i < times; i++) {
                repeat.push(t);
            }
            return repeat;
        }
    }
    Kcommon.Kbase = Kbase;
})(Kcommon || (Kcommon = {}));
exports.Kcommon = Kcommon;


/***/ }),

/***/ "./src/Kmath/Kmath.ts":
/*!****************************!*\
  !*** ./src/Kmath/Kmath.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
* @Author   ： Kanon
* @Email    : wengxuan1992@hotmail.com
* @Description:
*	Some computation utils
*
*/
const Kcommon_1 = __webpack_require__(/*! ../Kcommon/Kcommon */ "./src/Kcommon/Kcommon.ts");
var Kmath;
(function (Kmath) {
    class Karray {
        constructor() { }
        // cumprod: 	
        // input	: [1,2,3,4,5,6] 	
        // output 	: [1,2,6,24,120,720] 	
        static cumprod(array) {
            let cumprod = [];
            array.reduce(function (accumulator, currentValue, currentIndex, array) {
                cumprod.push(accumulator * currentValue);
                return accumulator * currentValue;
            }, 1);
            return cumprod;
        }
        // cumsum: 	
        // input	: [1,2,3,4,5,6] 	
        // output 	: [1,2,6,24,120,720] 	
        static cumsum(array) {
            let cumsum = [];
            array.reduce(function (accumulator, currentValue, currentIndex, array) {
                cumsum.push(accumulator + currentValue);
                return accumulator + currentValue;
            }, 0);
            return cumsum;
        }
        // change
        // input    : [1,2,3,4,5,6]
        // output   : [0,1,1,1,1,1]
        static change(array) {
            let change = [];
            array.reduce(function (accumulator, currentValue, currentIndex, array) {
                if (currentIndex === 0) {
                    accumulator = currentValue;
                }
                change.push(currentValue - accumulator);
                return currentValue;
            }, array[0]);
            return change;
        }
        // percent_change: 	
        // input	: [1,2,3,4,5,6] 	
        // output	: [1,2,1.5,1.333, 1.25, 1.2] 	
        static percent_change(array) {
            let pct_change = [];
            array.reduce(function (accumulator, currentValue, currentIndex, array) {
                pct_change.push(currentValue / accumulator - 1);
                return currentValue;
            }, array[0]);
            return pct_change;
        }
        // add
        // input    : [2,4,6,16,35,48],[1,2,3,4,5,6]
        // output   : [3,6,9,20,40,54]
        static add(array1, array2) {
            if (!Array.isArray(array2)) {
                array2 = Kcommon_1.Kcommon.Kbase.repeat(array2, array1.length);
            }
            let add = [];
            if (array1.length === array2.length) {
                //add only when two arraies have the save length
                for (let i = 0; i < array1.length; i++) {
                    if (array2[i] === undefined || isNaN(array2[i]) || array1[i] === undefined || isNaN(array1[i])) {
                        //illegal oprand check
                        add.push(NaN);
                    }
                    else {
                        add.push(array1[i] + array2[i]);
                    }
                }
            }
            else {
                throw new DOMException("must have the same length");
            }
            return add;
        }
        // divide
        // input    : [2,4,6,16,35,48],[1,2,3,4,5,6]
        // output   : [2,2,2,4,7,8]
        static div(array1, array2) {
            if (!Array.isArray(array2)) {
                array2 = Kcommon_1.Kcommon.Kbase.repeat(array2, array1.length);
            }
            let div = [];
            if (array1.length === array2.length) {
                //div only when two arraies have the save length
                for (let i = 0; i < array1.length; i++) {
                    if (array2[i] === undefined || isNaN(array2[i]) || array2[i] === 0 || array1[i] === undefined || isNaN(array1[i])) {
                        //illegal oprand check
                        div.push(NaN);
                    }
                    else {
                        div.push(array1[i] / array2[i]);
                    }
                }
            }
            else {
                throw new DOMException("must have the same length");
            }
            return div;
        }
    }
    Kmath.Karray = Karray;
})(Kmath || (Kmath = {}));
exports.Kmath = Kmath;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Kmath_1 = __webpack_require__(/*! ./Kmath/Kmath */ "./src/Kmath/Kmath.ts");
window.Ktools = window.Ktools || {};
window.Ktools.Kmath = Kmath_1.Kmath;
console.log(Kmath_1.Kmath.Karray.add([1, 2, 3, 4], 10));


/***/ })

/******/ });
//# sourceMappingURL=ktools.js.map