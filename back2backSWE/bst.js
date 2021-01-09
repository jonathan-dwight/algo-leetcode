const lowestCommonAncestor = (root, x, y) => {
    // have to know where it is in the binary tree

    // have something like the ancestors be stored that are common?
    // this is balanced
    // we would know if that if one node is one the right and the left
    // root node would be the greatest

    if (x < root.val && y > root.val) return root;
    if (root.left == null && root.right == null) return root;
    if (x === root.val || y === root.val) return root;

    if (x < root.val && y < root.val) {
        return lowestCommonAncestor(root.left, x, y);
    } else if (x > root.val && y > root.val) {
        return lowestCommonAncestor(root.right, x, y);
    }

    // instead of line 16 and 18 can just return the root at the end
};

const sortedArrayToBST = (nums) => {
    // grab the middle index since it is is sorted
    // then split the array and check the left and the right
    // can do this recursively
    return Build(nums, 0, nums.length);
};

const Build = (nums, left, right) => {
    if (left >= right) {
        return;
    }

    // can just return or with null

    let mid = left + Math.floor((right - left) / 2);

    let newNode = new TreeNode(nums[mid]);

    newNode.left = Build(nums, left, mid);
    newNode.right = Build(nums, mid + 1, right);

    return newNode;
};

const lowestCommonAncestor = (root, x, y) => {
    // have to know where it is in the binary tree

    // have something like the ancestors be stored that are common?
    // this is balanced
    // we would know if that if one node is one the right and the left
    // root node would be the greatest

    if (x < root.val && y > root.val) return root;
    if (root.left == null && root.right == null) return root;
    if (x === root.val || y === root.val) return root;

    if (x < root.val && y < root.val) {
        return lowestCommonAncestor(root.left, x, y);
    } else if (x > root.val && y > root.val) {
        return lowestCommonAncestor(root.right, x, y);
    }

    // instead of line 16 and 18 can just return the root at the end
};

const hasPathSum = (node, targetSum) => {
    if (node.val === targetSum) return 1;
    if (!node || (node.left === null && node.right === null)) return 0;
    return (
        hasPathSum(node.left, targetSum - node.val) +
        hasPathSum(node.right, targetSum - node.val)
    );
};

const isSymmetric = (root) => {
    if (!root) return true;
    if (root.left === null && root.right === null) return true;
    return symmetricHelper(root.left, root.right);
};

const symmetricHelper = (subLeft, subRight) => {
    if (subLeft === null && subRight === null) return true;
    // if (subLeft.val === null || subRight.val === null)return false;
    if (
        subLeft.val === subRight.val &&
        symmetricHelper(subLeft.left, subRight.right) &&
        symmetricHelper(subLeft.right, subRight.left)
    ) {
        return true;
    }
    return false;
};

const isValidBST = (root) => {
    // root sets precedent for tree left - (-infitiny, 10) and right - (10, infinity)

    // goes to the left, maximumum gets change but not minimum
    // goes to the right, minimum gets changes but not maximum

    // add augmented node?

    return isNodeValueInRange(root, -Infinity, Infinity);
};

const isNodeValueInRange = (node, min, max) => {
    if (node === null) return true;
    if (node.val < min || node.val >= max) return false;
    const leftIsValid = isNodeValueInRange(node.left, min, node.val);
    return leftIsValid && isNodeValueInRange(node.right, node.val, max);
};
