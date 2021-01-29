var countVowelStrings = function (n) {
    // want to grab every possibility of the vowel combination
    const counts = { a: 1, e: 1, i: 1, o: 1, u: 1 };

    for (let i = 2; i <= n; i++) {
        counts.a = counts.a + counts.e + counts.i + counts.o + counts.u; //5
        counts.e = counts.e + counts.i + counts.o + counts.u; //4
        counts.i = counts.i + counts.o + counts.u; // 3
        counts.o = counts.o + counts.u; // 2
        
    }

    let total = 0;

    for (const letter in counts) {
        total += counts[letter];
    }
    //15
    return total;
};
