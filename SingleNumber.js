

var singleNumber = function(nums) {
    let res = nums[0];
    for(let i = 1; i < nums.length; i++){
        res = res ^ nums[i]
    }
    return res;
};

var singleNumber2 = function(nums) {
    let hash = new Set();
    nums.forEach(n =>{
        if(!hash.has(n)){
            hash.add(n)
        } else{
            hash.delete(n)
        }
    })
    return [...hash][0]
    
};

function singleNumber3(nums) {
    const map = {};
    for (let n of nums) {
      if (map[n] == null) map[n] = 0;
      map[n]++;
    }
  
    for (let n in map) {
      if (map[n] === 1) return Number(n);
    }
  }

console.log(singleNumber( nums = [4,1,2,1,2,4,5]));