/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {

    const out=nums.map(a=>{
        if(a%2==0){
            return(2*a);
        }
        else{
            return(3*a);
        }
    });
    return out;
    
    }
    
    