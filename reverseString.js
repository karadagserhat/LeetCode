function reverseString(s){

    left = 0
    right = s.length -1

    while(left < right){
        tmp = s[right]
        s[right] = s[left]
        s[left] = tmp
        left++;
        right--;
    }
}


// OR   s.reverse();