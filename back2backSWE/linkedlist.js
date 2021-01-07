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