var isPalindrome = function(head) {
    if(head === null) return true
	
    let ll = head
    const arr = [ll.val]
    
    while(ll.next !== null) {
        ll = ll.next;
        arr.push(ll.val)
    }
    
    let low = 0;
    let high = arr.length - 1;
	
    while(low < high) {
        if(arr[low] === arr[high]) {
            low++;
            high--;
        } else {
            return false;
        }
    }
    return true
};

var isPalindrome2 = function(head) {
    let node = head
    let arr = []
    
    while(node){
        arr.push(node.val)
        node = node.next
    }
    
    return arr.join('') === arr.reverse().join('')
};


function isPalindrome3(head){
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = head;
    slow = reverse(slow);

    while(slow !== null){
        if(slow.val !== fast.val){
            return false;
        }

        slow = slow.next;
        fast = fast.next;
    }

    return true;
}

//eski yapıyı bozmamak için
function reverseAsNewList(head) {
    let prev = null;
    while (head != null) {
        //Create a new listnode
        let curr = new ListNode(head.val);
        curr.next = prev;
        prev = curr;
        
        head = head.next;
    }
    return prev;
}

function reverse(head){
    let pre = null; 
    next = null;
    while(head !== null){
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}