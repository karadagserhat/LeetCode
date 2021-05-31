function majorityElement(nums){
    const obj = {}

    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]){
            obj[nums[i]] = obj[nums[i]] + 1
        } else {
            obj[nums[i]] = 1
        }

        if(obj[nums[i]] > nums.length / 2) return nums[i];
    }

}

function majorityElement2(nums){
 let aday = nums[0];
 sayac = 1;
 for(let i = 1; i < nums.length; i++){
    if(sayac == 0){
        aday = nums[i]
    }

     if(aday == nums[i]){
         sayac++;
     } else {
         sayac--;
     }
     
 }   
 return aday;
}

function majorityElement3(nums){
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count == 0) {
            candidate = num;
        }
        count += (num == candidate) ? 1 : -1;
    }

    return candidate;
   }