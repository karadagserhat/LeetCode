
var romanToInt = function(str) {
    
    let sum = 0;
    
    const obj = {'I':1, 'V' : 5, 'X': 10,'L': 50,'C': 100, 'D': 500,'M': 1000}
    
    for(let i = 0; i < str.length; i++){
        if(obj[str[i+1]] > obj[str[i]]){
           sum -= obj[str[i]]
           }
        else {
            sum += obj[str[i]]
        }
    }
    
    return sum
    
};

function roman2(str){

    top = 0;
    const map = new Map([['I',1], ['V' , 5], ['X', 10],['L', 50],['C', 100], ['D', 500],['M', 1000]])

    for(let i = 0; i < str.length; i++){
        if(map.get(str[i+1]) > map.get(str[i])) {
            top -= map.get(str[i])
        } else {
            top += map.get(str[i])
        }
    }


    return top

}

function romanReduce(str){
    const obj = {'I':1, 'V' : 5, 'X': 10,'L': 50,'C': 100, 'D': 500,'M': 1000}
    return [...str].reduce((pre,curr,i) => {
        return pre + (obj[str[i+1]] > obj[curr] ? -obj[curr] : obj[curr])
    },0);
}


console.log(romanReduce('VII'));