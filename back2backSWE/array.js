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


const enumeratePrimes = (n) => {
    let ans = [];

    for (let i = 0; i < n; i++) {
        if (isPrime(i)) ans.push(i);
    }

    return ans;
}

const isPrime = (num) => {
    if (num < 2) return false;

    for (let i = 0; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}


const contiguousSubstrings = (start, end) => {
    let count = 0;

    for (let i = 0; i < start.length; i++) {
        let checkRangeMin = start[i];
        let checkRangeMax = end[i];

        for (let j = i+1; j < start.length; j++) {
            if (start[j] > checkRangeMin && start[j] < checkRangeMax) {
                continue;
            } else if (end[j] < checkRangeMax && end[j] > checkRangeMin) {
                continue;
            } else {
                count++;
            }
        }
    }
    return count;
}

// o(n^2)


console.log(contiguousSubstrings([1,1,6,7], [5,3,8,10]));


const TextFormatting = (starting, ending, styles) => {
    // have an array to hold all the values;
    // max length of the array can be in the ending

    let maxArr = Math.max(...ending) + 1;
    let textArr = new Array(maxArr).fill('');
    let count = 0;

    for (let i = 0; i < starting.length; i++) {
        let check = false;
        for (let j = starting[i]; j < ending[i]+1; j++) {
            if (textArr[j].includes(styles[i])) continue;
            if (textArr[j] !== styles[i]) {
                textArr[j] += styles[i]
                check = true;
            }
        }
        if (check) count += 2 
    }
    // console.log(textArr)
    return count 
}

// o(n^2) - time
// o(n) - space

console.log(TextFormatting([1,3,9,5,9], [5,8,10,6,10], ['b', 'i', 'b', 'i', 'u']))