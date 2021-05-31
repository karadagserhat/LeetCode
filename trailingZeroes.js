var trailingZeroes = function(n) {

    let numberOfFives = 0;

    while(n >= 5){
        numberOfFives += Math.floor(n / 5);
        n = Math.floor(n / 5)
    }

    return numberOfFives;
    
    
};

function trailingZeroes2(n) {
    let count = 0;
    while (n != 0) {
        let tmp = Math.floor(n / 5);
        count += tmp;
        n = tmp;
    }
    return count;
}

console.log(trailingZeroes2(25));