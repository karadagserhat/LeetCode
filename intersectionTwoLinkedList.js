var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    
    let currA = headA;
    let currB = headB;
    
    while(currA != currB) {
        currA = !currA ? headB : currA.next;
        currB = !currB ? headA : currB.next;
    }
    return currA
};


var getIntersectionNode = function(headA, headB) {
    const nodes = new Set();
    
    let curr = headA;
    while(curr) {
        nodes.add(curr);
        curr = curr.next;
    }
    
    curr = headB;
    while(curr) {
        if(nodes.has(curr)) return curr;
        curr = curr.next;
    }
    return null;
};