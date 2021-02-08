// attempted lru cache with no linkedlist
// need to fix this 

var LRUCache = function (capacity) {
    this.limit = capacity;
    this.ordering = new Array();
    this.cache = {};
    this.lastKey = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    console.log(this.cache);
    if (!(key in this.cache)) return -1;

    const item = this.cache[key];
    this.ordering = this.ordering.filter((item) => {
        return item !== key;
    });
    console.log(this.ordering);
    this.ordering.unshift(key);
    return this.cache[key];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let item;
    // console.log(key)
    if (this.ordering.length < this.limit) {
        if (this.cache[key]) {
            item = this.cache[key];
            this.cache[key] = value;
            this.ordering.unshift(key);
        } else {
            this.cache[key] = value;
            this.ordering.unshift(key);
        }
    } else {
        console.log(this.ordering);
        if (this.cache[key]) {
            this.cache[key] = value;
            // need to grab where this is in the array
            this.ordering = this.ordering.filter((item) => {
                return item !== key;
            });
            this.ordering.unshift(key);
            return;
        } else {
            let oldest = this.ordering.pop();
            delete this.cache[oldest];
            this.cache[key] = value;
            this.ordering.unshift(key);
        }

        console.log(this.cache);
    }
};
