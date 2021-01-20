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

// o(n) - solution on LeetCode;

    // var start = 0, maxLen = 0;
    // var map = new Map();

    // for (var i = 0; i < s.length; i++) {
    //     var ch = s[i];

    //     if (map.get(ch) >= start) start = map.get(ch) + 1;
    //     map.set(ch, i);

    //     if (i - start + 1 > maxLen) maxLen = i - start + 1;
    // }

    // return maxLen;

   var lengthOfLongestSubstring = function(s) {
    let seen = new Set();
    let max = 0;
    let p1 = 0;
    let p2 = 0;
    while( p1 < s.length && p2 < s.length ) {
      let start = s[p1];
      let check = s[p2];
        if (!seen.has(check)) {  
          p2++;
          const currLength = p2 - p1;
          max = currLength > max ? currLength : max;
          seen.add(check);
        } else {
          seen.delete(start);
          p1++;
        }
    }
    return max;
};


