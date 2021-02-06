var subarraySum = function (nums, k) {
    // nums.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let total = nums[i];
        if (total === k) {
            count += 1;
        }
        for (let j = i + 1; j < nums.length; j++) {
            let newCheck = nums[j];
            total += newCheck;
            if (total === k) {
                count += 1;
            }
        }
    }
    return count;
};

var subarraySumHashMap = function (nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) count += map.get(sum - k);
        if (map.has(sum)) map.set(sum, map.get(sum) + 1);
        else map.set(sum, 1);
    }
    return count;
};
