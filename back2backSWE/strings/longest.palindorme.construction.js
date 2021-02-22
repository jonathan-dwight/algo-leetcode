const longestPalindrome = (s) => {
    let maxPalindrome = 0; // this is going to hold the max palindrome number
    let checkHash = {};
    // we would want a hash to check the count of the total number of characters?
    //every even we can add that but every odd will only allow one

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        checkHash[char] = checkHash[char] ? checkHash[char] + 1 : 1;
    }

    let values = Object.values(checkHash);
    let numValue = -1;

    for (let j = 0; j < values.length; j++) {
        let val = values[j];
        if (val % 2 !== 0) {
            numValue = Math.max(numValue, val);
        } else {
            maxPalindrome += val;
        }
    }

    return numValue === -1 ? maxPalindrome : (maxPalindrome += 1);
};
