const findMin = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    if (nums.length === 0) return -1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2); // grab the mid idx

        if (nums[mid - 1] > nums[mid] && nums[mid + 1] > nums[mid]) {
            return nums[mid];
        }

        if (nums[left] < nums[mid]) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return nums[nums.length - 1];
};

// their solution
const findMin = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums.length > 0 ? nums[left] : -1;
};
