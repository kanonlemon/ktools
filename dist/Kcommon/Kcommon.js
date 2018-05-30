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
    Kcommon.Kbase = Kbase;
})(Kcommon || (Kcommon = {}));
exports.Kcommon = Kcommon;
//test code
console.log(Kcommon.Kbase.rshift([1, 2, 3, 4], -1));
//# sourceMappingURL=Kcommon.js.map