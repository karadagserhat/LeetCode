var reverseList = function(head) {
    if (head === null) return null;
    let previous = null
    let next = null;
    
    while (head) {
        next = head.next
        head.next = previous;
        previous = head;
        head = next;
    }
    return previous;   
};


function reverseList(head) {
    /* recursive solution */
    return reverseListInt(head, null);
}

function reverseListInt(head, pre) {
    if (head == null)
        return pre;
    next = head.next;
    head.next = pre;
    return reverseListInt(next, head);
}