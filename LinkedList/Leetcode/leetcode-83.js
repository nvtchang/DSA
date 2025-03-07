//head is array of linked list
/* 

//check 
*/
var deleteDuplicates = function(head) {
    let currentNode = head;

    while(currentNode != null && currentNode.next != null) { //check if current has value
        const nextOfCurrent = currentNode.next;
        if(currentNode.val === nextOfCurrent.val) {
            //tro toi Node tiep theo
            currentNode.next = nextOfCurrent.next;
        } else { //skip toi Node tiep theo neu k co value
            currentNode = nextOfCurrent;
        }
    }
    return head;
   
};
const result = deleteDuplicates([1,1,2])

console.log(result)