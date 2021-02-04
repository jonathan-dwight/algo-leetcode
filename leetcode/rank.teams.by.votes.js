// BRUTE FORCE WRONG

var rankTeams = function (votes) {
    // need to store the place in which they scored in
    if (votes.length === 1) return votes[0];
    const score = new Map(
        votes[0].split("").map((c) => [c, new Array(votes[0].length).fill(0)])
    );

    for (s of votes) {
        for (let i = 0; i < s.length; i++) {
            score.get(s[i])[i]++;
        }
    }

    console.log(score);

    let checkScore = votes[0]
        .split("")
        .sort((a, b) => {
            for (let i = 0; i < votes[0].length; i++) {
                if (score.get(a)[i] > score.get(b)[i]) return -1;
                if (score.get(a)[i] < score.get(b)[i]) return 1;
            }
            return a < b ? -1 : 1; // this is handling if there is a tie
        })
        .join("");

    return checkScore;
};


// can use array to check since length is only 26
// let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let arr = new Array(alpha.length).fill(0);
// let ans = [];
// let maxCheck = votes[0].length;
// let counter = {};

// for (let z = 0; z < votes[0].length; z++) {
//     let wordCheck = votes[0];
//     counter[wordCheck[z]] = 0;
// }

// for (let i = 0; i < votes.length; i++) {
//     let word = votes[i];
//     for (let j = 0; j < word.length; j++) {
//         let char = word[j];
//         let count = maxCheck - j;
//         counter[char] += count;
//     }
// }

// let sortedArr = Object.entries(counter).sort(([, a], [, b]) => b - a);
// for (let f = 0; f < sortedArr.length; f++) {
//     ans.push(sortedArr[f][0]);
// }

// return ans.join("");
