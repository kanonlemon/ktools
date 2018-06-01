//good package, so i do NOT code a bug version 
const date = require("../../node_modules/date-and-time/date-and-time")

namespace Kcommon {

    export class Kdatetime {

        constructor() { }


        static second = 1000;
        static minute = 60 * 1000;
        static hour = 60 * 60 * 1000;
        static day = 24 * 60 * 60 * 1000;

        static __setStep(originDate: Date, step: number, period: string): Date {
            switch (period) {
                case "msecond": return date.addMilliseconds(originDate, step);
                case "second": return date.addSeconds(originDate, step);
                case "minutes": return date.addMinutes(originDate, step);
                case "hour": return date.addHours(originDate, step);
                case "day": return date.addDays(originDate, step);
                case "month": return date.addMonths(originDate, step);
                case "year": return date.addYears(originDate, step);
                default:{
                    throw new Error("Wrong period");
                }
            }
        }

        static generate_series(start: any, end: any, step: string, format: string = "YYYY-MM-DD", outString: boolean = true): Array<any> {

            //input valid and trans to variable
            let stepSplited: Array<string> = step.toLowerCase().split(" ");
            if (stepSplited.length !== 2) {
                throw new Error("Wrong Step Express");
            }
            let stepNumber: number = 1;
            let stepPeriod: string = "";

            try {
                stepNumber = parseFloat(stepSplited[0])
            }
            catch (error) {
                throw new Error("Step must be (number period) format ");
            }
            stepPeriod = stepSplited[1]


            let st: Date = new Date();
            let ed: Date = new Date();
            if (typeof (start) === "string") {
                if(!date.isValid(start, format)){ 
                    throw new Error("Wrong Start Format!");
                }
                st = date.parse(start, format);
            }
                              
            if (typeof (end) === "string") {
                if(!date.isValid(end, format)){ 
                    throw new Error("Wrong Start Format!");
                }
                ed = date.parse(end, format);
            }

            let cursor: Date = st;
            let series: Array<any> = [];
            while (cursor <= ed) {
                series.push(outString ? date.format(cursor, format) : cursor)
                cursor = this.__setStep(cursor, stepNumber, stepPeriod);
            }
            return series;
        }
    }
}

for(let day of Kcommon.Kdatetime.generate_series('20170101', '20180601', '1 day', 'YYYYMMDD')){
    console.log(day);
}

export { Kcommon }
