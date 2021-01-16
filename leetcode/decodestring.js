var decodeString = function (s) {
    // have a hashmap to store each letter in there
    // parseInt letter to check if number
    let newString = "";
    let stack = [];
    let multi = 0;
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (const char of s) {
        if (numbers.includes(char)) {
            let newMulti = multi + char;
            multi = parseInt(newMulti);
        } else if (char === "[") {
            stack.push(newString);
            stack.push(multi);
            multi = 0;
            newString = "";
        } else if (char === "]") {
            let times = stack.pop();
            let checkString = stack.pop();
            newString = checkString + createString(times, newString);
        } else {
            newString += char;
        }
    }
    return newString;
};
