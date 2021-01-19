// main solution
    var ans = "";
    var map = {};
    t.split("").forEach((ch) => (map[ch] = (map[ch] || 0) + 1));
    var count = Object.keys(map).length;

    // 2. traverse s to find boundaries
    // both l & r are inclusive
    var l = 0;
    var r = -1;

    while (r < s.length) {
        if (count === 0) {
            // good condition
            // l~r contains t

            // update ans
            if (!ans || r - l + 1 < ans.length) {
                ans = s.slice(l, r + 1);
            }

            // get rid of curr ch and then move l
            if (map[s[l]] !== undefined) {
                map[s[l]]++;
            }
            if (map[s[l]] > 0) {
                count++;
            }
            l++;
        } else {
            // bad condition
            // l~r doesn't contain t

            // move r and add new ch
            r++;
            if (map[s[r]] !== undefined) {
                map[s[r]]--;
            }
            if (map[s[r]] === 0) {
                count--;
            }
        }
    }
    return ans;


// FAILED ATTEMPT

var minWindow = function (s, t) {
    let checkMap = {};
    t.split("");
    checkMap = createHash(t);

    let ans = "";
    let temp = ""; // this will be a placeholder string

    for (let i = 0; i < s.length; i++) {
        let check = s[i];
        temp += check;
        if (check in checkMap) {
            checkMap[check] -= 1;
            let firstCheck = Object.values(checkMap).some((val) => val < 0);
            if (firstCheck) {
                temp = check;
                checkMap = createHash(t);
                continue;
            }
            let checkVal = Object.values(checkMap).every((val) => val === 0);
            if (checkVal) {
                let holder = i;
                if (!t.includes(temp[0])) {
                    let pointer = 0;
                    while (!t.includes(temp[pointer])) {
                        pointer++;
                    }
                    temp = temp.slice(pointer, temp.length);
                }
                if (ans.length === 0) ans = temp;
                if (ans.length > temp.length) ans = temp;
                temp = s[i - 1];
                temp += check;
                checkMap = createHash(t);
                if (temp[0] in checkMap) checkMap[temp[0]] -= 1;
                if (temp[1] in checkMap) checkMap[temp[1]] -= 1;
            }
        }
        // console.log(temp)
    }

    return ans;
};

var createHash = (str) => {
    let checkMap = {};

    for (let i = 0; i < str.length; i++) {
        if (str[i] in checkMap) {
            checkMap[str[i]] += 1;
        } else {
            checkMap[str[i]] = 1;
        }
    }

    return checkMap;
};

// let secondCheck = Object.values(checkMap).some(val => val < 0);
//                 console.log(checkMap, secondCheck);
//                 if (secondCheck) {
//                     checkMap = createHash(t);
//                     console.log(i, s.length-1)
//                     if (i === s.length-1) {
//                         temp = temp.slice(1, temp.length);
//                         for (let j = 0; j < temp.length; j++) {
//                             if (temp[j] in checkMap) checkMap[temp[j]] -= 1;
//                         }
//                         let checkVal = Object.values(checkMap).every((val) => val === 0);
//                         console.log(checkMap);
//                         if (checkVal) {
//                             if (ans.length > temp.length) ans = temp;
//                         }
//                     } else {
//                         temp = check;
//                     }
//                 }
//             }
