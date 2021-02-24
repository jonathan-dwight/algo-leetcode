var maxIncreaseKeepingSkyline = function (grid) {
    const topBottom = [];
    const leftRight = [];

    // getting maxTop Bottom
    for (let i = 0; i < grid.length; i++) {
        let maxTop = 0;
        for (let j = 0; j < grid.length; j++) {
            let val = grid[j][i];
            if (val > maxTop) maxTop = val;
        }
        topBottom.push(maxTop);
    }

    // get maxLeft Right
    for (let i = 0; i < grid.length; i++) {
        let maxRow = 0;
        for (let j = 0; j < grid[0].length; j++) {
            let val = grid[i][j];
            if (val > maxRow) maxRow = val;
        }
        leftRight.push(maxRow);
    }

    let totalSum = 0;

    // we want to compare the left and right to the top and bottom when iterating
    // imagine facing the skyline from the left right, want to keep shape of how the skyline would like
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const val = grid[i][j];
            const checkVal = Math.min(leftRight[i], topBottom[j]);
            totalSum += checkVal - val;
        }
    }

    return totalSum;
};
