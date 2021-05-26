function isPalindrome(x){

    y = x.toString().split('').reverse().join('')
    console.log(y);
    return x == y
}

var isPalindrome2 = function(x) {
    if (x < 0) return false
  
    let rev = 0
    for(let i = x; i >= 1; i = Math.floor(i/10)){

        rev = rev*10 + i%10
    }
    return  x == rev
  };

function isPalindrome3(num){
    if(num < 0) return  false; 
    let reversed = 0,
    remainder=0,
    original = num;
    while(num != 0) {
         remainder = num % 10; // reversed integer is stored in variable
         reversed = reversed * 10 + remainder; //multiply reversed by 10 then add the remainder so it gets stored at next decimal place.
         num  /= 10;  //the last digit is removed from num after division by 10.
     }
     // palindrome if original and reversed are equal
     return original == reversed;
 }

console.log(isPalindrome2(4242424));    