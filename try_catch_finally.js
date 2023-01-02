/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        let arr = s.split('');
        arr=arr.reverse();
        arr=arr.join('');
        console.log(arr);
    }
    catch (err) {
        console.log(err.message);
        console.log(s);
    }
}

