const distanceOfClosestRepeatedEntries = (sentence) => {
    let checkHash = {};
    let num = Infinity;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        checkHash[char] = checkHash[char] ? checkHash[char].concat(i) : [i];
    }

    Object.values(checkHash).forEach((val) => {
        console.log(val);
        if (val.length >= 2) {
            num = Math.min(num, val[1] - val[0]);
        }
    });

    return num === Infinity ? -1 : num;
};

// THEIR SOLUTION
const distanceOfClosestRepeatedEntries = (sentence) => {
    const wordToIndexLastSeenAt = {};
    let nearestRepeatedEntryDistance = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < sentence.length; i++) {
        const word = sentence[i];

        if (word in wordToIndexLastSeenAt) {
            const lastAppearanceIndex = wordToIndexLastSeenAt[word];
            const distanceToLastAppearance = i - lastAppearanceIndex;

            nearestRepeatedEntryDistance = Math.min(
                nearestRepeatedEntryDistance,
                distanceToLastAppearance
            );
        }

        wordToIndexLastSeenAt[word] = i;
    }

    return nearestRepeatedEntryDistance == Number.MAX_SAFE_INTEGER
        ? -1
        : nearestRepeatedEntryDistance;
};
