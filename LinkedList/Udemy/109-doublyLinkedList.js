class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value)  {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode; //set node mới thành tail
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;     
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    insert(index, value){
        //check prarams
        if(index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(99);
        const leader = this.traverseToIndex(index-1); //return previousNode of index
        const holdingPointer = leader.next; // trỏ tới Node của index 
        leader.next = newNode; //thêm node mới vào next của Node trước đó
        newNode.prev = leader;
        newNode.next = holdingPointer;
        holdingPointer.prev = newNode;
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
        nextOfRemove.prev = leader;
        removeNode.value = nextOfRemove.value;
        this.length--;
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList)