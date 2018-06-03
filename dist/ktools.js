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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/global.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/date-and-time/date-and-time.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-and-time/date-and-time.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js (c) KNOWLEDGECODE | MIT
 */
(function (global) {
    'use strict';

    var date = {},
        lang = 'en',
        locales = {
            en: {
                MMMM: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                dddd: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                ddd: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                dd: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                A: ['a.m.', 'p.m.'],
                formatter: {
                    YYYY: function (d/*, formatString*/) { return ('000' + d.getFullYear()).slice(-4); },
                    YY: function (d/*, formatString*/) { return ('0' + d.getFullYear()).slice(-2); },
                    Y: function (d/*, formatString*/) { return '' + d.getFullYear(); },
                    MMMM: function (d/*, formatString*/) { return this.MMMM[d.getMonth()]; },
                    MMM: function (d/*, formatString*/) { return this.MMM[d.getMonth()]; },
                    MM: function (d/*, formatString*/) { return ('0' + (d.getMonth() + 1)).slice(-2); },
                    M: function (d/*, formatString*/) { return '' + (d.getMonth() + 1); },
                    DD: function (d/*, formatString*/) { return ('0' + d.getDate()).slice(-2); },
                    D: function (d/*, formatString*/) { return '' + d.getDate(); },
                    HH: function (d/*, formatString*/) { return ('0' + d.getHours()).slice(-2); },
                    H: function (d/*, formatString*/) { return '' + d.getHours(); },
                    A: function (d/*, formatString*/) { return this.A[d.getHours() > 11 | 0]; },
                    hh: function (d/*, formatString*/) { return ('0' + (d.getHours() % 12 || 12)).slice(-2); },
                    h: function (d/*, formatString*/) { return '' + (d.getHours() % 12 || 12); },
                    mm: function (d/*, formatString*/) { return ('0' + d.getMinutes()).slice(-2); },
                    m: function (d/*, formatString*/) { return '' + d.getMinutes(); },
                    ss: function (d/*, formatString*/) { return ('0' + d.getSeconds()).slice(-2); },
                    s: function (d/*, formatString*/) { return '' + d.getSeconds(); },
                    SSS: function (d/*, formatString*/) { return ('00' + d.getMilliseconds()).slice(-3); },
                    SS: function (d/*, formatString*/) { return ('0' + (d.getMilliseconds() / 10 | 0)).slice(-2); },
                    S: function (d/*, formatString*/) { return '' + (d.getMilliseconds() / 100 | 0); },
                    dddd: function (d/*, formatString*/) { return this.dddd[d.getDay()]; },
                    ddd: function (d/*, formatString*/) { return this.ddd[d.getDay()]; },
                    dd: function (d/*, formatString*/) { return this.dd[d.getDay()]; },
                    Z: function (d/*, formatString*/) {
                        var offset = d.utc ? 0 : d.getTimezoneOffset() / 0.6;
                        return (offset > 0 ? '-' : '+') + ('000' + Math.abs(offset - offset % 100 * 0.4)).slice(-4);
                    },
                    post: function (str) { return str; }
                },
                parser: {
                    find: function (array, str) {
                        var index = -1, length = 0;

                        for (var i = 0, len = array.length, item; i < len; i++) {
                            item = array[i];
                            if (!str.indexOf(item) && item.length > length) {
                                index = i;
                                length = item.length;
                            }
                        }
                        return { index: index, length: length };
                    },
                    MMMM: function (str/*, formatString*/) {
                        return this.parser.find(this.MMMM, str);
                    },
                    MMM: function (str/*, formatString*/) {
                        return this.parser.find(this.MMM, str);
                    },
                    A: function (str/*, formatString*/) {
                        return this.parser.find(this.A, str);
                    },
                    h: function (h, a) { return (h === 12 ? 0 : h) + a * 12; },
                    pre: function (str) { return str; }
                }
            }
        };

    /**
     * formatting a date
     * @param {Object} dateObj - date object
     * @param {String} formatString - format string
     * @param {Boolean} [utc] - output as UTC
     * @returns {String} the formatted string
     */
    date.format = function (dateObj, formatString, utc) {
        var d = date.addMinutes(dateObj, utc ? dateObj.getTimezoneOffset() : 0),
            locale = locales[lang], formatter = locale.formatter;

        d.utc = utc;
        return formatString.replace(/(\[[^\[\]]*]|\[.*\][^\[]*\]|YYYY|YY|MMM?M?|DD|HH|hh|mm|ss|SSS?|ddd?d?|.)/g, function (token) {
            var format = formatter[token];
            return format ? formatter.post(format.call(locale, d, formatString)) : token.replace(/\[(.*)]/, '$1');
        });
    };

    /**
     * parsing a date string
     * @param {String} dateString - date string
     * @param {String} formatString - format string
     * @param {Boolean} [utc] - input as UTC
     * @returns {Object} the constructed date
     */
    date.parse = function (dateString, formatString, utc) {
        var locale = locales[lang], dString = locale.parser.pre(dateString),
            offset = 0, keys, i, token, length, p, str, result, dateObj,
            re = /(MMMM?|A)|(YYYY)|(SSS)|(MM|DD|HH|hh|mm|ss)|(YY|M|D|H|h|m|s|SS)|(S)|(.)/g,
            exp = { 2: /^\d{1,4}/, 3: /^\d{1,3}/, 4: /^\d\d/, 5: /^\d\d?/, 6: /^\d/ },
            last = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            dt = { Y: 1970, M: 1, D: 1, H: 0, m: 0, s: 0, S: 0 };

        while ((keys = re.exec(formatString))) {
            for (i = 0, length = 1, token = ''; !token;) {
                token = keys[++i];
            }
            p = token.charAt(0);
            str = dString.slice(offset);
            if (i < 2) {
                result = locale.parser[token].call(locale, str, formatString);
                dt[p] = result.index;
                if (p === 'M') {
                    dt[p]++;
                }
                length = result.length;
            } else if (i < 7) {
                result = (str.match(exp[i]) || [''])[0];
                dt[p] = (p === 'S' ? (result + '000').slice(0, -token.length) : result) | 0;
                length = result.length;
            } else if (p !== ' ' && p !== str[0]) {
                return NaN;
            }
            if (!length) {
                return NaN;
            }
            offset += length;
        }
        if (offset !== dString.length || !result) {
            return NaN;
        }
        dt.Y += dt.Y < 70 ? 2000 : dt.Y < 100 ? 1900 : 0;
        dt.H = dt.H || locale.parser.h(dt.h || 0, dt.A || 0);

        dateObj = new Date(dt.Y, dt.M - 1, dt.D, dt.H, dt.m, dt.s, dt.S);
        last[1] += date.isLeapYear(dateObj) | 0;
        if (dt.M < 1 || dt.M > 12 || dt.D < 1 || dt.D > last[dt.M - 1] || dt.H > 23 || dt.m > 59 || dt.s > 59) {
            return NaN;
        }
        return utc ? date.addMinutes(dateObj, -dateObj.getTimezoneOffset()) : dateObj;
    };

    /**
     * validation
     * @param {String} dateString - date string
     * @param {String} formatString - format string
     * @returns {Boolean} whether the date string is a valid date
     */
    date.isValid = function (dateString, formatString) {
        return !!date.parse(dateString, formatString);
    };

    /**
     * adding years
     * @param {Object} dateObj - date object
     * @param {Number} years - adding year
     * @returns {Object} the date after adding the value
     */
    date.addYears = function (dateObj, years) {
        return date.addMonths(dateObj, years * 12);
    };

    /**
     * adding months
     * @param {Object} dateObj - date object
     * @param {Number} months - adding month
     * @returns {Object} the date after adding the value
     */
    date.addMonths = function (dateObj, months) {
        var d = new Date(dateObj.getTime());

        d.setMonth(d.getMonth() + months);
        return d;
    };

    /**
     * adding days
     * @param {Object} dateObj - date object
     * @param {Number} days - adding day
     * @returns {Object} the date after adding the value
     */
    date.addDays = function (dateObj, days) {
        var d = new Date(dateObj.getTime());

        d.setDate(d.getDate() + days);
        return d;
    };

    /**
     * adding hours
     * @param {Object} dateObj - date object
     * @param {Number} hours - adding hour
     * @returns {Object} the date after adding the value
     */
    date.addHours = function (dateObj, hours) {
        return date.addMilliseconds(dateObj, hours * 3600000);
    };

    /**
     * adding minutes
     * @param {Object} dateObj - date object
     * @param {Number} minutes - adding minute
     * @returns {Object} the date after adding the value
     */
    date.addMinutes = function (dateObj, minutes) {
        return date.addMilliseconds(dateObj, minutes * 60000);
    };

    /**
     * adding seconds
     * @param {Object} dateObj - date object
     * @param {Number} seconds - adding second
     * @returns {Object} the date after adding the value
     */
    date.addSeconds = function (dateObj, seconds) {
        return date.addMilliseconds(dateObj, seconds * 1000);
    };

    /**
     * adding milliseconds
     * @param {Object} dateObj - date object
     * @param {Number} milliseconds - adding millisecond
     * @returns {Object} the date after adding the value
     */
    date.addMilliseconds = function (dateObj, milliseconds) {
        return new Date(dateObj.getTime() + milliseconds);
    };

    /**
     * subtracting
     * @param {Object} date1 - date object
     * @param {Object} date2 - date object
     * @returns {Object} the result object after subtracting the date
     */
    date.subtract = function (date1, date2) {
        var delta = date1.getTime() - date2.getTime();

        return {
            toMilliseconds: function () {
                return delta;
            },
            toSeconds: function () {
                return delta / 1000 | 0;
            },
            toMinutes: function () {
                return delta / 60000 | 0;
            },
            toHours: function () {
                return delta / 3600000 | 0;
            },
            toDays: function () {
                return delta / 86400000 | 0;
            }
        };
    };

    /**
     * leap year
     * @param {Object} dateObj - date object
     * @returns {Boolean} whether the year is a leap year
     */
    date.isLeapYear = function (dateObj) {
        var y = dateObj.getFullYear();
        return (!(y % 4) && !!(y % 100)) || !(y % 400);
    };

    /**
     * comparison of dates
     * @param {Object} date1 - target for comparison
     * @param {Object} date2 - target for comparison
     * @returns {Boolean} whether the dates are the same day (times are ignored)
     */
    date.isSameDay = function (date1, date2) {
        return date.format(date1, 'YYYYMMDD') === date.format(date2, 'YYYYMMDD');
    };

    /**
     * setting a locale
     * @param {String} [code] - language code
     * @returns {String} current language code
     */
    date.locale = function (code) {
        if (code) {
            if (!locales[code] && "function" === 'function' && global) {
                __webpack_require__("./node_modules/date-and-time/locale sync recursive ^\\.\\/.*$")("./" + code);
            }
            lang = code;
        }
        return lang;
    };

    /**
     * getting a definition of locale
     * @param {String} [code] - language code
     * @returns {Object} definition of locale
     */
    date.getLocales = function (code) {
        return locales[code || lang];
    };

    /**
     * adding a new definition of locale
     * @param {String} code - language code
     * @param {Object} options - definition of locale
     * @returns {void}
     */
    date.setLocales = function (code, options) {
        var copy = function (src, proto) {
                var Locale = function () {}, dst, key;

                Locale.prototype = proto;
                dst = new Locale();
                for (key in src) {
                    if (src.hasOwnProperty(key)) {
                        dst[key] = src[key];
                    }
                }
                return dst;
            },
            base = locales[code] || locales.en,
            locale = copy(options, base);

        if (options.formatter) {
            locale.formatter = copy(options.formatter, base.formatter);
        }
        if (options.parser) {
            locale.parser = copy(options.parser, base.parser);
        }
        locales[code] = locale;
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = date;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return date;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale sync recursive ^\\.\\/.*$":
/*!*********************************************************!*\
  !*** ./node_modules/date-and-time/locale sync ^\.\/.*$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar": "./node_modules/date-and-time/locale/ar.js",
	"./ar.js": "./node_modules/date-and-time/locale/ar.js",
	"./az": "./node_modules/date-and-time/locale/az.js",
	"./az.js": "./node_modules/date-and-time/locale/az.js",
	"./bn": "./node_modules/date-and-time/locale/bn.js",
	"./bn.js": "./node_modules/date-and-time/locale/bn.js",
	"./cs": "./node_modules/date-and-time/locale/cs.js",
	"./cs.js": "./node_modules/date-and-time/locale/cs.js",
	"./de": "./node_modules/date-and-time/locale/de.js",
	"./de.js": "./node_modules/date-and-time/locale/de.js",
	"./el": "./node_modules/date-and-time/locale/el.js",
	"./el.js": "./node_modules/date-and-time/locale/el.js",
	"./es": "./node_modules/date-and-time/locale/es.js",
	"./es.js": "./node_modules/date-and-time/locale/es.js",
	"./fa": "./node_modules/date-and-time/locale/fa.js",
	"./fa.js": "./node_modules/date-and-time/locale/fa.js",
	"./fr": "./node_modules/date-and-time/locale/fr.js",
	"./fr.js": "./node_modules/date-and-time/locale/fr.js",
	"./hi": "./node_modules/date-and-time/locale/hi.js",
	"./hi.js": "./node_modules/date-and-time/locale/hi.js",
	"./hu": "./node_modules/date-and-time/locale/hu.js",
	"./hu.js": "./node_modules/date-and-time/locale/hu.js",
	"./id": "./node_modules/date-and-time/locale/id.js",
	"./id.js": "./node_modules/date-and-time/locale/id.js",
	"./it": "./node_modules/date-and-time/locale/it.js",
	"./it.js": "./node_modules/date-and-time/locale/it.js",
	"./ja": "./node_modules/date-and-time/locale/ja.js",
	"./ja.js": "./node_modules/date-and-time/locale/ja.js",
	"./jv": "./node_modules/date-and-time/locale/jv.js",
	"./jv.js": "./node_modules/date-and-time/locale/jv.js",
	"./ko": "./node_modules/date-and-time/locale/ko.js",
	"./ko.js": "./node_modules/date-and-time/locale/ko.js",
	"./my": "./node_modules/date-and-time/locale/my.js",
	"./my.js": "./node_modules/date-and-time/locale/my.js",
	"./nl": "./node_modules/date-and-time/locale/nl.js",
	"./nl.js": "./node_modules/date-and-time/locale/nl.js",
	"./pa-in": "./node_modules/date-and-time/locale/pa-in.js",
	"./pa-in.js": "./node_modules/date-and-time/locale/pa-in.js",
	"./pl": "./node_modules/date-and-time/locale/pl.js",
	"./pl.js": "./node_modules/date-and-time/locale/pl.js",
	"./pt": "./node_modules/date-and-time/locale/pt.js",
	"./pt.js": "./node_modules/date-and-time/locale/pt.js",
	"./ro": "./node_modules/date-and-time/locale/ro.js",
	"./ro.js": "./node_modules/date-and-time/locale/ro.js",
	"./ru": "./node_modules/date-and-time/locale/ru.js",
	"./ru.js": "./node_modules/date-and-time/locale/ru.js",
	"./sr": "./node_modules/date-and-time/locale/sr.js",
	"./sr.js": "./node_modules/date-and-time/locale/sr.js",
	"./th": "./node_modules/date-and-time/locale/th.js",
	"./th.js": "./node_modules/date-and-time/locale/th.js",
	"./tr": "./node_modules/date-and-time/locale/tr.js",
	"./tr.js": "./node_modules/date-and-time/locale/tr.js",
	"./uk": "./node_modules/date-and-time/locale/uk.js",
	"./uk.js": "./node_modules/date-and-time/locale/uk.js",
	"./uz": "./node_modules/date-and-time/locale/uz.js",
	"./uz.js": "./node_modules/date-and-time/locale/uz.js",
	"./vi": "./node_modules/date-and-time/locale/vi.js",
	"./vi.js": "./node_modules/date-and-time/locale/vi.js",
	"./zh-cn": "./node_modules/date-and-time/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/date-and-time/locale/zh-cn.js",
	"./zh-tw": "./node_modules/date-and-time/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/date-and-time/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/date-and-time/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/date-and-time/locale/ar.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/ar.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Arabic (ar)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        var num = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
            map = { '٠': 0, '١': 1, '٢': 2, '٣': 3, '٤': 4, '٥': 5, '٦': 6, '٧': 7, '٨': 8, '٩': 9 };

        date.setLocales('ar', {
            MMMM: ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر'],
            MMM: ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر'],
            dddd: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
            ddd: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
            dd: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
            A: ['ص', 'م'],
            formatter: {
                post: function (str) {
                    return str.replace(/\d/g, function (i) {
                        return num[i | 0];
                    });
                }
            },
            parser: {
                pre: function (str) {
                    return str.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (i) {
                        return '' + map[i];
                    });
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/az.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/az.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Azerbaijani (az)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('az', {
            MMMM: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'],
            MMM: ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avq', 'sen', 'okt', 'noy', 'dek'],
            dddd: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə'],
            ddd: ['Baz', 'BzE', 'ÇAx', 'Çər', 'CAx', 'Cüm', 'Şən'],
            dd: ['Bz', 'BE', 'ÇA', 'Çə', 'CA', 'Cü', 'Şə'],
            A: ['gecə', 'səhər', 'gündüz', 'axşam'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // gecə
                    } else if (h < 12) {
                        return this.A[1];   // səhər
                    } else if (h < 17) {
                        return this.A[2];   // gündüz
                    }
                    return this.A[3];       // axşam
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 2) {
                        return h;               // gecə, səhər
                    }
                    return h > 11 ? h : h + 12; // gündüz, axşam
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/bn.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/bn.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Bengali (bn)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('bn', {
            MMMM: ['জানুয়ারী', 'ফেবুয়ারী', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
            MMM: ['জানু', 'ফেব', 'মার্চ', 'এপর', 'মে', 'জুন', 'জুল', 'অগ', 'সেপ্ট', 'অক্টো', 'নভ', 'ডিসেম্'],
            dddd: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পত্তিবার', 'শুক্রবার', 'শনিবার'],
            ddd: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পত্তি', 'শুক্র', 'শনি'],
            dd: ['রব', 'সম', 'মঙ্গ', 'বু', 'ব্রিহ', 'শু', 'শনি'],
            A: ['রাত', 'সকাল', 'দুপুর', 'বিকাল'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // রাত
                    } else if (h < 10) {
                        return this.A[1];   // সকাল
                    } else if (h < 17) {
                        return this.A[2];   // দুপুর
                    } else if (h < 20) {
                        return this.A[3];   // বিকাল
                    }
                    return this.A[0];       // রাত
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h < 4 || h > 11 ? h : h + 12;    // রাত
                    } else if (a < 2) {
                        return h;                               // সকাল
                    } else if (a < 3) {
                        return h > 9 ? h : h + 12;              // দুপুর
                    }
                    return h + 12;                              // বিকাল
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/cs.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/cs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Czech (cs)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('cs', {
            MMMM: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
            MMM: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
            dddd: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
            ddd: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
            dd: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/de.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/de.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve German (de)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('de', {
            MMMM: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            MMM: ['Jan.', 'Febr.', 'Mrz.', 'Apr.', 'Mai', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'],
            dddd: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            ddd: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
            dd: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            A: ['Uhr nachmittags', 'Uhr morgens']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/el.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/el.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Greek (el)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('el', {
            MMMM: {
                nominative: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
                genitive: ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']
            },
            MMM: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαϊ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
            dddd: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
            ddd: ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'],
            dd: ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα'],
            A: ['πμ', 'μμ'],
            formatter: {
                MMMM: function (d, formatString) {
                    return this.MMMM[/D.*MMMM/.test(formatString) ? 'genitive' : 'nominative'][d.getMonth()];
                },
                hh: function (d) {
                    return ('0' + d.getHours() % 12).slice(-2);
                },
                h: function (d) {
                    return d.getHours() % 12;
                }
            },
            parser: {
                MMMM: function (str, formatString) {
                    return this.parser.find(this.MMMM[/D.*MMMM/.test(formatString) ? 'genitive' : 'nominative'], str);
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/es.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/es.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Spanish (es)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('es', {
            MMMM: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
            MMM: ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'],
            dddd: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            ddd: ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],
            dd: ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sá'],
            A: ['de la mañana', 'de la tarde', 'de la noche'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 12) {
                        return this.A[0];   // de la mañana
                    } else if (h < 19) {
                        return this.A[1];   // de la tarde
                    }
                    return this.A[2];       // de la noche
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h;   // de la mañana
                    }
                    return h > 11 ? h : h + 12; // de la tarde, de la noche
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/fa.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/fa.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Persian (fa)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        var num = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
            map = { '۰': 0, '۱': 1, '۲': 2, '۳': 3, '۴': 4, '۵': 5, '۶': 6, '۷': 7, '۸': 8, '۹': 9 };

        date.setLocales('fa', {
            MMMM: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
            MMM: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
            dddd: ['یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
            ddd: ['یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
            dd: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
            A: ['قبل از ظهر', 'بعد از ظهر'],
            formatter: {
                post: function (str) {
                    return str.replace(/\d/g, function (i) {
                        return num[i | 0];
                    });
                }
            },
            parser: {
                pre: function (str) {
                    return str.replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (i) {
                        return '' + map[i];
                    });
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/fr.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/fr.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve French (fr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('fr', {
            MMMM: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
            MMM: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
            dddd: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
            ddd: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
            dd: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
            A: ['matin', 'l\'après-midi']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/hi.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/hi.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Hindi (hi)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('hi', {
            MMMM: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवम्बर', 'दिसम्बर'],
            MMM: ['जन.', 'फ़र.', 'मार्च', 'अप्रै.', 'मई', 'जून', 'जुल.', 'अग.', 'सित.', 'अक्टू.', 'नव.', 'दिस.'],
            dddd: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरूवार', 'शुक्रवार', 'शनिवार'],
            ddd: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरू', 'शुक्र', 'शनि'],
            dd: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
            A: ['रात', 'सुबह', 'दोपहर', 'शाम'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // रात
                    } else if (h < 10) {
                        return this.A[1];   // सुबह
                    } else if (h < 17) {
                        return this.A[2];   // दोपहर
                    } else if (h < 20) {
                        return this.A[3];   // शाम
                    }
                    return this.A[0];       // रात
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h < 4 || h > 11 ? h : h + 12;    // रात
                    } else if (a < 2) {
                        return h;                               // सुबह
                    } else if (a < 3) {
                        return h > 9 ? h : h + 12;              // दोपहर
                    }
                    return h + 12;                              // शाम
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/hu.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/hu.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Hungarian (hu)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('hu', {
            MMMM: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
            MMM: ['jan', 'feb', 'márc', 'ápr', 'máj', 'jún', 'júl', 'aug', 'szept', 'okt', 'nov', 'dec'],
            dddd: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
            ddd: ['vas', 'hét', 'kedd', 'sze', 'csüt', 'pén', 'szo'],
            dd: ['v', 'h', 'k', 'sze', 'cs', 'p', 'szo'],
            A: ['de', 'du']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/id.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/id.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Indonesian (id)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('id', {
            MMMM: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
            MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
            dddd: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
            ddd: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
            dd: ['Mg', 'Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sb'],
            A: ['pagi', 'siang', 'sore', 'malam'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 11) {
                        return this.A[0];   // pagi
                    } else if (h < 15) {
                        return this.A[1];   // siang
                    } else if (h < 19) {
                        return this.A[2];   // sore
                    }
                    return this.A[3];       // malam
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h;                       // pagi
                    } else if (a < 2) {
                        return h >= 11 ? h : h + 12;    // siang
                    }
                    return h + 12;                      // sore, malam
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/it.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/it.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Italian (it)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('it', {
            MMMM: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
            MMM: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
            dddd: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
            ddd: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
            dd: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
            A: ['di mattina', 'di pomerrigio']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/ja.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/ja.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Japanese (ja)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('ja', {
            MMMM: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            MMM: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            dddd: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
            ddd: ['日', '月', '火', '水', '木', '金', '土'],
            dd: ['日', '月', '火', '水', '木', '金', '土'],
            A: ['午前', '午後'],
            formatter: {
                hh: function (d) {
                    return ('0' + d.getHours() % 12).slice(-2);
                },
                h: function (d) {
                    return d.getHours() % 12;
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/jv.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/jv.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Javanese (jv)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('jv', {
            MMMM: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'],
            MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nop', 'Des'],
            dddd: ['Minggu', 'Senen', 'Seloso', 'Rebu', 'Kemis', 'Jemuwah', 'Septu'],
            ddd: ['Min', 'Sen', 'Sel', 'Reb', 'Kem', 'Jem', 'Sep'],
            dd: ['Mg', 'Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sp'],
            A: ['enjing', 'siyang', 'sonten', 'ndalu'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 11) {
                        return this.A[0];   // enjing
                    } else if (h < 15) {
                        return this.A[1];   // siyang
                    } else if (h < 19) {
                        return this.A[2];   // sonten
                    }
                    return this.A[3];       // ndalu
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h;                       // enjing
                    } else if (a < 2) {
                        return h >= 11 ? h : h + 12;    // siyang
                    }
                    return h + 12;                      // sonten, ndalu
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/ko.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/ko.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Korean (ko)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('ko', {
            MMMM: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            MMM: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            dddd: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
            ddd: ['일', '월', '화', '수', '목', '금', '토'],
            dd: ['일', '월', '화', '수', '목', '금', '토'],
            A: ['오전', '오후']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/my.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/my.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Burmese (my)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        var num = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'],
            map = { '၀': 0, '၁': 1, '၂': 2, '၃': 3, '၄': 4, '၅': 5, '၆': 6, '၇': 7, '၈': 8, '၉': 9 };

        date.setLocales('my', {
            MMMM: ['ဇန်နဝါရီ', 'ဖေဖော်ဝါရီ', 'မတ်', 'ဧပြီ', 'မေ', 'ဇွန်', 'ဇူလိုင်', 'သြဂုတ်', 'စက်တင်ဘာ', 'အောက်တိုဘာ', 'နိုဝင်ဘာ', 'ဒီဇင်ဘာ'],
            MMM: ['ဇန်', 'ဖေ', 'မတ်', 'ပြီ', 'မေ', 'ဇွန်', 'လိုင်', 'သြ', 'စက်', 'အောက်', 'နို', 'ဒီ'],
            dddd: ['တနင်္ဂနွေ', 'တနင်္လာ', 'အင်္ဂါ', 'ဗုဒ္ဓဟူး', 'ကြာသပတေး', 'သောကြာ', 'စနေ'],
            ddd: ['နွေ', 'လာ', 'ဂါ', 'ဟူး', 'ကြာ', 'သော', 'နေ'],
            dd: ['နွေ', 'လာ', 'ဂါ', 'ဟူး', 'ကြာ', 'သော', 'နေ'],
            formatter: {
                post: function (str) {
                    return str.replace(/\d/g, function (i) {
                        return num[i | 0];
                    });
                }
            },
            parser: {
                pre: function (str) {
                    return str.replace(/[၀၁၂၃၄၅၆၇၈၉]/g, function (i) {
                        return '' + map[i];
                    });
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/nl.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/nl.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Dutch (nl)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('nl', {
            MMMM: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
            MMM: {
                withdots: ['jan.', 'feb.', 'mrt.', 'apr.', 'mei', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
                withoutdots: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
            },
            dddd: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
            ddd: ['zo.', 'ma.', 'di.', 'wo.', 'do.', 'vr.', 'za.'],
            dd: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
            formatter: {
                MMM: function (d, formatString) {
                    return this.MMM[/-MMM-/.test(formatString) ? 'withoutdots' : 'withdots'][d.getMonth()];
                }
            },
            parser: {
                MMM: function (str, formatString) {
                    return this.parser.find(this.MMM[/-MMM-/.test(formatString) ? 'withoutdots' : 'withdots'], str);
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/pa-in.js":
/*!****************************************************!*\
  !*** ./node_modules/date-and-time/locale/pa-in.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Punjabi (pa-in)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        var num = ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'],
            map = { '੦': 0, '੧': 1, '੨': 2, '੩': 3, '੪': 4, '੫': 5, '੬': 6, '੭': 7, '੮': 8, '੯': 9 };

        date.setLocales('pa-in', {
            MMMM: ['ਜਨਵਰੀ', 'ਫ਼ਰਵਰੀ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈਲ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾਈ', 'ਅਗਸਤ', 'ਸਤੰਬਰ', 'ਅਕਤੂਬਰ', 'ਨਵੰਬਰ', 'ਦਸੰਬਰ'],
            MMM: ['ਜਨਵਰੀ', 'ਫ਼ਰਵਰੀ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈਲ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾਈ', 'ਅਗਸਤ', 'ਸਤੰਬਰ', 'ਅਕਤੂਬਰ', 'ਨਵੰਬਰ', 'ਦਸੰਬਰ'],
            dddd: ['ਐਤਵਾਰ', 'ਸੋਮਵਾਰ', 'ਮੰਗਲਵਾਰ', 'ਬੁਧਵਾਰ', 'ਵੀਰਵਾਰ', 'ਸ਼ੁੱਕਰਵਾਰ', 'ਸ਼ਨੀਚਰਵਾਰ'],
            ddd: ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁਧ', 'ਵੀਰ', 'ਸ਼ੁਕਰ', 'ਸ਼ਨੀ'],
            dd: ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁਧ', 'ਵੀਰ', 'ਸ਼ੁਕਰ', 'ਸ਼ਨੀ'],
            A: ['ਰਾਤ', 'ਸਵੇਰ', 'ਦੁਪਹਿਰ', 'ਸ਼ਾਮ'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // ਰਾਤ
                    } else if (h < 10) {
                        return this.A[1];   // ਸਵੇਰ
                    } else if (h < 17) {
                        return this.A[2];   // ਦੁਪਹਿਰ
                    } else if (h < 20) {
                        return this.A[3];   // ਸ਼ਾਮ
                    }
                    return this.A[0];       // ਰਾਤ
                },
                post: function (str) {
                    return str.replace(/\d/g, function (i) {
                        return num[i | 0];
                    });
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h < 4 || h > 11 ? h : h + 12;    // ਰਾਤ
                    } else if (a < 2) {
                        return h;                               // ਸਵੇਰ
                    } else if (a < 3) {
                        return h >= 10 ? h : h + 12;            // ਦੁਪਹਿਰ
                    }
                    return h + 12;                              // ਸ਼ਾਮ
                },
                pre: function (str) {
                    return str.replace(/[੦੧੨੩੪੫੬੭੮੯]/g, function (i) {
                        return '' + map[i];
                    });
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/pl.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/pl.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Polish (pl)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('pl', {
            MMMM: {
                nominative: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
                subjective: ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia']
            },
            MMM: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
            dddd: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
            ddd: ['nie', 'pon', 'wt', 'śr', 'czw', 'pt', 'sb'],
            dd: ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'],
            formatter: {
                MMMM: function (d, formatString) {
                    return this.MMMM[/D MMMM/.test(formatString) ? 'subjective' : 'nominative'][d.getMonth()];
                }
            },
            parser: {
                MMMM: function (str, formatString) {
                    return this.parser.find(this.MMMM[/D MMMM/.test(formatString) ? 'subjective' : 'nominative'], str);
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/pt.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/pt.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Portuguese (pt)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('pt', {
            MMMM: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            MMM: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            dddd: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
            ddd: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            dd: ['Dom', '2ª', '3ª', '4ª', '5ª', '6ª', 'Sáb'],
            A: ['da madrugada', 'da manhã', 'da tarde', 'da noite'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 5) {
                        return this.A[0];   // da madrugada
                    } else if (h < 12) {
                        return this.A[1];   // da manhã
                    } else if (h < 19) {
                        return this.A[2];   // da tarde
                    }
                    return this.A[3];       // da noite
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 2) {
                        return h;   // da madrugada, da manhã
                    }
                    return h > 11 ? h : h + 12; // da tarde, da noite
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/ro.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/ro.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Romanian (ro)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('ro', {
            MMMM: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
            MMM: ['ian.', 'febr.', 'mart.', 'apr.', 'mai', 'iun.', 'iul.', 'aug.', 'sept.', 'oct.', 'nov.', 'dec.'],
            dddd: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
            ddd: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
            dd: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/ru.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/ru.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Russian (ru)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('ru', {
            MMMM: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
            MMM: ['янв', 'фев', 'мар', 'апр', 'мая', 'июня', 'июля', 'авг', 'сен', 'окт', 'ноя', 'дек'],
            dddd: ['Воскресенье', 'Понедельник', 'Вторник', 'Среду', 'Четверг', 'Пятницу', 'Субботу'],
            ddd: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            dd: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            A: ['ночи', 'утра', 'дня', 'вечера'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // ночи
                    } else if (h < 12) {
                        return this.A[1];   // утра
                    } else if (h < 17) {
                        return this.A[2];   // дня
                    }
                    return this.A[3];       // вечера
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 2) {
                        return h;   // ночи, утра
                    }
                    return h > 11 ? h : h + 12; // дня, вечера
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/sr.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/sr.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Serbian (sr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('sr', {
            MMMM: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
            MMM: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
            dddd: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
            ddd: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],
            dd: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/th.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/th.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Thai (th)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('th', {
            MMMM: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
            MMM: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
            dddd: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
            ddd: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
            dd: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
            A: ['ก่อนเที่ยง', 'หลังเที่ยง']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/tr.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/tr.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Turkish (tr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('tr', {
            MMMM: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
            MMM: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
            dddd: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
            ddd: ['Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts'],
            dd: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/uk.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/uk.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Ukrainian (uk)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('uk', {
            MMMM: ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'],
            MMM: ['січ', 'лют', 'бер', 'квіт', 'трав', 'черв', 'лип', 'серп', 'вер', 'жовт', 'лист', 'груд'],
            dddd: {
                nominative: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'],
                accusative: ['неділю', 'понеділок', 'вівторок', 'середу', 'четвер', 'п’ятницю', 'суботу'],
                genitive: ['неділі', 'понеділка', 'вівторка', 'середи', 'четверга', 'п’ятниці', 'суботи']
            },
            ddd: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
            dd: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
            A: ['ночі', 'ранку', 'дня', 'вечора'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // ночі
                    } else if (h < 12) {
                        return this.A[1];   // ранку
                    } else if (h < 17) {
                        return this.A[2];   // дня
                    }
                    return this.A[3];       // вечора
                },
                dddd: function (d, formatString) {
                    var type = 'nominative';
                    if (/(\[[ВвУу]\]) ?dddd/.test(formatString)) {
                        type = 'accusative';
                    } else if (/\[?(?:минулої|наступної)? ?\] ?dddd/.test(formatString)) {
                        type = 'genitive';
                    }
                    return this.dddd[type][d.getDay()];
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 2) {
                        return h;   // ночі, ранку
                    }
                    return h > 11 ? h : h + 12; // дня, вечора
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/uz.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/uz.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Uzbek (uz)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('uz', {
            MMMM: ['январ', 'феврал', 'март', 'апрел', 'май', 'июн', 'июл', 'август', 'сентябр', 'октябр', 'ноябр', 'декабр'],
            MMM: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
            dddd: ['Якшанба', 'Душанба', 'Сешанба', 'Чоршанба', 'Пайшанба', 'Жума', 'Шанба'],
            ddd: ['Якш', 'Душ', 'Сеш', 'Чор', 'Пай', 'Жум', 'Шан'],
            dd: ['Як', 'Ду', 'Се', 'Чо', 'Па', 'Жу', 'Ша']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/vi.js":
/*!*************************************************!*\
  !*** ./node_modules/date-and-time/locale/vi.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Vietnamese (vi)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('vi', {
            MMMM: ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'],
            MMM: ['Th01', 'Th02', 'Th03', 'Th04', 'Th05', 'Th06', 'Th07', 'Th08', 'Th09', 'Th10', 'Th11', 'Th12'],
            dddd: ['chủ nhật', 'thứ hai', 'thứ ba', 'thứ tư', 'thứ năm', 'thứ sáu', 'thứ bảy'],
            ddd: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
            dd: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
            A: ['sa', 'ch']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/zh-cn.js":
/*!****************************************************!*\
  !*** ./node_modules/date-and-time/locale/zh-cn.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Chinese (zh-cn)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('zh-cn', {
            MMMM: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            MMM: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            dddd: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            ddd: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            dd: ['日', '一', '二', '三', '四', '五', '六'],
            A: ['凌晨', '早上', '上午', '中午', '下午', '晚上'],
            formatter: {
                A: function (d) {
                    var hm = d.getHours() * 100 + d.getMinutes();
                    if (hm < 600) {
                        return this.A[0];   // 凌晨
                    } else if (hm < 900) {
                        return this.A[1];   // 早上
                    } else if (hm < 1130) {
                        return this.A[2];   // 上午
                    } else if (hm < 1230) {
                        return this.A[3];   // 中午
                    } else if (hm < 1800) {
                        return this.A[4];   // 下午
                    }
                    return this.A[5];       // 晚上
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 4) {
                        return h;   // 凌晨, 早上, 上午, 中午
                    }
                    return h > 11 ? h : h + 12; // 下午, 晚上
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./node_modules/date-and-time/locale/zh-tw.js":
/*!****************************************************!*\
  !*** ./node_modules/date-and-time/locale/zh-tw.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Chinese (zh-tw)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('zh-tw', {
            MMMM: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            MMM: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            dddd: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            ddd: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            dd: ['日', '一', '二', '三', '四', '五', '六'],
            A: ['早上', '上午', '中午', '下午', '晚上'],
            formatter: {
                A: function (d) {
                    var hm = d.getHours() * 100 + d.getMinutes();
                    if (hm < 900) {
                        return this.A[0];   // 早上
                    } else if (hm < 1130) {
                        return this.A[1];   // 上午
                    } else if (hm < 1230) {
                        return this.A[2];   // 中午
                    } else if (hm < 1800) {
                        return this.A[3];   // 下午
                    }
                    return this.A[4];       // 晚上
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 3) {
                        return h;   // 早上, 上午, 中午
                    }
                    return h > 11 ? h : h + 12; // 下午, 晚上
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(/*! ../date-and-time */ "./node_modules/date-and-time/date-and-time.js"));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/date-and-time.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./src/Kcommon/Kbase.ts":
/*!******************************!*\
  !*** ./src/Kcommon/Kbase.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
* @Author   ： Kanon
* @Email    : wengxuan1992@hotmail.com
* @Description:
*	Some easy-deal tools
*
*/
Object.defineProperty(exports, "__esModule", { value: true });
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
    static rshift(array, offset) {
        let length = array.length;
        let rshifted = [];
        for (let i = 0; i < length; i++) {
            if (((i - offset) > length) || ((i - offset) < 0)) {
                rshifted.push(NaN);
            }
            else {
                rshifted.push(array[i - offset]);
            }
        }
        return rshifted;
    }
}
exports.Kbase = Kbase;


