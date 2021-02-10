var expressiveWords = function(S, words) {
    // group is 3 or more
    // has to be equal to the word S in terms of how many characters it extends
    // did not know it had to be adjacent
    
    // store the count of each in the hash
    
    const countHash = createHash(S);
    let count = 0;
        
    for (let j = 0; j < words.length; j++) {
        let check = false;
        const checkWord = createHash(words[j]);
        const keys = Object.keys(checkWord);
        if (keys.length !== Object.keys(countHash).length) continue;
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (!countHash[key]) continue;
            // if (countHash[key] === )
            if (countHash[key] !== checkWord[key]) {
                if (countHash[key] >= 3) check = true;
                if (countHash[key] < 3 || (countHash[key] < checkWord[key])) {
                    check = false;
                    break
                }
                
            }
        }
        if (check) count += 1;
    }
    
    return count;
        
};

function createHash(wordCheck) {
    const countHash = {};
    for (let i = 0; i < wordCheck.length; i++) {
        const word = wordCheck[i];
        countHash[word] = countHash[word] ? countHash[word] + 1 : 1;
    }
    return countHash;
}