var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);

    const arr = [];

    let start = intervals[0][0];
    let end = intervals[0][1];

    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        let checkStart = interval[0];
        let checkEnd = interval[1];

        if (checkStart <= end) {
            if (checkEnd > end) {
                end = checkEnd;
            }
        }

        if (checkStart > end) {
            arr.push([start, end]);
            start = checkStart;
            end = checkEnd;
        }

        if (i === intervals.length - 1) {
            arr.push([start, end]);
        }
    }

    return arr;
};
