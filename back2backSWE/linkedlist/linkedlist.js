// oddEvenList Problem

const oddEvenList = (head) => {
    // partition the even node and the odd nodes

    let even = head;
    let odd = head.next;

    let oddHead = odd;

    while (odd !== null && odd.next !== null) {
        even.next = odd.next;
        even = odd.next;
        odd.next = even.next;
        odd = even.next;
    }

    even.next = oddHead;

    return head
}

var deleteDuplicates = function(head) {
    if (head === null) {
        return head
    }
    
    // we want a starting value? 
    let start = new ListNode(-101, head);
    let prev = start;
    let after = head.next;
    
    while (after !== null) {
        if (head.val === after.val) {
            while(after !== null && head.val === after.val) {
                after = after.next;
            }
            prev.next = after;
        } else {
            prev = head;
        }
        if (after === null) break;
        head = after
        after = after.next
    }
    return start.next;
};


// brute force approace
// time - o(n + m)
// space - o(Math.max(n + m))
var linkedListIntersect1 = (node1, node2) => {
    let seen = new Set();

    let curr = node1;
    while (curr !== null) {
        seen.add(curr);
        curr = curr.next;
    }

    let curr2 = node2;
    while (curr2 !== null) {
        if (seen.contains(curr2)) {
            return curr2;
        }
        curr2 = curr2.next;
    }

    return null;
}

// 0(1) space
// o(n+m) - time
// get the length and know where merge point is
// advace by difference of the lengths
// move pointers in tandem
const linkedListIntersect2 = (node1, node2) => {
    if (node1 === null || node2 === null) return null;

    let len1 = length(node1);
    let len2 = length(node2);

    if (len1 > len2) {
        node1 = advanceReferenceBy(len1 - len2, l1)
    } else {
        node2 = advanceReferenceBy(len2 - len1, l2)
    }

    while(node1 !== null && node2 !== null && node1 !== node2) {
        node1 = node1.next;
        node2 = node2.next;
    }

    return node1;
}

const advanceReferenceBy = (distanceToGo, head) => {
    while (distanceToGo > 0) {
        head = head.next;
        distanceToGo--;
    }
    return head;
}

const length = (head) => {
    if (head === null) return 0;

    length = 1;
    let curr = head;
    while (curr !== null) {
        length++;
        curr = curr.next;
    }

    return length;
}



const removeKthToLastNode = (head, k) => {
    // can't call next on null
    // we can follow the same format as finding linkedlist cycles
    // need to know linkedlist - and not brute force with size
    // need to find length of window (n - k) -- the position

    // make a window size - k+1 so we can keep track of previosu
    // terminate while loop if the right.next === null

    // watch out for edge cases -- make dummy node with head
    // start right at head.next

    const dummyHead = new ListNode(-1);
    dummyHead.next = head;

    let right = dummyhead.next;

    while (k > 0) {
        right = right.next;
        k--;
    }

    let left = dummyHead;
    while(right !== null) {
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;

    return dummyHead.next
    
}

const rotateLinkedList = (head, k) => {
    // want to have a strong reference of a node in the linkedList
    // grab node in n - kth node
    // this will the head of the node
    // remove tail of node to rotate
    // how are we going to get the tail of the final list?
    // 1. get tail and list size
    // 2. create cycle in the list
    // if k is bigger than length we do the mod of it
    // we just need to switch the head

    if (head == null) {
        return head;
    }

    let tail = head;
    let size = 1;
    while (tail.next != null) {
        size++;
        tail = tail.next;
    }

    k %= size;

    if (k == 0) {
        return head;
    }

    tail.next = head;

    let stepsToNewTail = size - k;
    let rotatedListTail = tail;
    while (stepsToNewTail > 0) {
        rotatedListTail = rotatedListTail.next;
        stepsToNewTail--;
    }

    const rotatedListHead = rotatedListTail.next;
    rotatedListTail.next = null;

    return rotatedListHead;

}

var reverseList = function (head) {
    if (head === null) return head;

    let curr = head; // 1
    let prev = null;
    let next = null;

    while (curr !== null) {
        next = curr.next;  // 2, 3, 4, 5, null              // 2, 3, 4, 5, null
        curr.next = prev;  // null, 1, 2, 3, 4              // null, 1, 3, 4, 5
        prev = curr; // 1, 2, 3, 4, 5                     // 1, 2, 3, 4, 5
        curr = next; // 2, 3, 4, 5, null                 // 2, 3, 4, 5, null
    }

    return prev;
};

// [1,2,3,4,5 => null]
// [5,4,3,2,1 => null]