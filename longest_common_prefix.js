var longestCommonPrefix = function(strs) {
    //'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    },);
};

var longestCommonPrefix2 = function(strs) {
    if (!strs.length) return '';
    let prefix = '';
    let maxPrefixLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < maxPrefixLength; i++) {
      let char = strs[0][i];
      if (strs.every(str => str[i] === char)) {
        prefix += char;
      } else {
        break;
      }
    };  
    return prefix;
  };

  var longestCommonPrefix3 = function(strs) {
    if(!strs.length) return '';
    
    for(let i = 0; i < strs[0].length; i++) {
        for(let s of strs) {
            if(s[i] !== strs[0][i]) return s.slice(0, i);
        }
    }
    return strs[0];
};

var longestCommonPrefix4 = function(arr) {
    if (!arr.length) return "";
    let prefix = "";
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j][i] !== arr[j+1][i]) return prefix;
        }
        prefix += arr[0][i];
    }
    return prefix;
    
};





console.log(longestCommonPrefix4(["flight","flow","flower"]));