/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let largest=nums[0];
    let second_largest=nums[0];
    for(let i of nums){
        if(i>largest){
            second_largest=largest;
            largest=i;
        }
        else if(i>second_largest){
            if(i<largest){
                second_largest=i;
            }
        }
    }
    return second_largest;
}

