/*  
* @Author   ： Kanon  
* @Email    : wengxuan1992@hotmail.com  
* @Description:  
*	Some easy-deal tools  
*  
*/
namespace Kcommon {
    
    export class Kbase{

        constructor() { }

        // repeat
        // input    :1 ,4
        // output   :[1, 1, 1, 1]
        static repeat(t: any, times: number): Array<any> {
            let repeat: Array<any> = []
            times = Math.floor(times)
            for (let i = 0; i < times; i++) {
                repeat.push(t)
            }
            return repeat;
        }

    }
}

export { Kcommon }



