/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    //base case
    let n = nums.length;
    if(nums.length < 2) {
        return n;
    }
    //define pointers
    let l = 0;
    //define maxLen, counter
    let maxLen = 0, counter = 0;
    //find max consecutive ones
    for(let r = 0; r < nums.length; r++) {
        let rightChar = nums[r];
        if(rightChar === 0) {
            counter++;  
        }
        //contract window if we don't meet condition
        while(counter > 1) { //zero thu 2 xuat hien
            let leftChar = nums[l];
            if(leftChar === 0) {
                counter--;
            } 
            l++;
        } 
        //update maxLen
        maxLen = Math.max(maxLen, (r - l + 1));
    }
    return maxLen
};