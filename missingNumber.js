var missingNumber = function(nums) {
    
    const res = new Array(nums.length+1).fill(-1);
	
    for(const num of nums) {
        res[num] = num;
    }
   
    return res.indexOf(-1);
};




const missingNumber2 = nums =>
    nums.length * (nums.length + 1) / 2 - nums.reduce((a,c) => a + c)


    function missingNumber3(nums) { //binary search
        nums.sort();
        left = 0, right = nums.length, mid= Math.floor((left + right)/2);
        while(left<right){
            mid = Math.floor((left + right)/2);
            if(nums[mid]>mid) right = mid;
            else left = mid+1;
        }
        return left;
    }

console.log(missingNumber(nums = [3,0,1]));