var partition = function (s) {
    return findPalindrome(s, 0, [], []);
};

var findPalindrome = function (str, start, parts, result) {
    if (start === str.length) {
        result.push([...parts]);
        return result;
    }

    for (let i = start + 1; i <= str.length; i++) {
        const target = str.substring(start, i);
        if (isPalindrome(target)) {
            parts.push(target);
            findPalindrome(str, i, parts, result);
            parts.pop();
        }
    }
    return result;
};

const isPalindrome = function (str) {
    return str === str.split("").reverse().join("");
};
