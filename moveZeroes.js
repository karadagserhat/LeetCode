function moveZeroes(nums){

    for(let i = 0, j = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            //let tmp = arr[i];
           // arr[i] = arr[j]
           // arr[j] = tmp;
            [nums[j], nums[i]] = [nums[i], nums[j]]
        
            j++;
        }
    }
    return nums
}

var moveZeroes2 = function(nums) {

    //two pointers
    var pos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++;
        }
    }
    for (i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums
    };

console.log(moveZeroes2([0,4,5,0,2]));