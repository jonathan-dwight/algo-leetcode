var partitionLabels = function (S) {
    // maybe want to find the most repeated characters until we can get + 1

    const rangeHash = {};

    for (let i = 0; i < S.length; i++) {
        let char = S[i];
        rangeHash[char] = rangeHash[char] ? [rangeHash[char][0], i] : [i, i];
    }

    const orderIdx = Object.values(rangeHash);
    // .sort((a,b) => a[0] - b[0]);

    const idx = [];

    let currIdx = 0;

    for (const range of orderIdx) {
        if (range[0] > currIdx) {
            idx.push(range[0]);
            currIdx = range[1];
        } else {
            currIdx = Math.max(currIdx, range[1]);
        }
    }

    if (idx.length === 0) return [S.length];

    const output = [idx[0]];

    for (let i = 1; i < idx.length; i++) {
        output.push(idx[i] - idx[i - 1]);
    }

    output.push(S.length - idx[idx.length - 1]);
    return output;
};
