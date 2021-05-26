function twoSum(nums, target){


    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j< nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
    return []
}

function twoSum2(nums,target){

    for(let i = 0; i < nums.length ; i++){
        if(nums.lastIndexOf(target - nums[i]) !== i && nums.lastIndexOf(target - nums[i] > 0)){
            return [i,nums.lastIndexOf(target - nums[i])]
        }
    }
    return []

}

function twoSumm(nums, target){
    const map = new Map();
    for(let i = 0; i< nums.length; i++){
        map.set(nums[i],i)
    }

    for(let i = 0; i< nums.length; i++){
        if(map.has(target - nums[i]) && map.get(target - nums[i]) != i){
            return [i,map.get(target-nums[i])]
        }
    }
}


var twoSum3 = function(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        if(map.has(target-nums[i]) && map.get(target-nums[i]) != i){
            return [map.get(target-nums[i]),i]

        }
        map.set(nums[i],i)
    }

    return []
};

console.log(twoSumm([2,5,5,11],10));