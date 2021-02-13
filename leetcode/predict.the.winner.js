var PredictTheWinner = function (nums) {
    // maybe have a stack
    // then check both new values;
    if (nums.length % 2 === 0) return true;

    let newArr = nums.slice();
    let p1Sum = 0;
    let p2Sum = 0;

    let p1Pick = true;

    while (newArr.length > 0) {
        console.log(newArr);
        if (p1Pick) {
            let firstNums = newArr[0];
            let lastNums = newArr[newArr.length - 1];

            let minCheckLeft = newArr[1];
            let minCheckRight = newArr[newArr.length - 2];

            if (newArr.length === 2 || minCheckLeft === minCheckRight) {
                if (firstNums > lastNums) {
                    p1Sum += firstNums;
                    newArr.shift();
                } else {
                    p1Sum += lastNums;
                    newArr.pop();
                }
                p1Pick = false;
                continue;
            }

            if (minCheckLeft + lastNums > minCheckRight + firstNums) {
                p1Sum += lastNums;
                newArr.pop();
            } else {
                p1Sum += firstNums;
                newArr.shift();
            }

            p1Pick = false;
        } else {
            let firstNums = newArr[0];
            let lastNums = newArr[newArr.length - 1];

            let minCheckLeft = newArr[1];
            let minCheckRight = newArr[newArr.length - 2];

            if (newArr.length === 2 || minCheckLeft === minCheckRight) {
                if (firstNums > lastNums) {
                    p2Sum += firstNums;
                    newArr.shift();
                } else {
                    p2Sum += lastNums;
                    newArr.pop();
                }
                p1Pick = true;
                continue;
            }

            if (minCheckLeft + lastNums > minCheckRight + firstNums) {
                p2Sum += lastNums;
                newArr.pop();
            } else {
                p2Sum += firstNums;
                newArr.shift();
            }

            p1Pick = true;
        }
    }
    console.log(p1Sum, p2Sum);
    return p1Sum >= p2Sum ? true : false;
};

// let newArr = nums.slice();
//     let p1Sum = 0;
//     let p2Sum = 0;

//     let p1Pick = true;

//     while (newArr.length > 0) {
//         if (p1Pick) {
//             let firstNums = newArr[0];
//             let lastNums = newArr[newArr.length - 1];

//             let minCheckLeft = newArr[1];
//             let minCheckRight = newArr[newArr.length - 2];

//             if (minCheckLeft < minCheckRight) {
//                 p1Sum += firstNums;
//                 newArr.shift();
//             } else {
//                 p1Sum += lastNums;
//                 newArr.pop();
//             }

//             p1Pick = false;
//         } else {
//             let firstNums = newArr[0];
//             let lastNums = newArr[newArr.length - 1];

//             let minCheckLeft = newArr[1];
//             let minCheckRight = newArr[newArr.length - 2];

//             if (minCheckLeft < minCheckRight) {
//                 p2Sum += firstNums;
//                 newArr.shift();
//             } else {
//                 p2Sum += lastNums;
//                 newArr.pop();
//             }
//             p1Pick = true;
//         }
//     }
//     console.log(p1Sum, p2Sum);
//     return (p1Sum >= p2Sum) ? true : false;
