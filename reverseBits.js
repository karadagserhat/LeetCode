var reverseBits = function(n) {
    var result = 0;
    var count = 2;
  
    while (count--) {
      result *= 2;
      result += n & 1;
      n = n >> 1; // n /= 2
    }
    return result;
  };

  console.log(reverseBits(n = 11));