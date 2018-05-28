"use strict";
exports.__esModule = true;
/*
* @Author   ： Kanon
* @Email    : wengxuan1992@hotmail.com
* @Description:
*	Some easy tools
*
*/
var Ktools = /** @class */ (function () {
    function Ktools() {
    }
    // repeat
    // input    :1 ,4
    // output   :[1, 1, 1, 1]
    Ktools.repeat = function (t, times) {
        var repeat = [];
        times = Math.floor(times);
        for (var i = 0; i < times; i++) {
            repeat.push(t);
        }
        return repeat;
    };
    return Ktools;
}());
exports.Ktools = Ktools;
//# sourceMappingURL=Kcommon.js.map