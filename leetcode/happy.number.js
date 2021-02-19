var isHappy = function (n) {
    let set = new Set();
    return isHappyHelper(n, set);
};

var isHappyHelper = (sum, set) => {
    if (sum === 1) return true;
    if (set.has(sum)) return false;
    let newSum = sum.toString();
    let otherSum = 0;
    for (let i = 0; i < newSum.length; i++) {
        otherSum += Math.pow(parseInt(newSum[i]), 2);
    }
    set.add(sum);
    return isHappyHelper(otherSum, set);
};
