
function strStr2(haystack,needle) {
    let m = haystack.length, n = needle.length;
    for (let i = 0; i <= m - n; i++) {
        let j = 0;
        for (; j < n; j++) {
            if (haystack[i + j] != needle[j]) {
                break;
            }
        }
        if (j == n) {
            return i;
        }
    }
    return -1;
}

var strStr3 = function(haystack, needle) {
    const needleLength = needle.length;
    if(needleLength===0) return 0;
    for(let i=0;i<haystack.length;i++){
        if(haystack.substring(i,i+needleLength)===needle){
            return i;
        }
    }
    return -1;
};


/****************************************************************** */
var strStr = function(haystack, needle) {
    var m = haystack.length, n = needle.length;
    if(!n) return 0;
    var lps = kmpProcess(needle);
    for(var i = 0, j = 0; i < m;) {
        if(haystack[i] == needle[j]) {
            i++, j++;
        }
        if(j == n) return i - j;
        if(i < m && haystack[i] != needle[j]) {
            if(j) j = lps[j - 1];
            else i++;
        }
        
    }
    return -1;
};

var kmpProcess = function(needle) {
    var n = needle.length;
    var lps = new Array(n).fill(0);
    for (var i = 1, length = 0; i < n;) {
        if(needle[i] === needle[length]) {
            length++;
            lps[i] = length;
            i++;
        } else if (length) length = lps[length - 1];
        else {
            lps[i] = 0; 
            i++;
        }
    }
    console.log(lps);
    return lps;
}





/************************************************************* */


console.log(strStr(haystack = "abxabcabcaby", needle = "abcaby"));