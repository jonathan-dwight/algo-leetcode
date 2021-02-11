var BrowserHistory = function (homepage) {
    // we can use a doubly linked list for this
    // keep track of prev and curr
    // clears up all forward history
    this.history = [homepage];
    this.forwardHistory = [];
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    this.history.push(url);
    this.forwardHistory = [];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    let numSteps = steps > this.history.length ? this.history.length : steps;
    let i = 0;

    while (i < numSteps && this.history.length > 1) {
        let curr = this.history.pop();
        this.forwardHistory.push(curr);
        i++;
    }
    return this.history[this.history.length - 1]; // this.history will always be current
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    let numSteps =
        steps > this.forwardHistory.length ? this.forwardHistory.length : steps;
    let i = 0;

    while (i < numSteps && this.forwardHistory.length > 0) {
        let curr = this.forwardHistory.pop();
        this.history.push(curr);
        i++;
    }
    return this.history[this.history.length - 1];
};
