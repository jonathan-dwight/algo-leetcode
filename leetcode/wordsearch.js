var exist = function (board, word) {
    if (board.length === 1 && board[0].length < word.length) return false;
    let wordCheck = word;
    let checking = false;
    for (let i = 0; i < board.length; i++) {
        let reassign = board.slice();
        for (let j = 0; j < board[0].length; j++) {
            let check = board[i][j];
            if (wordCheck[0] === check) {
                wordCheck = word.slice(1);
                checking = true;
                let horizontalCheck = j;
                let verticalCheck = i;
                if (wordCheck.length === 0) return true;
                while (checking) {
                    console.log(wordCheck);
                    if (horizontalCheck - 1 >= 0) {
                        let checkInside = horizontalCheck - 1;
                        // if (verticalCheck < 0) break;
                        let secondWord = reassign[verticalCheck][checkInside];
                        console.log(secondWord);
                        if (wordCheck[0] === secondWord) {
                            reassign[verticalCheck][checkInside] = "used";
                            horizontalCheck--;
                            wordCheck = wordCheck.slice(1);
                            if (wordCheck.length === 0) return true;
                            continue;
                        }
                    }
                    if (horizontalCheck + 1 <= board[0].length) {
                        let checkInside = horizontalCheck + 1;
                        let secondWord = reassign[verticalCheck][checkInside];
                        if (wordCheck[0] === secondWord) {
                            reassign[verticalCheck][checkInside] = "used";
                            horizontalCheck++;
                            wordCheck = wordCheck.slice(1);
                            if (wordCheck.length === 0) return true;
                            continue;
                        }
                    }
                    // if (verticalCheck - 1 < 0) break;
                    if (verticalCheck - 1 >= 0) {
                        let checkInside = verticalCheck - 1;
                        let secondWord = reassign[checkInside][horizontalCheck];
                        console.log(secondWord);
                        if (wordCheck[0] === secondWord) {
                            reassign[checkInside][horizontalCheck] = "used";
                            verticalCheck--;
                            wordCheck = wordCheck.slice(1);
                            // if (checkInside < 0) break;
                            if (wordCheck.length === 0) return true;
                            continue;
                        }
                    }
                    if (verticalCheck + 1 <= board.length) {
                        let checkInside = verticalCheck + 1;
                        let secondWord = reassign[checkInside][horizontalCheck];
                        if (wordCheck[0] === secondWord) {
                            reassign[checkInside][horizontalCheck] = "used";
                            verticalCheck++;
                            wordCheck = wordCheck.slice(1);
                            if (wordCheck.length === 0) return true;
                            continue;
                        }
                    }
                    if (wordCheck.length === 0) return true;
                    checking = false;
                    wordCheck = word;
                }
            }
        }
    }

    return wordCheck.length === 0;
};

// ACTUAL SOLUTION - RECURSIOn

var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (existHelper(board, word, 0, i, j)) return true;
        }
    }
    return false;
};

// helper function

var existHelper = (board, word, wordIdx, i, j) => {
    if (
        i < 0 ||
        i >= board.length ||
        j < 0 ||
        j >= board[0].length ||
        board[i][j] !== word[wordIdx]
    )
        return false;

    if (wordIdx === word.length - 1) return true;

    let temp = board[i][j];
    board[i][j] = "seen";

    let check =
        existHelper(board, word, wordIdx + 1, i - 1, j) ||
        existHelper(board, word, wordIdx + 1, i + 1, j) ||
        existHelper(board, word, wordIdx + 1, i, j + 1) ||
        existHelper(board, word, wordIdx + 1, i, j - 1);

    if (check) {
        return true;
    } else {
        board[i][j] = temp;
        return false;
    }
};