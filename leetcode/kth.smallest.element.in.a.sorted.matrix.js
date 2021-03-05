var kthSmallest = function (matrix, k) {
    // let arr = [].concat(...matrix);
    // arr.sort((a, b) => a - b);
    // return arr[k - 1];

    let lo = matrix[0][0],
        hi = matrix[matrix.length - 1][matrix[0].length - 1]; // +1 because we don't want to forget the last number
    while (lo < hi) {
        console.log("----- new iteration ----");
        console.log(lo, hi);
        let mid = lo + Math.floor((hi - lo) / 2);
        console.log(mid);
        let count = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                console.log("for loop", matrix[i][j]);
                if (matrix[i][j] <= mid) count++;
                else break; // breaks out of inner for loop
            }
        }
        console.log("count", count);
        if (count < k) lo = mid + 1;
        else hi = mid;
    }
    return lo;
};

/*
[
    [1,5,9],
    [10,11,13],
    [12,13,15]
]

last element greater than the first you know you need to subtract that value

*/
