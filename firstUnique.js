function unique(s){

    for(let i = 0; i <s.length; i++){
        if(s.indexOf(s[i]) == s.lastIndexOf(s[i])) return i;
        return -1;
    }
}

var firstUniqChar2 = function(s) {
    let map = {}
    
    for (let char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }

    for(let x in s){
        if(map[s[x]] == 1) return x; 
    }
    /*
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i
    }
    */
        
    return -1
};

console.log(firstUniqChar2("leetcode"));