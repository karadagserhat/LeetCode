var climbStairs = function(n) {
    if(n === 0)  return 0
    if(n === 1)  return 1
    if(n === 2)  return 2
    
    var arr = [1,2]
    for(let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
    };
    

    var climbStairs2 = function(n) {
        let a = 1, b = 2, next;
        
        for(let i = 3; i <= n; i++) {
            next = a + b;
            a = b;
            b = next;
        }
        return n === 1 ? a : b;
    };

    console.log(climbStairs2(2));