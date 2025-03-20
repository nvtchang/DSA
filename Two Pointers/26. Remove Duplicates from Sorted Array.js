/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0;
    for(let right = 1; right  < nums.length; right++) {
        if(nums[left] !== nums[right]) {
            nums[left+1] = nums[right];
            left++;
        }
    }
    return left + 1;
};
