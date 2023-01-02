/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels= new Set(['a','e','i','o','u']);
    for(let c of s){
        if(vowels.has(c)){
            console.log(c)
        }
    }
    for(let c of s){
        if(!vowels.has(c)){
            console.log(c)
        }
    }
    
}

