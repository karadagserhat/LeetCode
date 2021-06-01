function fizzBuzz(n){

    result = []
    for(let i = 1 ; i <= n; i++){
        if(i%3 == 0 && i%5 == 0) result.push("FizzBuzz")
        else if(i % 3 == 0) result.push("Fizz")
        else if(i % 5 == 0) result.push("Buzz")
        else result.push(String(i))
    }
    return result
}

function fizzBuzz2(n){
    res = []
   
    for(let i = 1; i <= n; i++){
        let temp = i % 15 == 0 ? 'FIZZ_BUZZ' : (i % 3 == 0 ? 'FIZZ' : (i % 5 == 0 ?  'BUZZ' : String(i)));
        res.push(temp);
    }
    return res;
}

let fizzBuzz3 = (n) => {

    let hashMap = new Map();
    let arr = [];

    hashMap.set(3, "Fizz");
    hashMap.set(5, "Buzz");

    for (let i = 1; i <= n; i++) {
        let output = "";
        for (let key of hashMap.keys()) {
            if (i % key == 0) {
                output += hashMap.get(key);
            }
        }
        if (output == "") {
            output = i.toString();
        }
        arr.push(output);
    }
    return arr;
};


console.log(fizzBuzz3(15));