var intersect = function(nums1, nums2) {
    obj = {};
    result = [];
    for(let i of nums1){
        obj[i] = obj[i] ? obj[i]+1 : 1
    }
    for(let i of nums2){
        if(obj[i]){
            obj[i]--
            result.push(i)
        }
    }
    return result
};


var intersect2 = function(nums1, nums2) {
    const map = new Map()
    const result = []
    
    for(const number of nums1) {
        map.set(number, map.get(number) + 1 || 1)
    }

    
    for(const number of nums2) {
        if(map.get(number) >= 1) {
            result.push(number)
            map.set(number, map.get(number) - 1)
        }
    }
    
    return result
};

var intersect3 = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    const answer = [];
    
    let n1 = 0, n2 = 0;
    
    while(n1 < nums1.length && n2 < nums2.length) {
        if(nums1[n1] === nums2[n2]) {
            answer.push(nums1[n1]);
            n1++;
            n2++;
        } else if(nums1[n1] < nums2[n2]) n1++
        else n2++;
    }
    return answer;
};

console.log(intersect3(nums1 = [9,4,4,9], nums2 = [9,4]));