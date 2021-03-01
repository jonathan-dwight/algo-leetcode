/*

Array of Array Products
Given an array of integers arr, you’re asked to calculate for each index i the 
product of all integers except the integer at that index (i.e. except arr[i]). 
Implement a function arrayOfArrayProducts that takes an array of integers and 
returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.

--------

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4] 

prev = 84
// [84, 24, 14, 42] - forward product



output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]
[84, 24, 56, 42]
*/

// only allowed one extra array in space

// brute force way - NOOOOOO!


//[ 2, 14, 42, 168]
// [0, , 56, 42]


// [84, 12, 4, 1] - backwards product


const arrayProducts = (nums) => {

    const ans = [1];

    // forward product
    for (let i = 1; i < nums.length; i++) {
        const value = ans[i-1] * nums[i-1];
        ans.push(value);
    }
    console.log(ans);
    let prev = nums[nums.length - 1];
    for (let j = ans.length - 2; j >= 0; j--) {
        const newValue = ans[j] * prev;
        ans[j] = newValue;
        const newPrev = nums[j] * prev;
        prev = newPrev;
    }

    return ans;
}

console.log(arrayProducts([2, 7, 3, 4]));