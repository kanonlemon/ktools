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

        static rshift(array: Array<any>, offset:number): Array<any> {
            let length: number = array.length;
            let rshifted: Array<any> = []
            for(let i=0 ;i< length ; i++){
                if( ((i-offset) > length) || ((i-offset) < 0) ){
                    rshifted.push(NaN)
                }
                else{
                    rshifted.push( array[i - offset] )
                }
            }
            return rshifted;
        }

    }
}
//test code
console.log(Kcommon.Kbase.rshift([1, 2, 3, 4], 3))

export { Kcommon }








