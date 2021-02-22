// MY SOLUTION PASSES NOT IN PLACE THOUGh

var gameOfLife = function (board) {
    let grid = Array.from(new Array(board.length), () =>
        new Array(board[0].length).fill(0)
    );
    // let grid = board.slice();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let pos = board[i][j];
            let count = checkBoardHelper(board, i, j);
            if (pos === 1) {
                if (count < 2) {
                    grid[i][j] = 0;
                } else if (count === 2 || count === 3) {
                    grid[i][j] = 1;
                } else if (count > 3) {
                    grid[i][j] = 0;
                }
            } else {
                if (count === 3) {
                    grid[i][j] = 1;
                }
            }
        }
    }
    // board = grid;
    console.log(grid);
};

const checkBoardHelper = (board, i, j) => {
    let count = 0;
    let indexes = [
        [i + 1, j],
        [i - 1, j],
        [i + 1, j + 1],
        [i - 1, j - 1],
        [i + 1, j - 1],
        [i - 1, j + 1],
        [i, j + 1],
        [i, j - 1],
    ];

    for (let i = 0; i < indexes.length; i++) {
        let pos = indexes[i];
        if (!isValidPos(board, pos[0], pos[1])) continue;
        // console.log(pos);
        if (board[pos[0]][pos[1]] === 1)
            count += 1;
        // will check 2 because thats how you know it was one
    }

    return count;
};

const isValidPos = (board, i, j) => {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length)
        return false;

    return true;
};



// IN PLACE

var gameOfLife = function (board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let pos = board[i][j];
            let count = checkBoardHelper(board, i, j);
            if (pos === 1) {
                if (count < 2 || count > 3) {
                    board[i][j] = 2;
                }
            } else if (pos === 0) {
                if (count === 3) {
                    board[i][j] = 3;
                }
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] %= 2;
        }
    }
};

const checkBoardHelper = (board, i, j) => {
    let count = 0;
    let indexes = [
        [i + 1, j],
        [i - 1, j],
        [i + 1, j + 1],
        [i - 1, j - 1],
        [i + 1, j - 1],
        [i - 1, j + 1],
        [i, j + 1],
        [i, j - 1],
    ];

    for (let i = 0; i < indexes.length; i++) {
        let pos = indexes[i];
        if (!isValidPos(board, pos[0], pos[1])) continue;
        if (board[pos[0]][pos[1]] === 1 || board[pos[0]][pos[1]] === 2)
            count += 1;
        // will check 2 because thats how you know it was one
    }

    return count;
};

const isValidPos = (board, i, j) => {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length)
        return false;

    return true;
};