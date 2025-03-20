/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let i = 0;
    let j = 1;
    let minValue = 0;
    let result = nums.map(x => x*x);
    while(i < j) {
        if(result[j] > minValue && result[i] > result[j]) {
            minValue = result[j];
	        result[0] = result[j];
        } else if (result[i] > result[j]) {
            let temp = result[j]			 
			result[j] = result[i]
			result[i] = temp
        } 
        i++;
        j++;
    }
    console.log(result)
};

sortedSquares([-4,-1,0,3,10])
