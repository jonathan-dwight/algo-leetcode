function sortScores(unorderedScores, highestPossibleScore) {
    // Sort the scores in O(n) time
    let scoresArr = new Array(highestPossibleScore).fill(0);

    for (let i = 0; i < unorderedScores.length; i++) {
        let diff = highestPossibleScore - unorderedScores[i];
        scoresArr[diff] = unorderedScores[i];
    }

    return scoresArr.filter((val) => val !== 0);
}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const highestPossibleScore = 100;

// console.log(sortScores(unsortedScores, highestPossibleScore));
