const validPalindrome = (s) => {
    const string = s.toLowerCase();
    console.log(string);
    let left = 0;
    let right = string.length - 1;

    while (left <= right) {
        // console.log(string[left].charCodeAt())
        while (
            (97 > string[left].charCodeAt() ||
                string[left].charCodeAt() > 122) &&
            left < right
        ) {
            left++;
        }
        // console.log(string[right].charCodeAt())
        while (
            (97 > string[right].charCodeAt() ||
                string[right].charCodeAt() > 122) &&
            left < right
        ) {
            right--;
        }

        if (string[left] !== string[right]) return false;
        left++;
        right--;
    }

    return true;
};
