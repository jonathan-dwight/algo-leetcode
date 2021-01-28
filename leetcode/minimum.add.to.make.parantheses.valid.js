var minAddToMakeValid = function (S) {
    let stack = [];
    let count = 0;

    for (const ele of S) {
        if (ele === "(") {
            stack.push(ele);
        } else if (ele === ")" && stack.length > 0) {
            stack.pop();
        } else {
            count += 1;
        }
    }

    return count + stack.length;
};
