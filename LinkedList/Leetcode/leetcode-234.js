//chay vong lap while 
// khi head.val = head.next.value return true
//k return false 

const reverse = (head) => {
    let prev = null;
    let curr = head;
    let next = null;
    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    let startPointer = head; 
    let length = 0;
    
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        length++;
    }

    let mid = reverse(slow);
    while(length) {
        length--;
        if(mid.val !== startPointer.val) {
            return false;
        }
        mid = mid.next;
        startPointer = startPointer.next;
    }

    return true;
};