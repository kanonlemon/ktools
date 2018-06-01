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
//# sourceMappingURL=Kbase.js.map