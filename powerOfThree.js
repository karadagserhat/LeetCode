function powerOfThree(n){

    return n > 0 && ((3**33) % n ==0)
}


var isPowerOfThree = function(n) {
    return n.toString(3).split("").reduce((prev,curr)=>parseInt(prev)+parseInt(curr))==1;
}; 


function powerOfThree3(n){

    if (n < 1) {
        return false;
    }

    while (n % 3 == 0) {
        n /= 3;
    }

    return n == 1;
}