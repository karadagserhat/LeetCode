var titleToNumber = function(s) {
    const charCodeBase = 'A'.charCodeAt(0) - 1;
    const n = s.length;
    let number = 0;

    for (let i = 0; i < n; i++)
        number += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, n-i-1);
    
    return number;
};

function titleToNumber2(s){
    colNum = 0;
    powerOf26 = 1
    for(let i = s.length -1; i >= 0; i--, powerOf26 *=26){
        colNum += powerOf26 * (s.charCodeAt(i) - 64)
    }
    return colNum
}

  console.log(titleToNumber2("AB"));