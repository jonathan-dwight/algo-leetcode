var isValidBST = function (root) {
    // left subtree is only less than node
    // right subtree is greater than node
    // both left and right must be bst

    // the minimum will always be negative infinity
    // max will always be positive infinity
    // if (!root) return true;
    return isValidBstHelper(root, -Infinity, Infinity);
};

var isValidBstHelper = (node, min, max) => {
    if (node == null) return true;
    if (node.val <= min || node.val >= max) return false;

    const leftValid = isValidBstHelper(node.left, min, node.val); // check left
    // check right
    return leftValid && isValidBstHelper(node.right, node.val, max);
};
