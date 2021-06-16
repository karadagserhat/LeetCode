var diameterOfBinaryTree = function(root) {
    
    diameter = 0;

    dfs(root);

    return diameter;

    function dfs(root){
        if(!root) return 0;

        left = dfs(root.left);
        right = dfs(root.right);

        diameter = Math.max(diameter, left  + right);
        return Math.max(left, right) + 1
    } 
};