const findAndReplacePattern = (words, pattern) => {
    // we can check if the ascii values are aligned with each other
    // helper function to check if the pattern matches up
    let ans = [];

    for (const ele of words) {
        if (isAligned(ele, pattern)) ans.push(ele);
    }

    return ans;
};

const isAligned = (word, pattern) => {
    if (word.length !== pattern.length) return false;

    let wordPatternChar = new Array(256).fill(0);
    let patternWordChar = new Array(256).fill(0);

    for (let i = 0; i < word.length; i++) {
        let wordAscii = word[i].charCodeAt(0);
        let patternAscii = pattern[i].charCodeAt(0);

        if (wordPatternChar[wordAscii] === 0) {
            wordPatternChar[wordAscii] = patternAscii;
        }

        if (patternWordChar[patternAscii] === 0) {
            patternWordChar[patternAscii] = wordAscii;
        }

        if (
            wordPatternChar[wordAscii] !== patternAscii ||
            patternWordChar[patternAscii] !== wordAscii
        ) {
            return false;
        }
    }
    return true;
};
