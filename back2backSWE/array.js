//this one passes on leetCode

var threeSum = function (nums) {
    // sort the array
    // store this information
    // create a helper function that grabs the twoSum
    // i can just have a root index for the set

    nums.sort((a, b) => a - b);

    let threeSumArr = [];
    let finalCheck = nums.length - 2 // because need three

    for (let i = 0; i < finalCheck; i++) {
        if (nums[i] === nums[i - 1]) continue;
        findTwoSum(i, nums, threeSumArr);
    }
    return threeSumArr
};

const findTwoSum = (root, A, threeSumArr) => {
    let left = root + 1;
    let right = A.length - 1;

    while (left < right) {
        const sumOfThree = A[root] + A[left] + A[right];

        if (sumOfThree === 0) {
            threeSumArr.push([A[root], A[left], A[right]]);
            while (left < right && A[left] === A[left + 1]) left++
            while (left < right && A[right] === A[right - 1]) right--;
            left++;
            right--;

        } else if (sumOfThree < 0) {
            left++;
        } else {
            right--;
        }
    }
} 