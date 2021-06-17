function addTwoNumbers(l1, l2){
    let dummy = new ListNode(0);
    let curr =dummy;
    let sum = 0;
    let carry = 0

    while(l1 || l2 || sum > 0){

        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }

        if(sum >= 10){
            carry = 1;
            sum -= 10;
        }

        curr.next = new ListNode(sum);
        curr = curr.next;

        sum = carry;
        carry = 0
       
    }
   
    return dummy.next;

}