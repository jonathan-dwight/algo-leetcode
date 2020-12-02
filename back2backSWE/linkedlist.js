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