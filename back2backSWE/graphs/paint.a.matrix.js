const paint = (image, row, col, newColor) => {
    // this would be a bfs manner
    // we would want to check every node we have and move upward
    // we can change to visited?
    // can have two helper functions
    // one to check if it is a valid position - will have to use the newColor
    // second one will just be changing the value to visited
    let colorHolder;
    newColor === 1 ? (colorHolder = 1) : (colorHolder = 0);

    paintHelper(image, row, col, newColor);

    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[0].length; j++) {
            let check = image[i][j];
            if (check === "visited") image[i][j] = colorHolder;
        }
    }

    return image;
};

const paintHelper = (image, row, col, newColor) => {
    if (!isValid(image, row, col, newColor)) return image;

    let temp = image[row][col];
    image[row][col] = "visited";

    paintHelper(image, row + 1, col, newColor);
    paintHelper(image, row - 1, col, newColor);
    paintHelper(image, row, col + 1, newColor);
    paintHelper(image, row, col - 1, newColor);
};

const isValid = (image, row, col, newColor) => {
    if (row < 0 || col < 0 || col >= image[0].length || row >= image.length) {
        return false;
    }

    if (image[row][col] === "visited") return false;

    if (image[row][col] === newColor) return false;

    return true;
};
