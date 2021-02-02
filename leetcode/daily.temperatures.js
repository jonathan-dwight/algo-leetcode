// BRUTE FORCE;

var dailyTemperatures = function (T) {
    let days = [];

    for (let i = 0; i < T.length; i++) {
        let temp = T[i];
        for (let j = i + 1; j < T.length; j++) {
            let check = T[j];
            if (check > temp) {
                days.push(j - i);
                break;
            }
            if (j === T.length - 1) {
                days.push(0);
            }
        }
        if (i === T.length - 1) {
            days.push(0);
        }
    }
    return days;
};


// sliding window

var dailyTemperatures = function (T) {
    const ans = [];
    let left = 0;
    let right = 0;

    while (left < T.length) {
        if (T[left] < T[right]) {
            ans.push(right - left);
            left++;
            right = left;
        } else if (right === T.length - 1) {
            if (T[left] >= T[right]) {
                ans.push(0);
            } else {
                ans.push(right - left);
            }
            left++;
            right = left;
        } else {
            right++;
        }
    }

    return ans;
};


// STACK SOLUTION

var dailyTemperatures = function (T) {
    const result = new Array(T.length).fill(0);
    const stack = []; // going to store day and temperature

    for (let i = T.length - 1; i >= 0; i--) {
        while (stack.length && T[i] >= stack[stack.length - 1][0]) {
            stack.pop();
        }
        // this conditional will find a warmer day
        if (stack.length && T[i] < stack[stack.length - 1][0]) {
            const distance = stack[stack.length - 1][1] - i;
            result[i] = distance;
        }
        stack.push([T[i], i]);
    }

    return result;
};