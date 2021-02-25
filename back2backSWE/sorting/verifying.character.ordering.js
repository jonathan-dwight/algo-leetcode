const verifyOrdering = (A, ordering) => {
    const seen = new Set();

    let i = 0;
    while (i < ordering[0].length) {
        let beforeNum = A.indexOf(ordering[0][i]);
        for (let j = 0; j < ordering.length; j++) {
            if (i < ordering[j].length) {
                let letter = ordering[j][i];
                let letterNum = A.indexOf(letter);

                if (beforeNum > letterNum) {
                    return false;
                }
            }
        }
        i++;
    }

    return true;
};


const verifyOrdering = (A, ordering) => {
    const table = {};

    for (let i = 0; i < ordering.length; i++) {
        table[ordering.charAt(i)] = i;
    }

    for (let i = 0; i < A.length - 1; i++) {
        if (compareStrings(table, A[i], A[i + 1]) == false) {
            return false;
        }
    }

    return true;
};

const compareStrings = (table, s1, s2) => {
    let counter = 0;

    while (counter < s1.length && counter < s2.length) {
        if (table[s1.charAt(counter)] != table[s2.charAt(counter)]) {
            return table[s1.charAt(counter)] < table[s2.charAt(counter)];
        }

        counter += 1;
    }
    return s1.length < s2.length;
};
