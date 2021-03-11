var solve = function (board) {
    let grid = board.slice();

    //iterate through through top col and right down
    for (let topCol = 0; topCol < board[0].length; topCol++) {
        let topColPos = board[0][topCol];
        if (topColPos === "O") {
            dfsSurroundedRegions(grid, 0, topCol);
        }
    }

    for (let rightRow = 0; rightRow < board.length; rightRow++) {
        let rightRowPos = board[rightRow][0];
        if (rightRowPos === "O") {
            dfsSurroundedRegions(grid, rightRow, 0);
        }
    }

    //iterate through left side and bottom
    for (let bottomCol = 0; bottomCol < board[0].length; bottomCol++) {
        let bottomColPos = board[board.length - 1][bottomCol];
        if (bottomColPos === "O") {
            dfsSurroundedRegions(grid, board.length - 1, bottomCol);
        }
    }

    for (let leftRow = 0; leftRow < board.length; leftRow++) {
        let leftRowPos = board[leftRow][board[0].length - 1];
        if (leftRowPos === "O") {
            dfsSurroundedRegions(grid, leftRow, board[0].length - 1);
        }
    }

    /// change board;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            let pos = grid[row][col];
            if (pos === "O") {
                grid[row][col] = "X";
                continue;
            }
            if (pos === "false") {
                grid[row][col] = "O";
            }
        }
    }
    return grid;
};

const dfsSurroundedRegions = (grid, i, j) => {
    if (!isValid(grid, i, j)) return;

    grid[i][j] = "false";
    dfsSurroundedRegions(grid, i + 1, j);
    dfsSurroundedRegions(grid, i - 1, j);
    dfsSurroundedRegions(grid, i, j + 1);
    dfsSurroundedRegions(grid, i, j - 1);

    return grid;
};

const isValid = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
        return false;
    }

    if (grid[i][j] === "X" || grid[i][j] === "false") return false;

    return true;
};

/*

copy the array
since we dont want anything touching the border
we can bfs the borders - if its an O
we can change the copy grid to false if we dont want to flip it

we iterate through main grid and then return it

*/
