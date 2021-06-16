function mergeTrees(r1 , r2){
    if(!r1 || !r2) return r1 || r2;

    r1.val += r2.val;

    r1.left = mergeTrees(r1.left, r2.left);
    r1.right = mergeTrees(r1.right, r2.right)
    return r1;
}