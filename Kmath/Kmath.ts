/*  
* @Author   ： Kanon  
* @Email    : wengxuan1992@hotmail.com  
* @Description:  
*	Some computation utils  
*  
*/ 
class Kmath{ 	
    constructor(){} 	
    // cumprod: 	
    // input	: [1,2,3,4,5,6] 	
    // output 	: [1,2,6,24,120,720] 	
    static cumprod(array:Array<number>):Array<number>{ 		
        let cumprod:Array<number> = []; 		
        array.reduce(function(accumulator:number, currentValue:number, currentIndex:number, array:Array<number>){  
            cumprod.push( accumulator * currentValue ); 			
            return accumulator * currentValue; 		
        },1 ); 		
        return cumprod; 	
    } 		
    
    // cumsum: 	
    // input	: [1,2,3,4,5,6] 	
    // output 	: [1,2,6,24,120,720] 	
    static cumsum(array:Array<number>):Array<number>{ 		
        let cumsum:Array<number> = []; 		
        array.reduce(function(accumulator:number, currentValue:number, currentIndex:number, array:Array<number>){ 			
            cumsum.push(accumulator + currentValue); 			
            return accumulator + currentValue; 		
        },0 ); 		
        return cumsum; 	
    } 		
    
    // percent_change: 	
    // input	: [1,2,3,4,5,6] 	
    // output	: [1,2,1.5,1.333, 1.25, 1.2] 	
    static percent_change(array:Array<number>):Array<number>{ 		
        let pct_change:Array<number> = []; 		
        array.reduce(function(accumulator:number, currentValue:number, currentIndex:number, array:Array<number>){ 			
            pct_change.push(currentValue / accumulator - 1); 			
            return currentValue; 		
        },1 ); 		
        return pct_change; 	
    } 
}
