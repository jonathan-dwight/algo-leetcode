



// MY ATTEMPT

//     let array = [];

//     let prev = transactions[0].split(',');

//     if (parseInt(prev[2]) > 1000) array.push(transactions[0]);

//     for (let i = 1; i < transactions.length; i++) {
//         let check = transactions[i].split(',');

//         if (parseInt(check[2]) > 1000) {
//             array.push(transactions[i]);
//             continue;
//         }

//         if (prev[0] === check[0] && prev[3] !== check[3]) {
//             if (parseInt(prev[1]) - parseInt(check[1]) < 60) {
//                 if (i === 1 && array.length === 0) {
//                     array.push(transactions[0]);
//                     array.push(transactions[i]);
//                 } else {
//                     array.push(transactions[i])
//                 }
//             }
//         } else if (prev[3] === check[3]) {
//             if (parseInt(prev[1]) - parseInt(check[1]) < 60) {
//                 if (i === 1 && array.length === 0) {
//                     array.push(transactions[0]);
//                     array.push(transactions[i]);
//                 } else {
//                     array.push(transactions[i])
//                 }
//             } else if (parseInt(prev[2]) > 1000) {
//                 if (i === 1 && array.length === 0) {
//                     array.push(transactions[0]);
//                     array.push(transactions[i]);
//                 } else {
//                     array.push(transactions[i])
//                 }
//             }
//         }

// prev = check;
// };
