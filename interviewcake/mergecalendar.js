function mergeRanges(calendar) {
    calendar.sort((a, b) => a.startTime - b.startTime);

    let start = calendar[0].startTime;
    let end = calendar[0].endTime;
    let calendarArr = [];

    for (let i = 1; i < calendar.length; i++) {
        if (calendar[i].startTime >= start && calendar[i].startTime < end) {
            if (end < calendar[i].endTime) {
                end = calendar[i].endTime;
            }
        } else {
            calendarArr.push({ startTime: start, endTime: end });
            start = calendar[i].startTime;
            end = calendar[i].endTime;
        }

        if (
            i === calendar.length - 1 &&
            calendarArr[calendarArr.length - 1].endTime !==
                calendar[i].startTime
        ) {
            calendarArr.push({ startTime: start, endTime: end });
        }

        if (i === calendar.length - 1 && calendar[i].endTime === end) {
            if (calendarArr.length === 0) {
                calendarArr.push({ startTime: start, endTime: end });
            }
            calendarArr[calendarArr.length - 1].endTime = end;
        }
    }
    return calendarArr;
}

let calen = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
];

// console.log(mergeRanges(calen));