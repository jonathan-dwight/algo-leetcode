var setZeroes = function (matrix) {
    let firstCol = false;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) firstCol = true;
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for (i = matrix.length - 1; i >= 0; i--) {
        for (j = matrix[0].length - 1; j >= 1; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
        }
        if (firstCol === true) matrix[i][0] = 0;
    }
    return matrix;
};
