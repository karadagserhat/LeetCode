function invertTree(root) {
    if (root == null) return null;
   
      invertTree(root.left);
      invertTree(root.right);
      
      [root.left, root.right] = [root.right, root.left]
     
      
      return root;
  }

  
// DFS
function invertTree(root) {
    const stack = [root];
  
    while (stack.length) {
      const n = stack.pop();
      if (n != null) {
        [n.left, n.right] = [n.right, n.left];
        stack.push(n.left, n.right);
      }
    }
  
    return root;
  }
  