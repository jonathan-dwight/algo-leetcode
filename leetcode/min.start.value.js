var minStartValue = function (nums) {
    let sum = 0;
    let i = 1;
    let j = -1;

    while (j < nums.length) {
        j++;
        sum += nums[j];
        if (j === 0) sum += i;
        if (sum < 1) {
            sum = 0;
            j = -1;
            i++;
        }
    }
    return i;
};
