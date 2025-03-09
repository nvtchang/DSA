// set dummynode, current and next node
// đổi chiều của curr tới prev.next, next tới current.next
// prev tiến lên bằng curr, curr tiến lên = next
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