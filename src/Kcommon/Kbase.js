"use strict";
/*
* @Author   ： Kanon
* @Email    : wengxuan1992@hotmail.com
* @Description:
*	Some easy-deal tools
*
*/
exports.__esModule = true;
var Kbase = /** @class */ (function () {
    function Kbase() {
    }
    // repeat
    // input    :1 ,4
    // output   :[1, 1, 1, 1]
    Kbase.repeat = function (t, times) {
        var repeat = [];
        times = Math.floor(times);
        for (var i = 0; i < times; i++) {
            repeat.push(t);
        }
        return repeat;
    };
    Kbase.rshift = function (array, offset) {
        var length = array.length;
        var rshifted = [];
        for (var i = 0; i < length; i++) {
            if (((i - offset) > length) || ((i - offset) < 0)) {
                rshifted.push(NaN);
            }
            else {
                rshifted.push(array[i - offset]);
            }
        }
        return rshifted;
    };
    return Kbase;
}());
exports.Kbase = Kbase;
