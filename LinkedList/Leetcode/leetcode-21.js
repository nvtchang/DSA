/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//loop throught 2 list 
// if list1.value == 
var mergeTwoLists = function(list1, list2) {
    let current = new ListNode(); //tạo 1 current Node
    while(list1.val != null && list1.next != null) {
        if(list1.val < list2.val) { //node nhỏ hơn sẽ push vào current 
            current = list1;
            list1 = list1.next; //list1 move to next Node 
        }        
        else {
            current = list2;
            list2 = list2.next; //list1 move to next Node 
        }
        current = current.next;
    }
};