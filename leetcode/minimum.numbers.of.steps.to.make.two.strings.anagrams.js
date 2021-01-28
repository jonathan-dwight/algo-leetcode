var minSteps = function (s, t) {
    let count = 0;
    let checkHash = {};

    for (const ele of s) {
        checkHash[ele] = checkHash[ele] ? (checkHash[ele] += 1) : 1;
    }

    for (const letter of t) {
        if (letter in checkHash) {
            checkHash[letter] -= 1;
        }
    }
    let check = Object.values(checkHash).filter((val) => val > 0);
    for (const val of check) {
        count += val;
    }

    return count;
};

// SOLVING WITHOUT CREATING ARRAY
var minSteps = function (s, t) {
    let count = 0;
    let checkHash = {};

    for (const ele of s) {
        checkHash[ele] = checkHash[ele] ? (checkHash[ele] += 1) : 1;
    }

    for (const letter of t) {
        if (letter in checkHash) {
            checkHash[letter] -= 1;
        }
    }
    // let check = Object.values(checkHash).filter((val) => val > 0);
    for (const value in checkHash) {
        if (checkHash[value] > 0) count += checkHash[value];
    }

    return count;
};