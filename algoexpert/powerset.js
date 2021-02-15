function powerset(array) {
    // Write your code here.
    let ans = [];

    dfs([], 0, ans, array);
    return ans;
}

function dfs(current, index, ans, array) {
    ans.push(current);
    for (let i = index; i < array.length; i++) {
        dfs(current.concat(array[i]), i + 1, ans, array);
    }
}
