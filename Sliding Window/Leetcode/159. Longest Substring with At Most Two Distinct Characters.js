/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    //base code
    let l = 0;
    let maxLen = 0;
    const mapTable = {};

    //define and loop through pointers R
    for(let r = 0; r < s.length; r++) {
        //define and add char at R to object
        let rightChar = s[r];
        mapTable[rightChar] = mapTable[rightChar] ? mapTable[rightChar] + 1 : 1; //add value vao mapTable

        while(Object.keys(mapTable).length > 2) { //neu object co size lon hon 2 => k meet condition, contract window
            let leftChar = s[l]; //get leftChar
            if(mapTable[leftChar] > 1) { //if leftChar da co value trong mapTable
                mapTable[leftChar]--;
            } else {
                delete mapTable[leftChar];
            }
            l++;
        } 
        maxLen = Math.max(maxLen, (r - l + 1))
    }
    return maxLen
};