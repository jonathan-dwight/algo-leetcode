// attempted lru cache with no linkedlist
// need to fix this 


class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.count = 0;
        this.head = null;
        this.tail = null;
        this.hash = {};
    }

    get(key) {
        if (this.hash[key]) {
            const { value, prev, next } = this.hash[key];
            //delete the connections of this node, get ready to move this node to head
            if (prev) {
                prev.next = next;
            }

            if (next) {
                next.prev = prev || next.prev; // this was setting both prev and next to the same
            }
            //if the get value was the next to be removed
            if (this.tail === this.hash[key]) {
                this.tail = prev || this.hash[key];
            }

            //redefine prev
            this.hash[key].prev = null;

            if (this.head !== this.hash[key]) {
                this.hash[key].next = this.head;
                this.head.prev = this.hash[key];
            }
            //redefine head
            this.head = this.hash[key];
            return value;
        }

        return -1;
    }

    put(key, value) {
        //if key already exists
        if (this.hash[key]) {
            this.hash[key].value = value;
            //update most recently used by calling get function
            this.get(key);
        } else {
            //create new node
            this.hash[key] = {
                key: key,
                value: value,
                prev: null,
                next: null,
            };
            //if there is a head, update the bindings
            if (this.head) {
                this.hash[key].next = this.head;
                this.head.prev = this.hash[key];
            }
            //redefine head
            this.head = this.hash[key];

            //if no tail, make new head tail
            if (!this.tail) {
                this.tail = this.hash[key];
            }

            this.count += 1;
        }

        if (this.count > this.capacity) {
            let removeKey = this.tail.key;
            //remove tail bindings
            if (this.tail.prev) {
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
            }

            //delete this node from hashTable
            delete this.hash[removeKey];
            this.count -= 1;
        }
    }
}


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
