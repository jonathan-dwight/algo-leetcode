var wordBreak = function (s, wordDict) {
    //     let table = new Array(s.length + 1).fill(false);
    //     // start inclusive
    //     // end exclusive
    //     table[0] = true;

    //     for (let i = 0; i < table.length; i++) {
    //         if (table[i] === false) continue;

    //         for (let j = i+1; j < table.length; j++) {
    //             let word = s.slice(i, j);
    //             if (wordDict.includes(word)) {
    //                 table[j] = true;
    //             }
    //         }
    //     }

    //     return table[s.length]

    let newSet = new Set(wordDict);

    let table = new Array(s.length + 1).fill(false);
    table[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            let word = s.slice(j, i);
            if (newSet.has(word)) {
                let dpIdx = j;
                if (table[dpIdx]) {
                    table[i] = true;
                    break;
                }
            }
        }
    }
    return table[table.length - 1];
};
