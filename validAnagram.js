function isAnagram(s,t){

    if(s.length !== t.length) return false;

    obj = {}

    for(let i = 0; i< s.length; i++){
        obj[s[i]] = obj[s[i]] + 1 || 1;
    }
    for(let i = 0; i < t.length; i++){
        if(!obj[t[i]]) return false;
        obj[t[i]]--;
    }

    return true;


}


function isAnagram2(s,t){
    return s.split('').sort().join('') === t.split('').sort().join('')
}


function isAnagram3(s, t) {
    if (s.length != t.length) return false;
        
    let table = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        table[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < t.length; i++) {
        table[t.charCodeAt(i) - 97]--;
        if (table[t.charCodeAt(i) - 97] < 0) return false;
    }
    
    return true;
}

console.log(isAnagram3(s = "anagram", t = "nagaram"));