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

function gameWinner(colors) {
    // Write your code here
    // we want to be able to check if adjacent pieces are there
    // keep track of player

    if (colors.length === 2) {
        if (colors[0] === 'w') {
            return 'bob';
        } else {
            return 'wendy';
        }
    }

    let w = 0;
    let b = 0;

    let count = 0
    for (let i = 0; i < colors.length; i++) {
        count += 1
        if (colors[i] !== colors[i + 1]) {
            if (colors[i] === 'w') {
                w += count - 1
            } else {
                b += count - 1
            }
            count = 0;
        }
    }

    if (w > b) return 'wendy';
    return 'bob';

}

function stockPairs(stocksProfit, target) {
    // Write your code here
    let countHash = {};
    let count = 0;
    let ids = new Set();
    // need to check for a pair that will be repeated... 

    for (let i = 0; i < stocksProfit.length; i++) {
        if (stocksProfit[i] in countHash && stocksProfit[i] !== countHash[i]) {
            if (ids.has(stocksProfit[i])) {
                continue
            } else {
                ids.add(stocksProfit[i]);
                count += 1;
            }
        } else {
            countHash[target - stocksProfit[i]] = target - stocksProfit[i];
        }
    }
    return count;
}

function countingDigits (arr) {
    let countOfOnes = 0;
    let swap = 0; // the zeros that are out of order

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) countOfOnes += 1;
        if (arr[i] === 0) swap += countOfOnes;
    }

    // need to check the other side to see if the swaps are easier

    let countOfZero = arr.length - countOfOnes;
    let reverseSwap = (countOfOnes * countOfZero) - swap
    return Math.min(displace, reverseSwap)
}


// how sami solved it

function countingDigits(arr) {
    let countOfOnes = 0;
    let swaps1s = 0; // the zeros that are out of order

    let countOfZeros = 0;
    let swaps0s = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1)  {
            countOfOnes += 1;
            swaps1s += countOfOnes;
        } else {
            countOfZeros += 1;
            swaps0s += countOfZeros;        
        };
    }

    return Math.min(swaps0s, swaps1s)

    // need to check the other side to see if the swaps are easier
}

function groupAnagrams(words) {
    // Write your code here.

    // hash to store the count of each letter

    // we can the length of the words if they match the current one
    let checkHash = {};

    for (let i = 0; i < words.length; i++) {
        let sortString = words[i].split().sort();
        if (sortString.join() in checkHash) {
            checkHash[sortString].push(words[i]);
        } else {
            checkHash[sortString] = [words[i]];
        }
    }
    return Object.values(checkHash);
}


// Do not edit the line below.
const rotate = (matrix) => {

  let size = matrix.length-1;

  // do layer < matrix.length/2 because it when drawn out.. it will be the amount
  // of layers to rotate
  for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
    for (let i = layer; i < size - layer; i++) {
      let top = matrix[layer][i]; // top left
      let right = matrix[i][size-layer]; // top right
      let bottom = matrix[size-layer][size-i]; // bottom right
      let left = matrix[size-i][layer]; // bottom right

      // this is doing the swap
      matrix[layer][i] = left;
      matrix[i][size-layer] = top;
      matrix[size-layer][size-i] = right;
      matrix[size-i][layer] = bottom;

    }

  }
  return matrix;
}


const enumeratePrimes = (n) => {
    if (n <= 1) {
        return []
    }

    // Assume that n > 2
    const output = []
    let i = 2;
    while (i < n) {
        let j = 2;
        let isPrime = true;

        // Check if i is prime
        while (j < i) {
            if (i % j == 0) {
                isPrime = false;
            }

            j++;
        }

        if (isPrime) {
            output.push(i);
        }

        i++;
    }

    return output;
}

function minRemove(arr) {

    let arrHalf = Math.ceil(arr.length / 2); //3
    let countHash = {}; // o(n) - space
    // { 3: 1, 5: 3, 1: 2, 7: 4 }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] in countHash) {
            countHash[arr[i]] += 1;
        } else {
            countHash[arr[i]] += 1;
        }
    } 
    // o(n) - time

    let ans = 0;
    let sortedArr = Object.values(countHash).sort((a, b) => b - a) // o(n log n)
    // [1, 3, 7, -2, 4, 2]
    // indexes = [n, 1, 2, 1, 1, n, n, 1, n, n, n....]
    // 0, 1, 2, 3, 4, 5, 6, 7…

    // negidx[n, n, 1, n, n]
    // 0 1 2 3 4
    // indexes[indexes.length - 1]
    let check = 0;
    for(let j = 0; j < sortedArr.length; j++) {
        check += sortedArr[j];
        ans++;
        if(check >= arrHalf) {
            return ans;
        }
    } o(n)

    return ans;
}
