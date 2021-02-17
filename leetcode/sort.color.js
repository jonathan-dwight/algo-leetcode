var sortColors = function (nums) {
    // how to sort an array in place?
    // return nums.sort((a, b) => a - b);

    let high = nums.length - 1;
    let low = 0;

    for (let i = 0; i <= high; i++) {
        let check = nums[i];
        if (check === 0) {
            [nums[i], nums[low]] = [nums[low], nums[i]];
            low++;
        } else if (check === 2) {
            [nums[i], nums[high]] = [nums[high], nums[i]];
            high--;
            i--;
        }
    }
    return nums;
};
