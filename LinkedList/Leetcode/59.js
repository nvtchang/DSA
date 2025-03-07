//1. key point: return khi 2 array có item giống nhau, return true or false
//2. input: array of string, output: boolean 
//3. hỏi array lớn cỡ nào, tầm bao nhiêu items. time complexity or space complexity quan trọng hơn
/*5. brute force
    loop 2 arrays => O(n^2)
*/
//6. O(n^2)

//brute force solution
function containCommon (arr1, arr2) {
    for(let i of arr1) {
        for(let j of arr2) {
            if( arr1[i] === arr2[j]) {
                return true
            }
            
            else {
                j++;
            }
        }
        i++;
    }
    return false;
}

//better solution
//loop through first array tao object 
/*
    {
        a: true
        b: true
    }
*/
//loop array2 to match with obj

function containCommon2(arr1, arr2) {
    let map = {};
    //create object 
    for(let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }

    // loop 2nd array
    for(let j = 0; j < arr2.length; j++) {
        if(map[arr2[j]]) 
        {
            return true;
        }
        return false;
    }
}