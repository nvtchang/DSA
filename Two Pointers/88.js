/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
};

nums1 = [1,2,3,0,0,0]

m = 3

nums2 = [2,5,6]

n = 3

    if(m = 1) {
        return nums1;
    }
    let result = [];
    let newLength = n + m;
    let i = 0;
    let j = 1;
    let index = 0;
    console.log("here")

    while(i < newLength) {
        if(nums2[index] >= nums1[j]) {
            console.log(nums2[index])
            
        }
        else {
            nums1[j-1] =  nums2[index];
            console.log(nums2[index])

        }
    }
