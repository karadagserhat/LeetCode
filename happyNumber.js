var isHappy2 = function(n) {
    const seen = new Set();
    while (n !== 1) {
        n = squareOfSum(n);
        
        if(seen.has(n)){
            return false;
        }

        seen.add(n);
        
    }
    return n === 1;
};

function squareOfSum(n) {
    let sum = 0, tmp;
    while (n) {
        tmp = Math.floor(n % 10);
        sum += tmp * tmp;
        n /= 10;
    }
    return sum;
}

var isHappy = function(n) {
  
    
    let slow = n;
    let fast = squareOfSum(n);
    while(fast!=1 && slow!=fast){
        slow = squareOfSum(slow);
        fast = squareOfSum(squareOfSum(fast));
    }
    return fast == 1;
};


console.log(isHappy(18));