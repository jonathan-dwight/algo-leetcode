var bstToGst = function (root) {
    const stack = [];
    stack.push([root]);

    let sumTotal = 0;

    while (stack.length > 0) {
        let lastElement = stack[stack.length - 1];
        if (lastElement[0].right && lastElement.length === 1) {
            lastElement.push(true);
            stack.push([lastElement[0].right]);
        } else {
            let valCheck = stack.pop();
            sumTotal += valCheck[0].val;
            valCheck[0].val = sumTotal;
            if (valCheck[0].left) {
                stack.push([valCheck[0].left]);
            }
        }
    }
    return root;
};
