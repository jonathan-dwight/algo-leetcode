const levelOrderTraversal = (root, height = 0, result = []) => {
    // can have a results array
    // and then just push into the array
    if (root == null || root.val == null) return result;

    if (!result[height]) {
        result[height] = [root.val];
    } else {
        result[height] = result[height].concat(root.val);
    }
    levelOrderTraversal(root.left, height + 1, result);
    levelOrderTraversal(root.right, height + 1, result);
    return result;
};


// back to back swe iterative approach

const levelOrderTraversal = (root) => {
    if (root == null) {
        return [];
    }

    const levelsList = [];

    const queue = [];
    queue.push(root);

    while (queue.length !== 0) {
        const currentLayer = [];

        const layerSize = queue.length;
        // this is how you go layer by layer
        for (let i = 0; i < layerSize; i++) {
            const currentNode = queue.shift();

            if (currentNode.val) {
                currentLayer.push(currentNode.val);
            }

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        levelsList.push(currentLayer);
    }

    return levelsList;
};