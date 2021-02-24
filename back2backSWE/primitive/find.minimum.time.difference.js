const timeDifference = (times) => {
    // would have a nested for loop to check?
    // can assume the same day
    // efficiency only amount of hours / minutes
    // 24 * 60 = unique amounts array and map stringtime to it

    // assume time is not empty - clear with interviewer

    const seen = new Array(24 * 60).fill(false); // 1440;

    for (const time of times) {
        const n = timeToInt(time);

        if (seen[n]) {
            return 0;
        }

        seen[n] = true;
    }

    let prev = -1; // invalid number of minutes;
    let minDiff = 24 * 60 + 1; // this will always take first diff to be baseline
    let first = -1;
    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            if (prev != -1) {
                minDiff = Math.min(minDiff, i - prev);
            } else {
                first = i;
            }
            prev = i;
        }
    }

    minDiff = Math.min(minDiff, first + 1440 - prev);
    return minDiff;
};

const timeToInt = (time) => {
    // 60 * houur + minutes

    let hours = time.slice(0, 2);
    let minutes = time.slice(3, 5);

    const total = parseInt(hours) * 60 + parseInt(minutes);
    return total;
};
