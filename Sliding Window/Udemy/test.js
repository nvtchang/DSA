function maxSubarraySum(arr, nums){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length < nums) {
        return null;
    }    
    let tempSum = 0;
    let maxSum = 0;

    for(let left = 0; left < nums; left++) {
        maxSum += arr[left]; 
    }
    tempSum = maxSum;
    for(let right = nums; right < sub.length; right++) { //đi từ right vị trí tiếp theo mà chưa tính tempSum
       tempSum = tempSum - arr[nums - right] + arr[right]; //tempsum - vị trí đầu + vị trí tiếp theo của array
       maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
    
}

console.log(maxSubarraySum([100,200,300,400], 2)) 