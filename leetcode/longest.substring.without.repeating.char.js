var lengthOfLongestSubstring = function (s) {
    // can use ascii values to check;
    // set
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    let ans;
    let check = new Set();

    for (let i = 0; i < s.length; i++) {
        check.add(s[i]);
        for (let j = i + 1; j < s.length; j++) {
            if (check.has(s[j])) {
                if (!ans || ans < check.size) {
                    ans = check.size;
                }
                check = new Set();
                break;
            } else {
                check.add(s[j]);
            }
        }
    }
    if (ans < check.size) ans = check.size;
    if (!ans) ans = check.size;
    return ans;
};
