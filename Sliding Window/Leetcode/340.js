const lengthOfLongestSubstringKDistinct = (s, k) => {
    //base code
    let l = 0;
    const mapTable = {};
    let maxLen = 0;
  
    //loop through solution
    for(let r = 0; r < s.length; r++) {
      let rightChar = s[r]; //lay duoc character tai vi tri r
      mapTable[rightChar] = mapTable[rightChar] ? mapTable[rightChar] + 1 : 1; //neu co value + 1, k set = 1
      
      //contract window if we don't meed the condition
  
      while(Object.keys(mapTable).length > k) {
          let leftChar = s[l];
          //neu leftChar trung voi rightChar => key co value lon hon 1
          if(mapTable[leftChar] > 1) {
              mapTable[leftChar]--;
          } else {
              delete mapTable[leftChar];
          }
          l++;
      }
      maxLen = Math.max(maxLen, (r - l + 1));
    }
    return maxLen;
  };
  