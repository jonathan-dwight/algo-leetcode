var MinStack = function () {
    this.stack = [];
    this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    if (this.min.length < 1 || this.min[this.min.length - 1] >= x)
        this.min.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const removed = this.stack.pop();
    if (removed === this.min[this.min.length - 1]) this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min[this.min.length - 1];
};
