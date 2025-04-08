function maxSubarraySum(arr, nums){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length < nums) {
        return null;
    }
    let maxSum = 0;

    for(let i = 0; i < nums; i++) {
      maxSum += arr[i];    
    }
    let tempSum = maxSum;

    for(let j = nums; j < arr.length; j++) {
        let deleteIndex = arr[j-nums];
        console.log("deleteIndex", deleteIndex)
        maxSum = tempSum - deleteIndex + arr[j];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}
maxSubarraySum([100,200,300,400], 2)