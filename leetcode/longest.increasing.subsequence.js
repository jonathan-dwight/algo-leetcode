var lengthOfLIS = function (nums) {
    let checkArr = [];

    let left = 0;
    let right = 1;
    let arr = [];
    while (left < nums.length - 1) {
        // console.log(left);
        let leftValue = nums[left];
        let rightValue = nums[right];
        if (arr.length === 0) arr.push(leftValue);
        let lastValue = arr[arr.length - 1];

        if (rightValue < leftValue || right === nums.length - 1) {
            left++;
            right = left + 1;
            checkArr.push(arr);
            arr = [];
            continue;
        }

        if (lastValue > rightValue && rightValue > leftValue) {
            if (arr.length === 1) {
                arr.push(rightValue);
                right++;
            } else {
                arr.pop();
                arr.push(rightValue);
                right++;
            }
        } else if (rightValue >= lastValue) {
            right++;
            if (lastValue === rightValue) continue;
            arr.push(rightValue);
        }
    }
    let max = 0;
    for (let i = 0; i < checkArr.length; i++) {
        const val = checkArr[i];
        if (val.length > max) max = val.length;
    }
    return max;
};

var lengthOfLIS = function (nums) {
    var n = nums.length;
    if (!n) return 0;
    var len = 1;
    var dp = [nums[0]];
    for (var i = 1; i < n; i++) {
        if (dp[len - 1] < nums[i]) {
            dp[len++] = nums[i];
        } else {
            var left = 0,
                right = len - 1,
                num = nums[i];
            while (left < right) {
                var mid = left + Math.floor((right - left) / 2);
                if (dp[mid] < num) left = mid + 1;
                else right = mid;
            }
            dp[right] = num;
        }
    }
    return len;
};

/*

// how do we store the subsequences 

let holder = 3

if holder > right - just pop off array and then push in new value, holder becomes new value

if right > holder = r++, holder - 101

if left moves up then push values

[10,9,2,5,3,7,101,18]
      L
                   R

*/
