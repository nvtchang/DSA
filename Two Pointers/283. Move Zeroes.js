//2 con trỏ, trái = 0, phải 1
//trái tìm số = 0, phải tìm số khác 0
//nếu phải = 0, phải đi tiếp
//nếu trái = 0 & phải != 0, swap 2 con trỏ
var moveZeroes = function(nums) {
    let left = 0;
    let right = 1;
    if(nums < 0) return;
    while(right < nums.length) {
        let temp
        if(nums[left] !== 0) {
            left++;
            right++;
        } else if(nums[right] === 0) {
            right++;
        }
        else {
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;     
        } 
    }
};

moveZeroes([1,0,1])
            
//l = 0, r = 4
//neu l = 0; 
