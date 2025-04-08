function binarySearch(nums, k){
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((right + left) / 2);
        if(nums[mid] < k) {
            left = mid + 1; //if the value is to small, move left pointer up
        } else if(nums[mid] > k) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5],5))