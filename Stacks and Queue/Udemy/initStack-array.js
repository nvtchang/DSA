class Stack {
    constructor() {
        this.item = [];
        this.count = 0;
    }

    //add element to top of stack 
    push(element) {
        this.item[this.count] = element;
        console.log(`${element} added to ${this.count}`)
        this.count++;
        return this.count - 1; // return index of element in stack
    }

    //Return and remove top element in stack
    //return undefine if stack empty
    pop() {
        if(this.count == 0) {
            return undefined
        }
        const topElement = this.item[this.count -1];
        this.count--;
        console.log(`${topElement} removed`)
        return topElement;
    }
    //Check top element in stack 
    peek() {
        if(this.count == 0) {
            return undefined;
        }
        const topElement = this.item[this.count -1];
        return topElement;
    }

    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack not empty');
        return this.count == 0;
    }

    //print element on stack
    print() {
        let str = '';
        for(let i = 0; i < this.count; i++) {
            str += this.item[i] + ' ';
        }
        return str
    }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack.print());
stack.pop();
stack.pop();
