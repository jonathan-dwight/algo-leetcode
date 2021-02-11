var isPalindrome = function (s) {
    if (s.length === 0) return true;

    let checkString = "";

    for (let i = 0; i < s.length; i++) {
        let letter = s[i].toLowerCase();
        let value = letter.charCodeAt(0);
        if (value >= 97 && value <= 122) {
            checkString += letter;
        } else if (value >= 48 && value <= 57) {
            checkString += letter;
        }
    }

    let left = 0;
    let right = checkString.length - 1;

    while (left < right) {
        leftChar = checkString[left];
        rightChar = checkString[right];

        if (leftChar !== rightChar) return false;
        left++;
        right--;
    }

    return true;
};
