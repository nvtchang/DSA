/**
 * @param {number} k
 */
//trỏ front và rear ở ngoài queue 
var MyCircularQueue = function(k) {
    this.items = new Array(k);
    this.capacity = k;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
//rear trỏ tới next element rear++
//vì là vòng tròn nên sử dụng công thức rear++ % capacity để tìm ra vị trí của rear sẽ trỏ tới
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.currentLength === this.capacity) {
        return false
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = value;
    this.currentLength++;
    if(this.front === -1) {
        this.front = this.rear; //trỏ cho front chạy bằng rear
    }
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.currentLength !== 0) {
        return false;
    }
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if(this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
    }
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.front;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.rear;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.currentLength === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.currentLength === this.capacity;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * 
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
var myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1);
myCircularQueue.enQueue(2);
myCircularQueue.enQueue(3);
myCircularQueue.enQueue(4);
