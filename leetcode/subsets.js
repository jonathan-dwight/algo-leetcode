//     let ans = {};
//     ans['test'] = [];
//     ans[nums] = nums;
//     console.log(ans)
//     if (nums.length === 1) return Object.values(ans);

//     for (let i = 0; i < nums.length; i++) {
//         ans[nums[i]] = [nums[i]]
//         for (let j = i+1; j < nums.length; j++) {
//             let check = `${nums[i].toString()},${nums[j].toString()}`;
//             let otherCheck = nums.slice(i, j);
//             if (!(check in ans)) ans[check] = [nums[i], nums[j]];
//             if (!(otherCheck.join('') in ans)) ans[check] = [otherCheck];
//         }
//     }

//     let newArr = Object.values(ans);
//     return newArr;

// let ans = [];
// dfs([], 0);

// function dfs(current, index) {
//     ans.push(current);
//     for (let i = index; i < nums.length; i++) {
//         dfs(current.concat(nums[i]), i + 1);
//     }
// }

// return ans;



var subsets = function (nums) {
    const ans = [];

    dfsSubsets([], 0, ans, nums);
    return ans;
};

const dfsSubsets = (current, index, ans, nums) => {
    ans.push(current);

    for (let i = index; i < nums.length; i++) {
        dfsSubsets(current.concat(nums[i]), i + 1, ans, nums);
    }

    return ans;
};