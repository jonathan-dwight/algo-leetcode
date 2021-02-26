const replaceWordsWithPrefix = (prefixes, sentence) => {
    // store a has and to see if each word is included in the string

    const words = sentence.split(" ");
    const newArr = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let minWord = "";

        for (let j = 0; j < prefixes.length; j++) {
            let checkWord = prefixes[j];
            if (word.includes(checkWord)) {
                if (minWord.length === 0) {
                    minWord = checkWord;
                } else if (minWord.length > checkWord.length) {
                    minWord = checkWord;
                }
            }
        }

        minWord.length === 0 ? newArr.push(word) : newArr.push(minWord);
    }

    return newArr.join(" ");
};


// BackToBack's Solution

const replaceWordsWithPrefix = (prefixes, sentence) => {
    var words = sentence.split(" ");
    let mapping = new Map();

    // Add each prefix to a map for O(1) access
    for (var i = 0; i < prefixes.length; i++) {
        mapping.set(prefixes[i], true);
    }

    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        for (var j = 0; j < word.length; j++) {
            // Check if the word contains a prefix in mapping
            if (mapping.get(word.substring(0, j)) != null) {
                words[i] = word.substring(0, j);
                break;
            }
        }
    }

    return words.join(" ");
};
