var findJudge = function (N, trust) {
    if (trust.length < 1 && N === 1) return 1;
    const judgeCheck = new Set();
    const trustHash = {};

    for (let i = 0; i < trust.length; i++) {
        const values = trust[i];
        const truster = values[0];
        const trustee = values[1];

        judgeCheck.add(truster);
        trustHash[trustee] = trustHash[trustee] ? trustHash[trustee] + 1 : 1;
    }

    for (let j = 0; j <= N; j++) {
        if (!judgeCheck.has(j) && trustHash[j] === N - 1) {
            return j;
        }
    }
    return -1;
};
