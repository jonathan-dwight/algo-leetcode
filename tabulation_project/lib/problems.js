// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end
function stepper(nums, memo = {}) {
    // count of how many steps i can take? 
    // want to be able to 
    // if number = 0.. no steps

    // tabulation
    let table = new Array(nums.length).fill(false);
    table[0] = true; //first position allows you to go through it

    for (let i = 0; i < nums.length; i++) {
        if (table[i] === true) {
            let maxRange = nums[i]; // max range
            for (let j = 1; j <= maxRange; j++) {
                table[j] = true;
            }
            // count -= 1;
        }
    }
    return table[nums.length-1];

    //memoization
    let key = nums.length;
    if (key in memo) return memo[nums];
    if (nums.length === 0) return true;
    

    let maxRange = nums[0];

    for (let step = 1; step <= maxRange; step++) {
        if (stepper(nums.slice(step), memo)) {
            memo[key] = true;
            return true;
        
        }
    }
    
    memo[key] = false;
    return false;

}


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 
function maxNonAdjacentSum(nums, memo = {}) {
    // elements cannot be right next to each other

    //table to hold the count of the elements?
    
    //tabulation
    // if (nums.length === 0) return 0;
    // let table = new Array(nums.length).fill(0); //understand the data type
    // table[0] = nums[0];
    

    // for (let i = 1; i < table.length; i++) {
    //     // each entry will have max adjacent sum
    //     let skipLeftNeighbor = table[i -2] === undefined ? 0 : table[i - 2];
    //     let includeThisNum = nums[i] + skipLeftNeighbor; 
    //     let notIncludeThisNum = table[i - 1];
    //     table[i] = Math.max(includeThisNum, notIncludeThisNum);
        
    // }

    // return table[table.length-1]

    //memo

    if (nums.length in memo) return memo[nums.length]
    if (nums.length === 0) return 0;
    let firstEle = nums[0];

    memo[nums.length] = Math.max(
        firstEle + maxNonAdjacentSum(nums.slice(2), memo), 
        maxNonAdjacentSum(nums.slice(1), memo)
    )

    return memo[nums.length]

}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {

    let table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;

    //table index is going to correspond to an amount
    // coins.forEach(val => {
    //     for (let amt = 0; amt < table.length; amt++) {
    //         for (let qty = 0; qty * val <= amt; qty++) {
    //             // this loop is for the coin value up to that amount
    //             let remainder = amt - qty * val
    //             let attempt = table[remainder] + qty;
    //             if (attempt < table[amt]) table[amt] = attempt
    //             // this is updating the table with the minimum value
    //         }
    //     }
    //     // this is not yeuhan approved
    // })

    coins.forEach(coin => {
        for (let amtValue = coin; amtValue < table.length; amtValue++) {
            let dpIdx = amtValue - coin;
            let attempt = table[dpIdx] + 1; // not adding the coin value
            if (attempt < table[amtValue]) table[amtValue] = attempt;
        }
        console.log(table);
    })
    return table[amount];
}

// tabulation - construct top to bottom
console.log(minChange([1, 2, 5], 10))

// just grabbing value - iteration to grab the dp to check








// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 1 
// [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5] 2
// [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2] 10

// [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5] 2
// [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2] 5

// return the dp[amount] 

// you are constantly checking the back of the dp
// compare and change the index with the minimum

module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};