/***/ }),

/***/ "./src/Kcommon/Kcommon.ts":
/*!********************************!*\
  !*** ./src/Kcommon/Kcommon.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Kbase_1 = __webpack_require__(/*! ./Kbase */ "./src/Kcommon/Kbase.ts");
const Kdatetime_1 = __webpack_require__(/*! ./Kdatetime */ "./src/Kcommon/Kdatetime.ts");
class Kcommon {
}
Kcommon.Kbase = Kbase_1.Kbase;
Kcommon.Kdatetime = Kdatetime_1.Kdatetime;
exports.Kcommon = Kcommon;


/***/ }),

/***/ "./src/Kcommon/Kdatetime.ts":
/*!**********************************!*\
  !*** ./src/Kcommon/Kdatetime.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//good package, so i do NOT code a bug version 
const date = __webpack_require__(/*! ../../node_modules/date-and-time/date-and-time */ "./node_modules/date-and-time/date-and-time.js");
class Kdatetime {
    constructor() { }
    static __setStep(originDate, step, period) {
        switch (period) {
            case "msecond": return date.addMilliseconds(originDate, step);
            case "second": return date.addSeconds(originDate, step);
            case "minutes": return date.addMinutes(originDate, step);
            case "hour": return date.addHours(originDate, step);
            case "day": return date.addDays(originDate, step);
            case "month": return date.addMonths(originDate, step);
            case "year": return date.addYears(originDate, step);
            default: {
                throw new Error("Wrong period");
            }
        }
    }
    static generate_series(start, end, step, format = "YYYY-MM-DD", outString = true) {
        //input valid and trans to variable
        let stepSplited = step.toLowerCase().split(" ");
        if (stepSplited.length !== 2) {
            throw new Error("Wrong Step Express");
        }
        let stepNumber = 1;
        let stepPeriod = "";
        try {
            stepNumber = parseFloat(stepSplited[0]);
        }
        catch (error) {
            throw new Error("Step must be (number period) format ");
        }
        stepPeriod = stepSplited[1];
        let st = new Date();
        let ed = new Date();
        if (typeof (start) === "string") {
            if (!date.isValid(start, format)) {
                throw new Error("Wrong Start Format!");
            }
            st = date.parse(start, format);
        }
        if (typeof (end) === "string") {
            if (!date.isValid(end, format)) {
                throw new Error("Wrong Start Format!");
            }
            ed = date.parse(end, format);
        }
        let cursor = st;
        let series = [];
        while (cursor <= ed) {
            series.push(outString ? date.format(cursor, format) : cursor);
            cursor = this.__setStep(cursor, stepNumber, stepPeriod);
        }
        return series;
    }
}
Kdatetime.second = 1000;
Kdatetime.minute = 60 * 1000;
Kdatetime.hour = 60 * 60 * 1000;
Kdatetime.day = 24 * 60 * 60 * 1000;
exports.Kdatetime = Kdatetime;


