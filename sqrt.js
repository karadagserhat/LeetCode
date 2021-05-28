function sqrt2(x)
{
    return Math.floor(Math.sqrt(x))

}

var sqrt3 = function(x) {
    var left = 1;
    var right = Math.floor(x / 2) + 1;
    var mid;
  
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
  
      if (mid * mid > x) {
        right = mid - 1;
      } else if (mid * mid < x) {
        left = mid + 1;
      } else {
        return mid;
      }
    }
  
    return right;
  };

console.log(sqrt3(8));