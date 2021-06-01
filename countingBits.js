function countBits(n){

    bits = []

    for(let i = 0; i <= n; i++){
        bits.push(i.toString(2).replace(/0/g,"").length);
    }
    return bits;
}

var countBits2 = function(num) {
    const res = [0];
    
    for (let i = 1; i <= num; i++) {
        const odd = i & 1;
        const half = i >> 1;
        res.push(res[half] + odd);
    }
    
    return res;
};

function countBits3(n){
    bits = [0]

    for(let i = 1; i <= n; i++){
        half = Math.floor(i / 2);
        bits[i] = bits[half];
        if(i % 2 == 1){
            bits[i]++
        }
    }
    return bits
  
}

console.log(countBits3(10));