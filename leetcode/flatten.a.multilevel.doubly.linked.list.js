var flatten = function (head) {
    const stack = [];

    let linkHead = head;

    while (linkHead !== null) {
        if (linkHead.child) {
            if (linkHead.next !== null) stack.push(linkHead.next);
            linkHead.next = linkHead.child;
            linkHead.next.prev = linkHead; // this is making the child point to the current
            linkHead.child = null;
        }

        //this is now checking if the child list is null
        if (linkHead.next === null && stack.length > 0) {
            let node = stack.pop();
            linkHead.next = node;
            linkHead.next.prev = linkHead; //this is bring back the pointer to the end of the link
        }
        linkHead = linkHead.next;
    }

    return head;
};


// RECURSION - attempt fail... tried to do  a dfs
// var flatten = function(head) {
//     let arr = [];

//     let linkHead = head

//     while (linkHead !== null) {
//         if (linkHead.child) {
//             arr.push(linkHead.val);
//             arr = arr.concat(getChildLinkedList(linkHead.child ,arr))
//         } else {
//             arr.push(linkHead.val);
//             linkHead = linkHead.next;
//         }
//     }
//     return arr;
// };

// var getChildLinkedList = function (node, arr) {

//     if (node.child == null) return arr;
//     let checkHead = node;
//     while(checkHead !== null) {
//         if (checkHead.child) {
//             arr.push(checkHead.val);
//             getChildLinkedList(checkHead.child, arr)
//         } else {
//             arr.push(checkHead.val);
//             checkHead = checkHead.next
//         }
//     }
//     return arr;
// }
