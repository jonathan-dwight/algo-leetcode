var productExceptSelf = function (nums) {
    const output = [];

    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            let check = nums[j];
            product *= check;
        }
        output.push(product);
    }
    return output;
};

// linear solution - leetcode

var productExceptSelf = function (nums) {
    const result = [];
    let productSoFar = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar;
        productSoFar *= nums[i];
    }
    console.log(result);
    productSoFar = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] *= productSoFar;
        productSoFar *= nums[j];
    }
    return result;
};