var minSetSize = function (arr) {

    let half = Math.ceil(arr.length / 2);
    let countHash = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in countHash) {
            countHash[arr[i]] += 1;
        } else {
            countHash[arr[i]] = 1;
        }
    }

    let sortedArr = Object.values(countHash).sort((a, b) => b - a);
    // can optimize with the bucket sort solution

    let check = 0;
    let ans = 0;

    for (let j = 0; j < sortedArr.length; j++) {
        check += sortedArr[j];
        ans++;
        if (check >= half) {
            return ans;
        }
    }
    return ans;
};