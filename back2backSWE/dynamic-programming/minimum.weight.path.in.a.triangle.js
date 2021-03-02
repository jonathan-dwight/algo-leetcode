const minimumPathCost = (triangle) => {
    // we can use recursion to go down
    // will the pattern be going either to check +1 or -1
    // so the left will always be the same index as the previous chosen
    // right will always be plus one

    let max = triangle[0][0]; // default to the max
    let holder = 0; //idx to check which one

    for (let i = 1; i < triangle.length; i++) {
        let checkMax = 0;
        let leftCheck = triangle[i][holder];
        let rightCheck = triangle[i][holder + 1];
        if (max + leftCheck < max + rightCheck) {
            max += leftCheck;
            holder = holder;
        } else {
            max += rightCheck;
            holder = holder + 1;
        }
    }
    return max;
};


// MINIMUM STEP - BACK TO BACK SWE

const minimumPathCost = (triangle) => {
    const totalLayers = triangle.length;

    const dpLayerCache = Array(totalLayers);
    dpLayerCache.fill(0);
    initializeCacheWithLastLayer(dpLayerCache, triangle[triangle.length - 1]);

    // Start from the 2nd to last layer
    for (let row = totalLayers - 2; row >= 0; row--) {
        const currentLayer = triangle[row];

        for (let col = 0; col < currentLayer.length; col++) {
            const minSumGoingLeft = dpLayerCache[col];
            const minSumGoingRight = dpLayerCache[col + 1];

            const minSumDirection = Math.min(minSumGoingLeft, minSumGoingRight);
            const thisCellsValue = currentLayer[col];

            dpLayerCache[col] = minSumDirection + thisCellsValue;
        }
    }

    return dpLayerCache[0];
};

const initializeCacheWithLastLayer = (cache, lastRow) => {
    for (let i = 0; i < cache.length; i++) {
        cache[i] = lastRow[i];
    }
};