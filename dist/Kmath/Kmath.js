"use strict";
exports.__esModule = true;
/*
* @Author   ： Kanon
* @Email    : wengxuan1992@hotmail.com
* @Description:
*	Some computation utils
*
*/
var Kcommon = require("../Kcommon/Kcommon");
var Kmath = /** @class */ (function () {
    function Kmath() {
    }
    // cumprod: 	
    // input	: [1,2,3,4,5,6] 	
    // output 	: [1,2,6,24,120,720] 	
    Kmath.cumprod = function (array) {
        var cumprod = [];
        array.reduce(function (accumulator, currentValue, currentIndex, array) {
            cumprod.push(accumulator * currentValue);
            return accumulator * currentValue;
        }, 1);
        return cumprod;
    };
    // cumsum: 	
    // input	: [1,2,3,4,5,6] 	
    // output 	: [1,2,6,24,120,720] 	
    Kmath.cumsum = function (array) {
        var cumsum = [];
        array.reduce(function (accumulator, currentValue, currentIndex, array) {
            cumsum.push(accumulator + currentValue);
            return accumulator + currentValue;
        }, 0);
        return cumsum;
    };
    // change
    // input    : [1,2,3,4,5,6]
    // output   : [0,1,1,1,1,1]
    Kmath.change = function (array) {
        var change = [];
        array.reduce(function (accumulator, currentValue, currentIndex, array) {
            if (currentIndex === 0) {
                accumulator = currentValue;
            }
            change.push(currentValue - accumulator);
            return currentValue;
        }, array[0]);
        return change;
    };
    // percent_change: 	
    // input	: [1,2,3,4,5,6] 	
    // output	: [1,2,1.5,1.333, 1.25, 1.2] 	
    Kmath.percent_change = function (array) {
        var pct_change = [];
        array.reduce(function (accumulator, currentValue, currentIndex, array) {
            pct_change.push(currentValue / accumulator - 1);
            return currentValue;
        }, array[0]);
        return pct_change;
    };
    // add
    // input    : [2,4,6,16,35,48],[1,2,3,4,5,6]
    // output   : [3,6,9,20,40,54]
    Kmath.add = function (array1, array2) {
        if (!Array.isArray(array2)) {
            array2 = Kcommon.Ktools.repeat(array2, array1.length);
        }
        var add = [];
        if (array1.length === array2.length) {
            //add only when two arraies have the save length
            for (var i = 0; i < array1.length; i++) {
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
    };
    // divide
    // input    : [2,4,6,16,35,48],[1,2,3,4,5,6]
    // output   : [2,2,2,4,7,8]
    Kmath.div = function (array1, array2) {
        if (!Array.isArray(array2)) {
            array2 = Kcommon.Ktools.repeat(array2, array1.length);
        }
        var div = [];
        if (array1.length === array2.length) {
            //div only when two arraies have the save length
            for (var i = 0; i < array1.length; i++) {
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
    };
    return Kmath;
}());
exports.Kmath = Kmath;
console.log(Kmath.div([1, 2, 3, 4], [1, 2, 3, 4]));
//# sourceMappingURL=Kmath.js.map