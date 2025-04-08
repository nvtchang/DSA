/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    //base code
    let l = 0;
    let maxLen = 0;
    let mapTable = {};
    let maxFreq = 0;

    //define loop through pointers r 
    for(let r = 0; r < s.length; r++) {
        let rightChar = s[r];
        mapTable[rightChar] = (mapTable[rightChar] || 0) + 1; //if key at rightChar co + 1; neu k gan = 1
        let numOfReplacement = 0;

        maxFreq = Math.max(maxFreq, mapTable[rightChar]) // gắn maxFreq vào value của rightChar 

        //window size is r - l + 1
        /* 
        Ex: r = 1, s[r] = "A"
        map = { A: 1 } 
        maxFreq = 1
        Window size: 1 (r - l + 1), Replacements needed: 1 - 1 = 0 →  within k => r tiếp tục tiến về phía trước
        maxLen = max(0, 1) = 1
        */
        while((r - l + 1) - maxFreq > k) { 
            let leftChar = s[l];
            mapTable[leftChar]--;
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1)
    }
    return maxLen
};