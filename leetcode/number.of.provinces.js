var findCircleNum = function (isConnected) {
    let visited = new Set();

    let count = 0;

    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            findCircleNumHelper(i, isConnected, visited);
            count++;
        }
    }

    return count;
};

const findCircleNumHelper = (i, isConnected, visited) => {
    for (let j = 0; j < isConnected.length; j++) {
        let check = isConnected[i][j];
        if (check === 1 && !visited.has(j)) {
            visited.add(j);
            findCircleNumHelper(j, isConnected, visited);
        }
    }
};
