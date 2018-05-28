/*  
* @Author   ： Kanon  
* @Email    : wengxuan1992@hotmail.com  
* @Description:  
*	Some computation utils  
*  
*/
import Ktools = require("../Ktools/Ktools")

export class Kmath {
    constructor() { }
    // cumprod: 	
    // input	: [1,2,3,4,5,6] 	
    // output 	: [1,2,6,24,120,720] 	
    static cumprod(array: Array<number>): Array<number> {
        let cumprod: Array<number> = [];
        array.reduce(function (accumulator: number, currentValue: number, currentIndex: number, array: Array<number>) {
            cumprod.push(accumulator * currentValue);
            return accumulator * currentValue;
        }, 1);
        return cumprod;
    }

    // cumsum: 	
    // input	: [1,2,3,4,5,6] 	
    // output 	: [1,2,6,24,120,720] 	
    static cumsum(array: Array<number>): Array<number> {
        let cumsum: Array<number> = [];
        array.reduce(function (accumulator: number, currentValue: number, currentIndex: number, array: Array<number>) {
            cumsum.push(accumulator + currentValue);
            return accumulator + currentValue;
        }, 0);
        return cumsum;
    }

    // change
    // input    : [1,2,3,4,5,6]
    // output   : [0,1,1,1,1,1]
    static change(array: Array<number>): Array<number> {
        let change: Array<number> = [];
        array.reduce(function (accumulator: number, currentValue: number, currentIndex: number, array: Array<number>) {
            if (currentIndex === 0) {
                accumulator = currentValue
            }
            change.push(currentValue - accumulator);
            return currentValue;
        }, array[0]);
        return change;
    }

    // percent_change: 	
    // input	: [1,2,3,4,5,6] 	
    // output	: [1,2,1.5,1.333, 1.25, 1.2] 	
    static percent_change(array: Array<number>): Array<number> {
        let pct_change: Array<number> = [];
        array.reduce(function (accumulator: number, currentValue: number, currentIndex: number, array: Array<number>) {
            pct_change.push(currentValue / accumulator - 1);
            return currentValue;
        }, array[0]);
        return pct_change;
    }

    // add
    // input    : [2,4,6,16,35,48],[1,2,3,4,5,6]
    // output   : [3,6,9,20,40,54]
    static add(array1: Array<number>, array2: any): Array<number> {
        if (!Array.isArray(array2)) {
            array2 = Ktools.Ktools.repeat(array2, array1.length)
        }


        let add: Array<number> = [];
        if (array1.length === array2.length) {
            //add only when two arraies have the save length
            for (let i = 0; i < array1.length; i++) {
                if (array2[i] === undefined || isNaN(array2[i]) || array1[i] === undefined || isNaN(array1[i])) {
                    //illegal oprand check
                    add.push(NaN);
                }
                else {
                    add.push(array1[i] + array2[i])
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
    static div(array1: Array<number>, array2: any): Array<number> {
        if (!Array.isArray(array2)) {
            array2 = Ktools.Ktools.repeat(array2, array1.length)
        }

        let div: Array<number> = [];
        if (array1.length === array2.length) {
            //div only when two arraies have the save length
            for (let i = 0; i < array1.length; i++) {
                if (array2[i] === undefined || isNaN(array2[i]) || array2[i] === 0 || array1[i] === undefined || isNaN(array1[i])) {
                    //illegal oprand check
                    div.push(NaN);
                }
                else {
                    div.push(array1[i] / array2[i])
                }
            }
        }
        else {
            throw new DOMException("must have the same length");
        }
        return div;
    }

}


console.log(Kmath.div([1,2,3,4], [1,2,3,4]))


