const isPalindrome = function(s) {
    const sCleaned = s.toLowerCase().replace(/[^0-9a-z]/g, '')
    let p1 = 0;
    let p2 = sCleaned.length - 1;
    
    while (p1 < p2) {
      if (sCleaned[p1] !== sCleaned[p2]) return false;
      p1++;
      p2--;
    }
    
    return true;
  }

  s = "A man, a plan, a canal: _?)=(&/Panama"

  console.log(isPalindrome(s));