"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//good package, so i do NOT code a bug version 
const date = require("../../node_modules/date-and-time/date-and-time");
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
//# sourceMappingURL=Kdatetime.js.map