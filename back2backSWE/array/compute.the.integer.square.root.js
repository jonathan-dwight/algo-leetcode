const squareRoot = (n) => {
    let low = 1;
    let high = n;
    let ans = 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (Math.floor(mid * mid) <= n) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
};
