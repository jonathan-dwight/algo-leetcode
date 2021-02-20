const search = (matrix, target) => {
    if (matrix.length == 0) {
        return false;
    }

    let col = matrix[0].length - 1;
    let row = 0;

    while (col >= 0 && row <= matrix.length - 1) {
        /*
      Cases:
        target == item : We found the item. Return true.
        target < item : Target must be to our left...go down in value
        target > item : Target must be to our below...go up in value
    */
        if (target == matrix[row][col]) {
            return true;
        } else if (target < matrix[row][col]) {
            col--;
        } else if (target > matrix[row][col]) {
            row++;
        }
    }

    return false;
};
