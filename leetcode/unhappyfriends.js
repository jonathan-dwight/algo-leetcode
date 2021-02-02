var unhappyFriends = function (n, preferences, pairs) {
    // n can always be
    const favs = new Array(n);
    for (let [i, j] of pairs) {
        favs[i] = preferences[i].indexOf(j);
        favs[j] = preferences[j].indexOf(i);
    }

    console.log(favs);

    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < favs[i]; j++) {
            let partner = preferences[i][j];
            // console.log(partner, preferences[partner].indexOf(i), favs[partner]);
            if (preferences[partner].indexOf(i) < favs[partner]) {
                count++;
                break;
            }
        }
    }
    return count;
};
