function maxSubArraySum(arr, num) { //num = 3
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++) {
        maxSum += arr[i] // nums bang 3 => lay duoc subarray co 3 phan tu vi tri 0, 1 ,2 
    } 
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        const deletedIndex = arr[i - num];
        const nextIndex = arr[i];
        tempSum = tempSum - deletedIndex + nextIndex;
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

const result = maxSubArraySum([2,6,7,3,6,7,3,1,3,6,8], 3);
console.log(result)