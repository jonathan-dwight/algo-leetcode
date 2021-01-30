var removeDuplicates = function (s, k) {
    // so we want to remove per iteration everything that has the amount of k in it

    let stack = [];
    stack.push(s[0]);

    let count = 0;

    for (let i = 1; i < s.length; i++) {
        let checkLetter = s[i];
        stack.push(checkLetter);

        if (checkLetter === stack[stack.length - k]) {
            let checkStack = stack.slice(stack.length - k, stack.length);
            if (checkStack.every((val) => val === checkLetter)) {
                count = k;
                while (count > 0) {
                    stack.pop();
                    count--;
                }
            }
        }
    }

    return stack.join("");
};
