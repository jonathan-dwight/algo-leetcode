const uniquePaths = (rows, cols) => {
    // how many can i go inside of it to get to the spot
    // want to fill the initial row/column to 1 and then work way in
    // want to continuously add things to the table
    // o (v + e) // vertices
    // space (m X n )
    let table = Array.from(new Array(rows), () => new Array(cols).fill(1));

    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            table[row][col] = table[row - 1][col] + table[row][col - 1];
        }
    }
    return table[rows - 1][cols - 1];
};
