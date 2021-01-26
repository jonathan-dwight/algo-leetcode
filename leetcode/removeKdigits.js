var removeKdigits = function(num, k) {
    // assuming we can use o(1) queue and stack with linked list class;
    if (k >= num.length) return "0";
    
    let arr = num.split('');
    let stack = [];
    
    while (k > 0 && arr.length > 0) {
        let curr = parseInt(stack[stack.length-1]);
        let nextEl = parseInt(arr[0]);
        
        if (stack.length === 0 || nextEl >= curr) {
            stack.push(arr.shift());
        } else {
            stack.pop();
            k--;
        }
    }
    
    let output = stack.concat(arr);
    
    while (k > 0) {
        output.pop();
        k--;
    }
}


// MY ATTEMPT;
// var removeKdigits = function (num, k) {
//     // assuming we can use o(1) queue and stack with linked list class;
//     if (k === num.length) return "0";

//     let stack = [];
//     let queue = num.split("");
//     stack.push(parseInt(queue.shift()));

//     let i = 0;

//     while (queue.length) {
//         let val = parseInt(queue.shift());
//         let check = stack[stack.length - 1];
//         if (check > val) {
//             stack.pop();
//             k--;
//         }
//         stack.push(val);
//         if (k === 0) {
//             stack = stack.concat(queue);
//             break;
//         }
//         i++;
//     }

//     if (k > 0) {
//         while (k > 0) {
//             if (stack[0] > stack[stack.length - 1]) {
//                 stack.shift();
//                 k--;
//             } else {
//                 stack.pop();
//                 k--;
//             }
//         }
//     }

//     let checking = true;
//     while (checking) {
//         checking = false;
//         if (stack[0] === 0 && stack.length > 1) {
//             stack.shift();
//             checking = true;
//         }
//     }
//     return stack.join("");
// };
