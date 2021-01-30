var minRemoveToMakeValid = function (s) {
    let stack = [];
    let removalArr = [];
    let newString = "";

    for (let i = 0; i < s.length; i++) {
        let check = s[i];
        if (check === "(") {
            stack.push([check, i]);
        } else if (check === ")" && stack.length > 0) {
            stack.pop();
        } else if (check === ")") {
            removalArr.push(i);
        }
    }

    for (const ele of stack) {
        removalArr.push(ele[1]);
    }

    for (let j = 0; j < s.length; j++) {
        let stringCheck = s[j];
        if (!removalArr.includes(j)) {
            newString += stringCheck;
        }
    }

    return newString;
};
