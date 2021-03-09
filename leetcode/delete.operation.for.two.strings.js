var minDistance = function (word1, word2) {
    const memo = {};
    return minDistanceHelper(word1, word2, memo);
};
/* sea seat
    ea seat
    a  seat
    "" seat
*/
const minDistanceHelper = (word1, word2, memo) => {
    if (memo[word1 + word2]) return memo[word1 + word2];
    if (word1 === word2) return 0;
    if (word1 === "") return word2.length;
    if (word2 === "") return word1.length;

    if (word1[0] === word2[0]) {
        const value = minDistanceHelper(word1.slice(1), word2.slice(1), memo);
        memo[word1 + word2] = value;
    } else {
        const left = 1 + minDistanceHelper(word1.slice(1), word2, memo);
        const right = 1 + minDistanceHelper(word1, word2.slice(1), memo);
        memo[word1 + word2] = Math.min(left, right);
    }

    return memo[word1 + word2];
};
