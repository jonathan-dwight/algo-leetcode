var increasingTriplet = function (nums) {
    //     let firstNumber = Infinity
    //     let secondNumber = Infinity

    //     for (let i = 0; i < nums.length; i++) {
    //         let currentNumber = nums[i]
    //         if (currentNumber > firstNumber && currentNumber > secondNumber) {
    //             return true;
    //         }
    //         // replacing the numbers as you go
    //         if (currentNumber > firstNumber) {
    //             secondNumber = currentNumber;
    //         } else {
    //             firstNumber = currentNumber
    //         }
    //     }
    //     return false;

    let left = 0;
    let mid = 1;
    let right = 2;

    while (right < nums.length) {
        let leftValue = nums[left];
        let midValue = nums[mid];
        let rightValue = nums[right];

        if (leftValue < midValue && midValue < rightValue) {
            return true;
        }

        if (leftValue >= midValue) {
            left++;
            mid = left + 1;
            right = mid + 1;
        } else if (rightValue <= midValue) {
            if (right === nums.length - 1) {
                mid++;
                right = mid + 1;
            } else {
                right++;
            }
        }
    }
    return false;
};
