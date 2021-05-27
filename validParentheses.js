var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};

var isValid2 = function (s) {
    const stack = [];
    const complement = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
    for (let char of s) {
      if (!complement[char]) stack.push(char);
      else if (stack.pop() !== complement[char]) return false;
    }
    return stack.length === 0;
  };




function isValid3(str){

    if(!str) return '';


    obj = {')' : '(',
            ']' : '[',
            '}' : '{'}
    
    
    depo = []

    for(let i = 0; i < str.length; i++){
        if(!obj[str[i]]) depo.push(str[i])
        else if(depo.pop() !== obj[str[i]]) return false;
    }

    return depo.length === 0

}


console.log(isValid3('dsadas'));