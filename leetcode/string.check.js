const stringCheck = (string, array) => {
    let checkHash = {};

    let ans = [];

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        checkHash[char] = checkHash[char] ? checkHash[char].concat(i) : [i];
    }
    // console.log(checkHash);
    for (let j = 0; j < array.length; j++) {
        let idx = array[j];
        let letter = string[idx];

        if (!checkHash[letter] || checkHash[letter].length === 1) {
            ans.push(-1);
            continue;
        }

        let max = Infinity;
        let val = 0;
        let values = checkHash[letter];

        for (let z = 0; z < values.length; z++) {
            let check = Math.abs(idx - values[z]);
            if (check === 0) continue;
            if (check < max) {
                max = check;
                val = values[z];
            }
        }
        ans.push(val);
    }
    return ans;
};

// const stringCheck = (string, array) => {

//     let ans = [];

//     for (let i = 0; i < array.length; i++) {
//         ans.push(stringCheckHelper(string, array[i]));
//     }

//     return ans;
// }

// const stringCheckHelper = (string, i) =>  {
//     let letter = string[i];
//     let max = Infinity;
//     let val = 0;
//     let leftCheck = i - 1;
//     let rightCheck = i + 1;
//     console.log(leftCheck, rightCheck);
//     while (leftCheck >= 0 || rightCheck < string.length) {
//         let leftLetter = string[leftCheck];
//         let rightLetter = string[rightCheck];

//         // console.log(leftLetter, rightLetter, letter);
//         if (leftLetter === letter) {
//             let leftValCheck = Math.abs(i - leftCheck);
//             if (max > leftValCheck) {
//                 max = leftValCheck;
//                 val = leftCheck;
//             }
//         }

//         if (rightLetter === letter) {
//             let rightValCheck = Math.abs(i - rightCheck);
//             if (max > rightValCheck) {
//                 max = rightValCheck;
//                 val = rightCheck;
//             }
//         }

//         leftCheck--;
//         rightCheck++;
//     }

//     return (val == 0) ? -1 : val;

// }
console.log(stringCheck("hackerrank", [4, 1]));
