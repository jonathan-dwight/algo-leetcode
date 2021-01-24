// var addTwoNumbers = function(l1, l2) {
//     let List = new ListNode(0);
//     let head = List;

//     let newL1 = reverseLinkedList(l1);
//     let newL2 = reverseLinkedList(l2);
//     console.log(newL1);
//     console.log(newL2)

//     let sum = 0;
//     let carry = 0;

//     while (newL1 !== null || newL2 !== null) {

//         if (newL1 !== null) {
//             sum += newL1.val;
//             newL1 = newL1.next;
//         }
//         if (newL2 !== null) {
//             sum += newL2.val;
//             newL2 = newL2.next;
//         }
//         if (sum >= 10) {
//             carry = 1;
//             sum = sum - 10;
//         }

//         head.next = new ListNode(sum);
//         head = head.next;

//         if (newL1 === null && newL2 === null) break;

//         sum = carry;
//         carry = 0;
//     }

//      if (carry === 1) {
//             head.next = new ListNode(carry);
//             head = head.next;
//         }

//     return reverseLinkedList(List.next);
// };

// var reverseLinkedList = (head) => {
//     if (head === null) return head;

//     let curr = head;
//     let prev = null;
//     let next = null;

//     while (curr !== null) {
//         next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }
//     return prev;
// }

// solution o(n) = no reversing
var addTwoNumbers = function (l1, l2) {
    let stack1 = [];
    let stack2 = [];
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    let l3 = new ListNode(0);
    while (stack1.length || stack2.length) {
        let sum = 0;
        if (stack1.length) sum += stack1.pop();
        if (stack2.length) sum += stack2.pop();
        // sum += l3.val;
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }
        l3.val = sum % 10;
        let head = new ListNode(Math.floor(sum / 10));
        head.next = l3;
        l3 = head;
    }
    return l3.val === 0 ? l3.next : l3;
};
