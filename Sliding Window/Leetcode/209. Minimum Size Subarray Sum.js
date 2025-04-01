/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let min = Infinity;
    let left = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]; //add the element to sum
        while(sum >= target) {
            min = Math.min(min, i - left + 1) //increse the slide by one so the  length will decrese value
            sum -= nums[left] //reduce the value of left 
            left++; //increse the left
        }
    }
    return min !== Infinity ? min : 0;
};