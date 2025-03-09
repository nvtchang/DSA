var reverseList = function(head) {
    let prev = null; // dummy node
    let curr = head;
    let next = null;
    while(head) {
        next = curr.next;
        curr.next = prev; //reverse
        prev = curr;
        curr = next;
    }
    return prev;
};

var reverseBetween = function(head, left, right) {
    
};