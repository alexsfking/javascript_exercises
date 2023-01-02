/*
 * Create the function factorial here
 */
function factorial(n){
    if(Number.isInteger(n)){
        if(n===1){
            return 1
        }
        else {
            return(n*factorial(n-1))
        }
    } 
    else {
        return;
    }
}

