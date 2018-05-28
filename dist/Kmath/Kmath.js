"use strict";
/*
* @Author   ： Kanon
* @Email    : wengxuan1992@hotmail.com
* @Description:
*	Some computation utils
*
*/
class Kmath {
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
}
//# sourceMappingURL=Kmath.js.map