var countPrimes = function(n) {
    if (n == 0 || n == 1) return 0
    
    let count = 0
    for (let i = 2; i < n; i++) if(isPrime(i)) count++
    return count
};
function isPrime(n) {
    if (n == 2) return true
    for (let i = 2; i <= Math.sqrt(n); i++) 
        if (n % i == 0) return false
    
    return true
}

var countPrimes2 = function (n) {
    let isPrime = new Array(n).fill(true);
	
    isPrime[1] = false;
    for (let i = 2; i * i < n; i++) {
        if (!isPrime[i]) continue;
        for (let j = i * i; j < n; j += i) isPrime[j] = false;
    }
	
    let count = 0;
	
    for (let i = 1; i < n; i++) {
        if (isPrime[i]) count++;
    }
    return count;
};

console.log(countPrimes2(10));