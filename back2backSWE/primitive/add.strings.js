const addStrings = (s1, s2) => {
    // i had the right idea with adding
    // when adding we always want to process from behind

    let i = s1.length - 1;
    let j = s2.length - 1;

    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0) {
        let sum = carry;

        if (i >= 0) {
            sum += parseInt(s1[i]);
            i--;
        }

        if (j >= 0) {
            sum += parseInt(s2[j]);
            j--;
        }

        if (sum >= 10) {
            carry = 1;
        }

        result += (sum % 10).toString();
    }
    if (carry === 1) result += "1";
    return result.split("").reverse().join("");
};
