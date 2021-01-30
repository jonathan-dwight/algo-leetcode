var islandPerimeter = function (grid) {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                count += checkPerimeters(i, j, grid);
            }
        }
    }
    return count;
};

function checkPerimeters(i, j, grid) {
    let count = 0;
    if (i - 1 < 0) {
        count += 1;
    } else {
        if (grid[i - 1][j] === 0) count += 1;
    }

    if (j - 1 < 0) {
        count += 1;
    } else {
        if (grid[i][j - 1] === 0) count += 1;
    }

    if (i + 1 > grid.length - 1) {
        count += 1;
    } else {
        if (grid[i + 1][j] === 0) count += 1;
    }

    if (j + 1 > grid[0].length - 1) {
        count += 1;
    } else {
        if (grid[i][j + 1] === 0) count += 1;
    }

    return count;
}
