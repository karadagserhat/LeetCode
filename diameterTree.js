function diameterOfBinaryTree(root) {
    if( root == null){
        return 0;
    }
   
    overallNodeMax = 0;
     nodeStack = []
    nodePathCountMap = new Map();
    nodeStack.push(root);
    while(!nodeStack.isEmpty()){
        node = nodeStack.peek();
        if(node.left != null && !nodePathCountMap.containsKey(node.left)){
            nodeStack.push(node.left);
        }else if(node.right!=null && !nodePathCountMap.containsKey(node.right)){
            nodeStack.push(node.right);
        }else {
            rootNodeEndofPostOrder = nodeStack.pop();
            leftMax = nodePathCountMap.getOrDefault(rootNodeEndofPostOrder.left,0);
            rightMax = nodePathCountMap.getOrDefault(rootNodeEndofPostOrder.right,0);
            nodeMax = 1 + Math.max(leftMax,rightMax);
            nodePathCountMap.put(rootNodeEndofPostOrder,nodeMax);
            overallNodeMax = Math.max(overallNodeMax,leftMax + rightMax );
        }
        
    }
    return overallNodeMax;
    
} 