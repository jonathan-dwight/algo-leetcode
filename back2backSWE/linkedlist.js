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
    
}