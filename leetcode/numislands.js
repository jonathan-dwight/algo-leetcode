var numIslands = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // console.log(grid);
            // if (numIslandsHelper(grid, i, j)) count += 1;
            if (grid[i][j] === "visited") continue;
            if (grid[i][j] === "1") {
                numsIslandsHelper(grid, i, j);
                count += 1;
            }
        }
    }
    return count;
};

function numsIslandsHelper(grid, i, j) {
    if (!isValid(grid, i, j)) return false;

    let temp = grid[i][j];
    grid[i][j] = "visited";

    numsIslandsHelper(grid, i + 1, j);
    numsIslandsHelper(grid, i - 1, j);
    numsIslandsHelper(grid, i, j + 1);
    numsIslandsHelper(grid, i, j - 1);
}

var isValid = function (grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return false;

    if (grid[i][j] === "visited") return false;

    if (grid[i][j] === "1") {
        return true;
    } else {
        return false;
    }
};
