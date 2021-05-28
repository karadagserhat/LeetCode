var maxSubArray = function(nums) {
    
    let max = -Number.MAX_VALUE,sum=0
    
    for(let i = 0; i < nums.length; i++){
        sum = Math.max(nums[i], sum + nums[i])
        max = Math.max(max, sum)
    }
    
    
    return max
    
};


function maxSubArray2(A) {
    let max = Number.MIN_VALUE, sum = 0;
    for (let i = 0; i < A.length; i++) {
        if (sum < 0) 
            sum = A[i];
        else 
            sum += A[i];
        if (sum > max)
            max = sum;
    }
    return max;
}


var maxSubArray3 = function(nums) {
	
    return findMaxSumInArr(nums);
    
    function findMaxSumInArr(arr){
       
        if (arr.length === 1){
            return arr[0];
        }
		
        if (arr.length === 0){
            return -Infinity;
        }
        
		
        let length = arr.length - 1;
        let mid = Math.floor( length/2 );
        
        let lMaxSumInSubArr = findMaxSumInArr( arr.slice(0, mid) );
        let rMaxSumInSubArr = findMaxSumInArr( arr.slice(mid + 1, length + 1) );
       
        let lMaxContiguousSum = 0,
            rMaxContiguousSum = 0;
        
       
        for (let i = mid - 1, currContiguousSum = 0; i >= 0; i--){
            currContiguousSum += arr[i];
            lMaxContiguousSum = Math.max(lMaxContiguousSum, currContiguousSum);
        }
     
        for (let i = mid + 1, currContiguousSum = 0; i <= length; i++){
            currContiguousSum += arr[i];
            rMaxContiguousSum = Math.max(rMaxContiguousSum, currContiguousSum);
        }
       
        return Math.max(
           
            lMaxContiguousSum + arr[mid] + rMaxContiguousSum, 
          
            lMaxSumInSubArr, 
            rMaxSumInSubArr  
        );
    }
}

console.log(maxSubArray3(nums = [-2,1,-3,4,-1,2,1,-5,4]));