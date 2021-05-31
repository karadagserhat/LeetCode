var hammingWeight = function(n) {
    let sum = 0;
    
    while(n != 0) {
        sum += n & 1;
        n = n >>> 1;
    }
    
    return sum;
};

console.log(hammingWeight(n = 11111111111111111111111111111101))