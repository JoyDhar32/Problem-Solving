var MyQueue = function () {
    this.stack1 = []; 
    this.stack2 = []; 
};

MyQueue.prototype.push = function (x) {
    this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
    if (this.stack2.length === 0) {
        this.transferElements();
    }
    return this.stack2.pop();
};


MyQueue.prototype.peek = function () {
    if (this.stack2.length === 0) {
        this.transferElements();
    }
    return this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0;
};

MyQueue.prototype.transferElements = function () {
    while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
    }
};
console.log("MyQueue", MyQueue); 

// Time Complexity: O(n)
// Space Complexity: O(n)
// Hint: ✅Stack
