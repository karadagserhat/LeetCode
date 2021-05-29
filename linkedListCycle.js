var hasCycle = function(head) {
    var fast = head, slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            return true;
        }
    }
    
    return false;
};


var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let set = new Set();
    let cur = head;
    while(cur) {
        if(set.has(cur)) return true;
        set.add(cur);
        cur = cur.next;
    }
    return false;
};