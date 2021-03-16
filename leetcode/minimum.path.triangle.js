var minimumTotal = function (triangle) {
    const bottomUpTable = createDPTable(triangle[triangle.length - 1]);

    // now we iterate from the second to last row up

    for (let i = triangle.length - 2; i >= 0; i--) {
        const triangleRow = triangle[i];

        for (let j = 0; j < triangleRow.length; j++) {
            const maxLeft = bottomUpTable[j];
            const maxRight = bottomUpTable[j + 1];

            const minDirection = Math.min(maxLeft, maxRight);

            const currentLayerVal = triangleRow[j];
            const total = minDirection + currentLayerVal;

            bottomUpTable[j] = total;
        }
    }
    return bottomUpTable[0];
};

const createDPTable = (arr) => {
    const newArray = [];

    for (const ele of arr) {
        newArray.push(ele);
    }

    return newArray;
};
