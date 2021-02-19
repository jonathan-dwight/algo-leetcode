var uniquePaths = function (m, n) {
    const res = Array.from(Array(m), () => new Array(n).fill(1));

    for (let row = 1; row < m; row++) {
        for (let column = 1; column < n; column++) {
            // fills it up as it goes and takes previous rows
            res[row][column] = res[row - 1][column] + res[row][column - 1];
        }
    }
    return res[m - 1][n - 1];
};
