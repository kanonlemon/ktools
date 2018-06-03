"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Kbase_1 = require("../Kcommon/Kbase");
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
//# sourceMappingURL=Karray.js.map