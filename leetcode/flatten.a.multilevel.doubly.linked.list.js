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

const flatten = (head) => {
    const stack = [];
    
    let linkedList = head;
    
    while (linkedList != null) {
        
        if (linkedList.child) {
            if (linkedList.next != null) stack.push(linkedList.next);
            linkedList.next = linkedList.child;
            linkedList.next.prev = linkedList;
            linkedList.child = null;
        }
        
        if (linkedList.next === null && stack.length > 0) {
            const node = stack.pop();
            linkedList.next = node;
            linkedList.next.prev = linkedList;
        }
        
        linkedList = linkedList.next;
    }
    
    return head;
}

/*

iterate and when a child set the next to equal 
    push into a stack the next link
    and set the child prev to the parent
    
    if we hit a null -> we pop of the node and then it sets the next to the node
    
    we have to continue worrying about the doubly linkedlist and make sure to set it back to the parent
*/
