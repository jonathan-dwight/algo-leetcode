var oddEvenList = function (head) {
    // want to grab the odd linkedList and then the even linkedList
    // have one variable hold all the odd
    // have one variable all the even
    if (head == null) return head;

    let evenHead = head;
    let odd = head.next;

    let oddHead = odd;

    while (odd != null && odd.next != null) {
        evenHead.next = odd.next;
        evenHead = odd.next;

        odd.next = evenHead.next;
        odd = evenHead.next;
    }

    evenHead.next = oddHead;

    return head;
};
