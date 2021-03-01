var triangleNumber = function (nums) {
    // find all triplets within array
    // the sum of two sides must be greater than the other side FOR ALL 3 sides

    let sum = 0;
    const visited = new Set();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let z = j + 1; z < nums.length; z++) {
                if (checkTriplets([nums[i], nums[j], nums[z]])) sum += 1;
            }
        }
    }

    return sum;
};

// helper function that checks if all three sides are true

const checkTriplets = (arr) => {
    if (arr[0] + arr[1] <= arr[2]) return false;
    if (arr[0] + arr[2] <= arr[1]) return false;
    if (arr[1] + arr[2] <= arr[0]) return false;

    return true;
};


// o(n^2 solution) - LEETCODE - like 3 sum
//leetcode.com/problems/valid-triangle-number/discuss/128135/A-similar-O(n2)-solution-to-3-Sum
var triangleNumber = function (nums) {
    // find all triplets within array
    // the sum of two sides must be greater than the other side FOR ALL 3 sides

    nums.sort((a, b) => a - b);

    let sum = 0;

    for (let k = nums.length - 1; k > 1; k--) {
        for (let i = 0, j = k - 1; i < j; ) {
            const currTotal = nums[i] + nums[j];
            if (currTotal > nums[k]) {
                sum += j - i; // get every number in between because it is sorted
                j--;
            } else {
                i++;
            }
        }
    }

    return sum;
};