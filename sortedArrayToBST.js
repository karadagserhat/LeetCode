var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    
    // subtrees are BSTs as well
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    return root;
};



var sortedArrayToBST = function(nums) {
    if (!nums) return null
    
    const helper = (low, high) => {
      if (low > high) return null
      
      const mid = Math.floor((high + low) / 2)
      const root = new TreeNode(nums[mid])
      
      root.left = helper(low, mid - 1)
      root.right = helper(mid + 1, high)
      
      return root
    } 
  
  
    return helper(0, nums.length - 1)
  }