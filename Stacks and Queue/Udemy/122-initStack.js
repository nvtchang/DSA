class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.length == 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {            
            this.top.next = newNode;
            this.top = newNode;
        }
        
    }

    pop() {
        if(!this.top) {
            return null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }

    //isEmpty
}

const myStack = new Stack();
