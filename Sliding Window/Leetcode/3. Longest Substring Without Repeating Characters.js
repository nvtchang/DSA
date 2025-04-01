/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //r++; thêm value thành key của object {'a': 1, 'b': 1}
    //nếu value của 1 sô bằng 2, l++
    let l = 0;
    let maxLen = 0;
    const charIndexMap = {};
    //right pointers
    for(let r = 0; r < s.length; r++) {
        let rightChar = s[r];
        charIndexMap[rightChar] = charIndexMap[rightChar] ? charIndexMap[rightChar] + 1 : 1; // check key rightChar đã có value chưa, nếu có +1, chưa có set = 1
        
        //check khi key có value > 1; window trừ phần tử đầu và cộng thêm 1 phần tử sau
        while(charIndexMap[rightChar] > 1) {
            //ex: 1; {a: 2}
            let leftChar = s[l];
            if(charIndexMap[leftChar] > 1) { // vị trí phần từ trùng là left và right {a: 2}
                charIndexMap[leftChar]--; // { a: 1}
            } else { // nếu vị trí trùng k phải với right => remove left ra khỏi table
                delete charIndexMap[leftChar];
            }
            l++;
        }
        maxLen = Math.max(maxLen, (r - l + 1));
    }
    return maxLen;
};

/*
    {
        'a': 2;

    }
 */