/***/ }),

/***/ "./src/Kmath/Karray.ts":
/*!*****************************!*\
  !*** ./src/Kmath/Karray.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Kbase_1 = __webpack_require__(/*! ../Kcommon/Kbase */ "./src/Kcommon/Kbase.ts");
/*
* @Author   ： Kanon
* @Email    : wengxuan1992@hotmail.com
* @Description:
*	Some computation utils
*
*/
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
            array2 = Kbase_1.Kbase.repeat(array2, array1.length);
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
            throw new Error("must have the same length");
        }
        return add;
    }
    // sub
    // input    : [2,4,6,16,35,48],[1,2,3,4,5,6]
    // output   : [1,2,3,12,30,42]
    static sub(array1, array2) {
        if (!Array.isArray(array2)) {
            array2 = Kbase_1.Kbase.repeat(array2, array1.length);
        }
        let sub = [];
        if (array1.length === array2.length) {
            //add only when two arraies have the save length
            for (let i = 0; i < array1.length; i++) {
                if (array2[i] === undefined || isNaN(array2[i]) || array1[i] === undefined || isNaN(array1[i])) {
                    //illegal oprand check
                    sub.push(NaN);
                }
                else {
                    sub.push(array1[i] - array2[i]);
                }
            }
        }
        else {
            throw new Error("must have the same length");
        }
        return sub;
    }
    // multiply
    // input    : [2,4,6,16,35,48],[1,2,3,4,5,6]
    // output   : [2, 8, 18, 64, 175, 288]
    static mul(array1, array2) {
        if (!Array.isArray(array2)) {
            array2 = Kbase_1.Kbase.repeat(array2, array1.length);
        }
        let mul = [];
        if (array1.length === array2.length) {
            //div only when two arraies have the save length
            for (let i = 0; i < array1.length; i++) {
                if (array2[i] === undefined || isNaN(array2[i]) || array2[i] === 0 || array1[i] === undefined || isNaN(array1[i])) {
                    //illegal oprand check
                    mul.push(NaN);
                }
                else {
                    mul.push(array1[i] * array2[i]);
                }
            }
        }
        else {
            throw new Error("must have the same length");
        }
        return mul;
    }
    // divide
    // input    : [2,4,6,16,35,48],[1,2,3,4,5,6]
    // output   : [2,2,2,4,7,8]
    static div(array1, array2) {
        if (!Array.isArray(array2)) {
            array2 = Kbase_1.Kbase.repeat(array2, array1.length);
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
            throw new Error("must have the same length");
        }
        return div;
    }
    // return the position number in the array, which sort asc
    static select(array, position) {
        console.log(array, position);
        if (position < 0 || position > array.length) {
            throw new Error("Wrong position number of this array, Must in 1..length(array)");
        }
        //random divide index
        let divide = Math.floor(Math.random() * array.length);
        //find less than
        let less = array.filter(x => x < array[divide]);
        //console.log("[LESS]", less);
        //find equls
        let equal = array.filter(x => x == array[divide]);
        //console.log("[EQUAL]", equal);
        if (less.length > position) {
            return this.select(less, position);
        }
        else if (less.length + equal.length > position) {
            return array[divide];
        }
        else {
            let greater = array.filter(x => x > array[divide]);
            //console.log("[GREATER]", greater);
            return this.select(equal.concat(greater), position - less.length);
        }
    }
}
exports.Karray = Karray;
console.log(Karray.select([1, 10, 4, 5, 5, 5], 5));


/***/ }),

/***/ "./src/Kmath/Kmath.ts":
/*!****************************!*\
  !*** ./src/Kmath/Kmath.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Karray_1 = __webpack_require__(/*! ./Karray */ "./src/Kmath/Karray.ts");
class Kmath {
}
Kmath.Karray = Karray_1.Karray;
exports.Kmath = Kmath;


/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Kcommon_1 = __webpack_require__(/*! ./Kcommon/Kcommon */ "./src/Kcommon/Kcommon.ts");
const Kmath_1 = __webpack_require__(/*! ./Kmath/Kmath */ "./src/Kmath/Kmath.ts");
window.Ktools = {
    Kcommon: Kcommon_1.Kcommon,
    Kmath: Kmath_1.Kmath
};


/***/ })

/******/ });
//# sourceMappingURL=ktools.js.map