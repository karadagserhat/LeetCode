var merge = function (nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m--; n--;
    while (n >= 0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
    return nums1
};

var merge2 = function (nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m--; n--;
    while (n >= 0) {
        if(nums1[m] > nums2[n]){
            nums1[insertPos] = nums1[m]
            insertPos--;
            m--;
        } else {
            nums1[insertPos] = nums2[n];
            insertPos--;
            n--;
        }
    }
    return nums1
};

console.log(merge2(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3));