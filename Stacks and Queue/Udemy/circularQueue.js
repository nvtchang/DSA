class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if(!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength++;
            if(this.front === -1) {
                this.front = this.rear;
            }
        } 
    }

    dequeue() {
        if(this.isEmpty()) {
            return null;
        }
        let deletedItem = this.items[this.front];
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity;
        this.currentLength--;
        if(this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return deletedItem;
    }

    peek() {
        if(this.isEmpty()) {
            return null;
        }
        return this.items[this.front];
    }

    print() {
        if(this.isEmpty()) {
            console.log('Queue is empty')
        } else {
            let i 
            let str = ''
            for(i = this.front; i !== this.rear ; i = (i+1) % this.capacity) {
                str += this.items[i] + ' ';
            }
            str += this.items[this.rear];
            console.log(str)
        }
    }
}

const queue = new CircularQueue(5);

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();

console.log(queue.dequeue())