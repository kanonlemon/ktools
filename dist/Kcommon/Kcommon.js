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
//# sourceMappingURL=Kcommon.js.map