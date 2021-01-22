// var addTwoNumbers = function(l1, l2) {
//     const val1 = addTwoNumbersHelper(l1);
//     const val2 = addTwoNumbersHelper(l2);

//     let newVal = val1 + val2;
//     newVal = newVal.toString();

//     let newRoot = new ListNode(parseInt(newVal[0]), null)
//     if (newVal.length === 1) return newRoot;

//     let i = 1;
//     while (i < newVal.length) {
//         let addRoot = new ListNode(parseInt(newVal[i]), newRoot);
//         newRoot = addRoot;
//         i++;
//     }

//     return newRoot;
// };
// // helper function to get value

// function addTwoNumbersHelper(link) {
//     let val = [];
//     let root1 = link;
//     while (root1 !== null) {
//         val.push(root1.val);
//         root1 = root1.next;
//     }
//     val = val.reverse().join('');
//     val = parseInt(val);
//     return val;
// }

var addTwoNumbers = function (l1, l2) {
    const List = new ListNode(0);
    let head = List;
    let sum = 0;
    let carry = 0;

    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }

    return List.next;
};