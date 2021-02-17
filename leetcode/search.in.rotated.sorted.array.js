var search = function (rotated, target) {
    var left = 0;
    var right = rotated.length - 1;
    // Just a straight binary search.
    while (left <= right) {
        var middle = Math.floor((right + left) / 2);

        // We have found our target.
        if (rotated[middle] === target) {
            return middle;
        }

        if (rotated[left] <= rotated[middle]) {
            // If the middle element is greater than the element to the left
            // of it, then that means that the bottom half is strictly increasing
            // from left to middle, i.e. it is sorted and we can just do a normal
            // binary search.

            // Is the target in this range?
            if (rotated[left] <= target && target < rotated[middle]) {
                // 'recurse' down this side
                right = middle - 1;
            } else {
                // 'recurse' down the other side
                left = middle + 1;
            }
        } else {
            // This means that the *top* half must be sorted, because
            // there can only be one place in the entire array where
            // the order is not sorted, and it's on the bottom half.

            if (rotated[middle] < target && target <= rotated[right]) {
                // 'recurse' down this side
                left = middle + 1;
            } else {
                // 'recurse' down the other side
                right = middle - 1;
            }
        }
    }

    return -1;
};
