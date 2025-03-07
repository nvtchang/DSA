//implement linked list in js
// 10 -->5-->16

// let myLinkedList = {
//     head: { 
//         value: 10, //value of the Node
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         } //point to another Node
//     }
// } 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    //create first linked list node
    constructor(value)  {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode; //set node mới thành tail
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }

    insert(index, value){
        //check prarams
        if(index >= this.length) {
            return this.append(value);
        }

        // for(let i = 0; i < this.length; i++) {
        //     if(i === index - 1) {
        //         this.next = new Node(value);
        //     }
        //     if(i === index) {
        //         this.value = value;
        //         this.next = new Node(this.value);


        //     }
        // }
        const newNode = new Node(99);
        const leader = this.traverseToIndex(index-1); //return previousNode of index
        const holdingPointer = leader.next; // trỏ tới Node của index 
        leader.next = newNode; //thêm node mới vào next của Node trước đó
        newNode.next = holdingPointer;
        this.length++;

    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        const leader = this.traverseToIndex(index-1);
        const removeNode = leader.next; // lấy được remove Node
        const nextOfRemove = removeNode.next;

        leader.next = nextOfRemove;
        removeNode.value = nextOfRemove.value;
        this.length--;
    }

    revese() {
        if(!this.head.next) {
            return this;
        }
        let prev = null; //dummy node
        let curr = this.head;
        let next = null;;
        while(curr) {
            next = curr.next; //luu next
            curr.next = prev; //reverse, trỏ curent.next tới prev
            prev = curr; //prev tiến lên thành current
            curr = next; //current tiến lên thành next
        }
        return prev; // pre thành head mới tại cuối LL
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)

myLinkedList.remove(3)
myLinkedList.printList()