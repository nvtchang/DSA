//chay vong lap while 
// khi head.val = head.next.value return true
//k return false 

var isPalindrome = function(head) {
    let currentNode = head; //head.val va head.next
    
    while(currentNode != null && currentNode.next != null) {
        if(currentNode.val == currentNode.next.val)
        {
            return true;
        } else {
            currentNode = currentNode.next;
        }
    }
    return false;
};